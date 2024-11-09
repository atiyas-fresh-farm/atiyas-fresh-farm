'use server';

import {
  //TAGS,
  SHOPIFY_CUSTOMER_AUTHORIZATION_ENDPOINT,
  SHOPIFY_CUSTOMER_TOKEN_ENDPOINT,
  //SHOPIFY_CUSTOMER_LOGOUT_ENDPOINT
} from '@/lib/constants';
//import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
//import { redirect } from 'next/navigation';
import {
  generateState,
  generateNonce,
  generateCodeVerifier,
  generateCodeChallenge
} from '@/lib/shopify/customer';


const redirectUri = "https://atiyas-fresh-farm-git-dev-atiyas-fresh-farm-52cce129.vercel.app";

// TODO: directly redirect to the authorization URL
export async function getAuthorizationUrl(): Promise<string>  {

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
  (await cookies()).set('code-verifier', verifier!);
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


export async function getAccessToken(code: string) {

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
  const codeVerifier = (await cookies()).get('code-verifier')?.value;
  if (!codeVerifier) return 'Missing code verifier';
  body.append('code_verifier', codeVerifier);
  //const codeVerifier = localStorage.getItem('code-verifier') ?? "";
  //body.append('code_verifier', codeVerifier);

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
  
  return await response.json() as AccessTokenResponse;
              
}