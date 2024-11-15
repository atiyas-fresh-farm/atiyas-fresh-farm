import { SHOPIFY_CUSTOMER_AUTHORIZATION_ENDPOINT, WEBSITE_URL } from '@/lib/constants';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
import {
  generateState,
  generateNonce,
  generateCodeVerifier,
  generateCodeChallenge,
} from '@/lib/shopify/customer';


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
    WEBSITE_URL
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

  const url = authorizationRequestUrl.toString();
  console.log(url)
  
  // TODO: fix the response - getting html code currently
  return NextResponse.json(url, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
