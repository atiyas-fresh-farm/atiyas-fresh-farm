export type Maybe<T> = T | null;

export type Connection<T> = {
  edges: Array<Edge<T>>;
};

export type Edge<T> = {
  node: T;
};

export type Fields = {
  key: string;
  value: string;
};

export type FinancialStatus = "AUTHORIZED"|"EXPIRED"|"PAID"|"PARTIALLY_PAID"|"PARTIALLY_REFUNDED"|"PENDING"|"REFUNDED"|"VOIDED";

export type Cart = Omit<ShopifyCart, 'lines'> & {
  lines: CartItem[];
};

export type CartProduct = {
  id: string;
  handle: string;
  title: string;
  featuredImage: Image;
};

export type CartItem = {
  id: string | undefined;
  quantity: number;
  cost: {
    totalAmount: Money;
  };
  merchandise: {
    id: string;
    title: string;
    product: CartProduct;
  };
};

export type Collection = ShopifyCollection;

export type Image = {
  url: string;
  altText: string;
  width: number;
  height: number;
};

export type ProductVariant = {
  id: string;
};

export type ProductCollection = {
  handle: string;
  title: string;
};

export type Money = {
  amount: string;
};

export type Product = Omit<ShopifyProduct, 'variants' | 'images' | 'collections'> & {
  variants: ProductVariant[];
  images: Image[];
  collections: ProductCollection[];
};

export type Category = Omit<ShopifyCategory, 'fields'> & {
  subcategories: string[];
};

// TODO: create types
export type Order = Omit<ShopifyOrder, 'fulfillments' | 'lineItems'> & {
  fulfillments: Fulfillment[];
  lineItems: LineItem[];
};

export type Fulfillment = ShopifyFulfillment;

export type CustomerAddress = ShopifyCustomerAddress;

export type LineItem = ShopifyLineItem;

export type CustomerToken = {
  accessToken: string;
  expiresIn: number;
  idToken: string;
  refreshToken: string;
};

export type SEO = {
  title: string;
  description: string;
};

export type ShopifyCart = {
  id: string | undefined;
  checkoutUrl: string;
  cost: {
    subtotalAmount: Money;
    totalAmount: Money;
    totalTaxAmount: Money;
  };
  lines: Connection<CartItem>;
  totalQuantity: number;
};

export type ShopifyCollection = {
  handle: string;
  title: string;
  description: string;
  image: Image;
  seo: SEO;
  updatedAt: string;
};

export type ShopifyCategory = {
  handle: string;
  id: string;
  type: string;
  fields: Fields[];
};

export type ShopifyProduct = {
  id: string;
  handle: string;
  availableForSale: boolean;
  title: string;
  description: string;
  variants: Connection<ProductVariant>;
  collections: Connection<ProductCollection>;
  compareAtPriceRange: {
    maxVariantPrice: Money;
  };
  priceRange: {
    maxVariantPrice: Money;
  };
  featuredImage: Image;
  images: Connection<Image>;
  seo: SEO;
  tags: string[];
};

export type ShopifyCustomerAddress = {
  id: string;
  firstName: string;
  lastName: string;
  company: string;
  phoneNumber: string;
  address1: string;
  address2: string;
  city: string;
  province: string;
  country: string;
  zip: string;
};

export type ShopifyLineItem = {
  id: string;
  name: string;
  price: Money;
  quantity: number;
  totalDiscount: Money;
  totalPrice: Money;
  currentTotalPrice: Money;
  image: Image;
  productId: string;
  variantId: string;
};

export type ShopifyFulfillment = {
  createdAt: Date;
  estimatedDeliveryAt: Date;
  id: string;
  isPickedUp: boolean;
  status: "CANCELLED"|"ERROR"|"FAILURE"|"SUCCESS"|"OPEN"|"PENDING";
  updatedAt: Date;
};

// TODO: change type Date to DateTime
// extract enum types and add comments for each type
export type ShopifyOrder = {
  billingAddress: ShopifyCustomerAddress;
  cancelledAt: Date;
  cancelReason: "CUSTOMER"|"DECLINED"|"FRAUD"|"INVENTORY"|"OTHER"|"STAFF";
  confirmationNumber: string;
  createdAt: Date;
  edited: boolean;
  financialStatus: FinancialStatus;
  fulfillments: Connection<ShopifyFulfillment>;
  id: string;
  lineItems: Connection<ShopifyLineItem>;
  name: string;
  number: number;
  paymentInformation: {
    paymentCollectionUrl: string;
    paymentStatus: FinancialStatus;
    totalOutstandingAmount: Money;
    totalPaidAmount: Money;
  };
  poNumber: string;
  processedAt: Date;
  shippingAddress: ShopifyCustomerAddress;
  shippingLine: {
    handle: string
    originalPrice: Money;
    title: string;
  };
  statusPageUrl: string;
  subtotal: Money;
  totalPrice: Money;
  totalShipping: Money;
  totalTax: Money;
};

export type ShopifyCustomerToken = {
  access_token: string;
  expires_in: number;
  id_token: string;
  refresh_token: string;
};





/**
 * Shopify Operations
 */
export type ShopifyCartOperation = {
  data: {
    cart: ShopifyCart;
  };
  variables: {
    cartId: string;
  };
};

export type ShopifyCreateCartOperation = {
  data: { cartCreate: { cart: ShopifyCart } };
};

export type ShopifyAddToCartOperation = {
  data: {
    cartLinesAdd: {
      cart: ShopifyCart;
    };
  };
  variables: {
    cartId: string;
    lines: {
      merchandiseId: string;
      quantity: number;
    }[];
  };
};

export type ShopifyRemoveFromCartOperation = {
  data: {
    cartLinesRemove: {
      cart: ShopifyCart;
    };
  };
  variables: {
    cartId: string;
    lineIds: string[];
  };
};

export type ShopifyUpdateCartOperation = {
  data: {
    cartLinesUpdate: {
      cart: ShopifyCart;
    };
  };
  variables: {
    cartId: string;
    lines: {
      id: string;
      merchandiseId: string;
      quantity: number;
    }[];
  };
};

export type ShopifyCollectionOperation = {
  data: {
    collection: ShopifyCollection;
  };
  variables: {
    handle: string;
  };
};

export type ShopifyCollectionProductsOperation = {
  data: {
    collection: {
      products: Connection<ShopifyProduct>;
    };
  };
  variables: {
    handle: string;
    reverse?: boolean;
    sortKey?: string;
  };
};

export type ShopifyCollectionsOperation = {
  data: {
    collections: Connection<ShopifyCollection>;
  };
};

export type ShopifyCategoriesOperation = {
  data: {
    metaobjects: Connection<ShopifyCategory>
  }
}

export type ShopifyMenuOperation = {
  data: {
    menu?: {
      items: {
        title: string;
        url: string;
      }[];
    };
  };
  variables: {
    handle: string;
  };
};

export type ShopifyProductOperation = {
  data: { product: ShopifyProduct };
  variables: {
    handle: string;
  };
};

export type ShopifyProductRecommendationsOperation = {
  data: {
    productRecommendations: ShopifyProduct[];
  };
  variables: {
    productId: string;
  };
};

export type ShopifyProductsOperation = {
  data: {
    products: Connection<ShopifyProduct>;
  };
  variables: {
    query?: string;
    reverse?: boolean;
    sortKey?: string;
  };
};