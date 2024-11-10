'use server';

import {
  //TAGS,
  SHOPIFY_CUSTOMER_AUTHORIZATION_ENDPOINT,
  SHOPIFY_CUSTOMER_TOKEN_ENDPOINT,
  //SHOPIFY_CUSTOMER_LOGOUT_ENDPOINT
} from '@/lib/constants';
//import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import {
  generateState,
  generateNonce,
  generateCodeVerifier,
  generateCodeChallenge
} from '@/lib/shopify/customer';

interface CustomerTokenType {
  accessToken: string;
  expiresIn: number;
  idToken: string;
  refreshToken: string;
}


const redirectUri = "https://atiyas-fresh-farm-git-dev-atiyas-fresh-farm-52cce129.vercel.app";

// Redirects the user to the Shopify Authorization URL
export async function redirectToAuthorizationUrl(): Promise<void> {

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
  
  redirect(authorizationRequestUrl.toString());
}

// Uses the code that Shopify sends to the redirect URI to get an access token
export async function getAccessTokenAndSetCookie(code: string): Promise<CustomerTokenType | string> {

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
  if (!codeVerifier) return 'Missing code verifier';
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

  interface AccessTokenResponse {
    access_token: string;
    expires_in: number;
    id_token: string;
    refresh_token: string;
  }
  
  const { access_token, expires_in, id_token, refresh_token } = await response.json() as AccessTokenResponse;
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

// TODO: Implement logout

// getUserDetails()
// getOrders()
// getOrder(orderId: string)