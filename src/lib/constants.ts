export type SortFilterItem = {
  title: string;
  slug: string | null;
  sortKey: 'RELEVANCE' | 'BEST_SELLING' | 'CREATED_AT' | 'PRICE';
  reverse: boolean;
};

export const defaultSort: SortFilterItem = {
  title: 'Relevance',
  slug: null,
  sortKey: 'RELEVANCE',
  reverse: false
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  { title: 'Trending', slug: 'trending-desc', sortKey: 'BEST_SELLING', reverse: false }, // asc
  { title: 'Latest arrivals', slug: 'latest-desc', sortKey: 'CREATED_AT', reverse: true },
  { title: 'Price: Low to high', slug: 'price-asc', sortKey: 'PRICE', reverse: false }, // asc
  { title: 'Price: High to low', slug: 'price-desc', sortKey: 'PRICE', reverse: true }
];

export const TAGS = {
  collections: 'collections',
  products: 'products',
  cart: 'cart',
  customer: 'customer'
};

export const HIDDEN_PRODUCT_TAG = 'nextjs-frontend-hidden';
export const DEFAULT_OPTION = 'Default Title';
export const SHOPIFY_GRAPHQL_API_ENDPOINT = '/api/2023-01/graphql.json';

export const SHOPIFY_SHOP_ID = '90291601706';
export const SHOPIFY_CUSTOMER_AUTHORIZATION_ENDPOINT = `https://shopify.com/authentication/${SHOPIFY_SHOP_ID}/oauth/authorize`
export const SHOPIFY_CUSTOMER_TOKEN_ENDPOINT = `https://shopify.com/authentication/${SHOPIFY_SHOP_ID}/oauth/token`
export const SHOPIFY_CUSTOMER_LOGOUT_ENDPOINT = `https://shopify.com/authentication/${SHOPIFY_SHOP_ID}/logout`

export const WEBSITE_URL = 'https://atiyas-fresh-farm-git-dev-atiyas-fresh-farm-52cce129.vercel.app';