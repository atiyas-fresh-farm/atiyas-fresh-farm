
export async function generateState(): Promise<string> {
  const timestamp = Date.now().toString();
  const randomString = Math.random().toString(36).substring(2);
  return timestamp + randomString;
}

export async function generateNonce(length: number) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let nonce = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    nonce += characters.charAt(randomIndex);
  }

  return nonce;
}


export async function generateCodeVerifier() {
  const rando = generateRandomCode();
  return base64UrlEncode(rando);
}

export async function generateCodeChallenge(codeVerifier: string) {
  const digestOp = await crypto.subtle.digest(
    { name: "SHA-256" },
    new TextEncoder().encode(codeVerifier)
  );
  const hash = convertBufferToString(digestOp);
  return base64UrlEncode(hash);
}

function generateRandomCode() {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return String.fromCharCode.apply(null, Array.from(array));
}

function base64UrlEncode(str: string) {
  const base64 = btoa(str);
  // This is to ensure that the encoding does not have +, /, or = characters in it.
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

function convertBufferToString(hash: ArrayBuffer) {
  const uintArray = new Uint8Array(hash);
  const numberArray = Array.from(uintArray);
  return String.fromCharCode(...numberArray);
}


export async function getAuthorizationUrl(): Promise<string>  {

  const state = await generateState();
  const nonce = await generateNonce(16);

  const clientId = process.env.SHOPIFY_CUSTOMER_CLIENT_ID ?? "";
  const authorizationEndpoint = process.env.SHOPIFY_CUSTOMER_AUTHORIZATION_ENDPOINT ?? "";
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
    `https://atiyas-fresh-farm-git-dev-atiyas-fresh-farm-52cce129.vercel.app`
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
  localStorage.setItem('code-verifier', verifier);

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