// TODO: import queries and mutations from the graphql file

import { isShopifyError } from '@/lib/type-guards';
import { SHOPIFY_SHOP_ID } from '@/lib/constants';
import { getOrdersQuery } from './queries/order';

type ExtractVariables<T> = T extends { variables: object } ? T['variables'] : never;

const endpoint = `https://shopify.com/${SHOPIFY_SHOP_ID}/account/customer/api/2024-01/graphql`;



/**
 * Primary fetch function for Shopify Customer API
 */
export async function shopfiyCustomerFetch<T>({
  cache = 'force-cache',
  headers,
  query,
  tags,
  variables,
  accessToken
}: {
  cache?: RequestCache;
  headers?: HeadersInit;
  query: string;
  tags?: string[];
  variables?: ExtractVariables<T>;
  accessToken: string;
}) {

  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': accessToken,
        ...headers
      },
      body: JSON.stringify({
        operationName: 'SomeQuery',
        ...(query && { query }),
        ...(variables && { variables })
      }),
      cache,
      ...(tags && { next: { tags } })
    });

    const body = await result.json();

    if (body.errors) {
      throw body.errors[0];
    }

    return {
      status: result.status,
      body
    };
  } catch (e) {
    if (isShopifyError(e)) {
      throw {
        cause: e.cause?.toString() || 'unknown',
        status: e.status || 500,
        message: e.message,
        query
      };
    }

    throw {
      error: e,
      query
    };
  }
        
}



/*
 * Helper functions for Shopify Customer Authentication
 */
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



/**
 * Queries and Mutations for the Shopify Customer API
 */

export async function getUser(accessToken: string|undefined): Promise<unknown> {

  if (!accessToken) {
    throw new Error('Missing access token');
  }

  const query = `
    query GetUser {
      customer {
        id
        firstName
        lastName
        emailAddress {
          emailAddress
        }
      }
    }
  `;

  const res = await shopfiyCustomerFetch<unknown>({
    query,
    accessToken
  });

  return res;
}

export async function getOrders(accessToken: string|undefined): Promise<unknown> {
  if (!accessToken) {
    throw new Error('Missing access token');
  }

  const res = await shopfiyCustomerFetch<unknown>({
    query: getOrdersQuery,
    accessToken
  });

  return res;
}

/**
 * get user details
 *  - personal details
 *  - addresses
 *  - payment details
 * 
 * get orders list for the user
 * 
 * get order details given a specific order id
 *  - order details
 * 
 * get checkout details
 * get cart details
 */