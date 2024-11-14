import { SHOPIFY_CUSTOMER_AUTHORIZATION_ENDPOINT } from '@/lib/constants';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
import {
  generateState,
  generateNonce,
  generateCodeVerifier,
  generateCodeChallenge,
} from '@/lib/shopify/customer';


const redirectUri = "https://atiyas-fresh-farm-git-dev-atiyas-fresh-farm-52cce129.vercel.app";

export async function GET() {
  
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
  cookies().set('codeVerifier', verifier!);
  //localStorage.setItem('code-verifier', verifier);

  authorizationRequestUrl.searchParams.append(
    'code_challenge',
    challenge
  );
  authorizationRequestUrl.searchParams.append(
    'code_challenge_method',
    'S256'
  );
  
  return NextResponse.json(authorizationRequestUrl.toString(), {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
