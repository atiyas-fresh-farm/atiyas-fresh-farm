'use server';

import {
  //TAGS,
  SHOPIFY_CUSTOMER_AUTHORIZATION_ENDPOINT,
  SHOPIFY_CUSTOMER_TOKEN_ENDPOINT,
  SHOPIFY_CUSTOMER_LOGOUT_ENDPOINT
} from '@/lib/constants';
//import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import {
  generateState,
  generateNonce,
  generateCodeVerifier,
  generateCodeChallenge,
  getUser,
  getOrders,
  getOrder
} from '@/lib/shopify/customer';
import {
  CustomerToken,
  ShopifyCustomerToken
} from "@/lib/shopify/types";


const redirectUri = "https://atiyas-fresh-farm-git-dev-atiyas-fresh-farm-52cce129.vercel.app";

export async function getAuthorizationUrl(): Promise<string> {

  const state = await generateState();
  const nonce = await generateNonce(16);

  const clientId = process.env.SHOPIFY_CUSTOMER_CLIENT_ID!;
  const authorizationEndpoint = SHOPIFY_CUSTOMER_AUTHORIZATION_ENDPOINT;
  const authorizationRequestUrl = new URL(authorizationEndpoint);

  authorizationRequestUrl.searchParams.append(
    'scope',
    'openid email customer-account-api:full'
  );
  authorizationRequestUrl.searchParams.append(
    'client_id',
    clientId
  );
  authorizationRequestUrl.searchParams.append(
    'response_type',
    'code'
  );
  authorizationRequestUrl.searchParams.append(
    'redirect_uri',
    redirectUri
  );
  authorizationRequestUrl.searchParams.append(
    'state',
    state
  );
  authorizationRequestUrl.searchParams.append(
    'nonce',
    nonce
  );
  /*
  Set this if the user is logged in and you do not want them to see the shopify signin screen
  authorizationRequestUrl.searchParams.append(
    'prompt',
    'none'
  );*/

  // Public client
  const verifier = await generateCodeVerifier();
  const challenge = await generateCodeChallenge(verifier);
  (await cookies()).set('codeVerifier', verifier!);
  //localStorage.setItem('code-verifier', verifier);

  authorizationRequestUrl.searchParams.append(
    'code_challenge',
    challenge
  );
  authorizationRequestUrl.searchParams.append(
    'code_challenge_method',
    'S256'
  );
  
  return authorizationRequestUrl.toString();
}

// Redirects the user to the Shopify Authorization URL
export async function redirectToAuthorizationUrl(): Promise<void> {
  redirect(await getAuthorizationUrl());
}

// Uses the code that Shopify sends to the redirect URI to get an access token
export async function getAccessTokenAndSetCookie(code: string): Promise<CustomerToken | "Missing code verifier"> {

  const clientId = process.env.SHOPIFY_CUSTOMER_CLIENT_ID!;
  const tokenEndpoint = SHOPIFY_CUSTOMER_TOKEN_ENDPOINT;
  const body = new URLSearchParams();

  body.append('grant_type', 'authorization_code');
  body.append('client_id', clientId);
  body.append(
    'redirect_uri',
    redirectUri,
  );
  body.append('code', code);

  // Public Client
  const codeVerifier = (await cookies()).get('codeVerifier')?.value;
  if (!codeVerifier) return "Missing code verifier";
  body.append('code_verifier', codeVerifier);

  const headers = {
    'content-type': 'application/x-www-form-urlencoded',
    // Confidential Client
    //'Authorization': 'Basic `<credentials>`'
  }

  const response = await fetch(tokenEndpoint, {
    method: 'POST',
    headers: headers,
    body,
  });
  
  const { access_token, expires_in, id_token, refresh_token } = await response.json() as ShopifyCustomerToken;
  const customerAccessToken = {
    accessToken: access_token,
    expiresIn: expires_in,
    idToken: id_token,
    refreshToken: refresh_token
  };
  (await cookies()).set('customerToken', JSON.stringify(customerAccessToken!));

  return customerAccessToken;
}

// TODO: Implement token refresh
export async function refreshToken(): Promise<CustomerToken> {

  // TODO: check if the token is expired

  const customerTokenString = (await cookies()).get('customerToken')?.value;
  const { idToken, refreshToken } = JSON.parse(customerTokenString!);

  const tokenEndpoint = SHOPIFY_CUSTOMER_TOKEN_ENDPOINT;
  const clientId = process.env.SHOPIFY_CUSTOMER_CLIENT_ID!;
  const body = new URLSearchParams();

  body.append('grant_type', 'refresh_token');
  body.append('client_id', clientId);
  body.append('refresh_token', refreshToken);

  const headers = {
    'content-type': 'application/x-www-form-urlencoded',
    // Confidential Client
    'Authorization': 'Basic `<credentials>`'
  }

  const response = await fetch(tokenEndpoint, {
    method: 'POST',
    headers: headers,
    body,
  });

  const {access_token, expires_in, refresh_token} =
    await response.json() as Omit<ShopifyCustomerToken, 'id_token'>;
  const customerAccessToken = {
    accessToken: access_token,
    expiresIn: expires_in,
    idToken,
    refreshToken: refresh_token
  };

  (await cookies()).set('customerToken', JSON.stringify(customerAccessToken!));

  return customerAccessToken;
}

export async function getLogoutUrl(): Promise<string> {
  
  const customerTokenString = (await cookies()).get('customerToken')?.value;

  if (!customerTokenString) return "Customer Access Token not set"

  const { idToken } = JSON.parse(customerTokenString!);

  const logoutEndpoint = SHOPIFY_CUSTOMER_LOGOUT_ENDPOINT;
  const logoutURL = new URL(logoutEndpoint);

  logoutURL.searchParams.append(
    'id_token_hint',
    idToken
  );

  /*
    If you want to redirect the user to a specific page after logout
    logoutURL.searchParams.append(
      'post_logout_redirect_uri',
      redirectUri
    );
  */

  return logoutURL.toString();
}

export async function redirectToLogout(): Promise<void> {
  redirect(await getLogoutUrl());
}


export async function getUserDetails(): Promise<unknown> {

  const customerTokenString = (await cookies()).get('customerToken')?.value;
  const { accessToken } = JSON.parse(customerTokenString!) as CustomerToken;

  //TODO: check if the token is expired. If so, refresh it

  if (!customerTokenString) return "Customer Access Token not set";

  try {
    const userDetails = await getUser(accessToken);
    //revalidateTag(TAGS.customer);
    return userDetails;
  } catch (e) {
    console.error(e);
    return 'Error retrieving user details';
  }
}

export async function getOrdersList(): Promise<unknown> {
  const customerTokenString = (await cookies()).get('customerToken')?.value;
  const { accessToken } = JSON.parse(customerTokenString!) as CustomerToken;

  //TODO: check if the token is expired. If so, refresh it

  if (!customerTokenString) return "Customer Access Token not set";

  try {
    const orderDetails = await getOrders(accessToken);
    //revalidateTag(TAGS.customer);
    return orderDetails;
  } catch (e) {
    console.error(e);
    return 'Error retrieving orders list';
  }
}

export async function getOrderDetails(orderId: string): Promise<unknown> {
  const customerTokenString = (await cookies()).get('customerToken')?.value;
  const { accessToken } = JSON.parse(customerTokenString!) as CustomerToken;

  //TODO: check if the token is expired. If so, refresh it

  if (!customerTokenString) return "Customer Access Token not set";

  try {
    const ordersList = await getOrder(orderId, accessToken);
    //revalidateTag(TAGS.customer);
    return ordersList;
  } catch (e) {
    console.error(e);
    return 'Error retrieving orders list';
  }
}

// getUserDetails()
// getOrders()
// getOrder(orderId: string)