'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { addItem } from '@/components/cart/actions';
import { useCart } from '@/components/cart/cart-context';
import { Product } from '@/lib/shopify/types';

// Button used on product card and product page
const AddToCart = ({ className, product }: { className?: string, product: Product }) => {
  
  const { cart, addCartItem } = useCart();
  //const [message, formAction] = useActionState(addItem, null);
  //const actionWithProduct = formAction.bind(null, "gid://shopify/Product/9535946064170");
  const [count, setCount] = useState(0);

  // sample product
  /*const product = {
    id: "gid://shopify/Product/9535946064170",
    handle: "crispy-besan-roti-15-pc",
    availableForSale: true,
    title: "Crispy Besan Roti 15 pc",
    description: "",
    variants: [{ id: "gid://shopify/ProductVariant/49443003334954" }],
    priceRange: {
      maxVariantPrice: {
        amount: "4.29"
      }
    },
    featuredImage: {
      altText: "",
      height: 3552,
      url: "https://cdn.shopify.com/s/files/1/0902/9160/1706/files/crispy-roti-besan.png?v=1729470480",
      width: 3781
    },
    images: [
      {
        altText: "",
        height: 3552,
        url: "https://cdn.shopify.com/s/files/1/0902/9160/1706/files/crispy-roti-besan.png?v=1729470480",
        width: 3781
      }
    ],
    seo: {
      description: "",
      title: ""
    },
    tags: ["Roti"]
  }*/

  /**
   * TODO:
   * - update cart context with addCartItem
   * - update cart context with updateCartItem
   * - update cart context with removeCartItem
   * - update cart context with clearCart
   * - update ShopifyDB with addToCart
   */
  //console.log(message)

  return (
    <>
      {
        count ? (
          <ItemCounter count={count} setCount={setCount} rounded="bottom" />
        ) : (
          <Button
            className={`w-full p-2 bg-lime-700 hover:bg-lime-600 text-primary-foreground rounded-t-none rounded-b-md ${className}`}
            onClick={async () => {
              addCartItem(product.variants[0], product);
              await addItem(null, product.variants[0].id);
              setCount(count + 1);
            }}
          >
            Add to Cart
          </Button>
        )
      }
    </>
  );
}

// Item counter that you see once an item has been added to the cart.
// Used in multiple places
const ItemCountBtn = ({ count: ItemCount }: { count: number }) => {
  const [count, setCount] = useState(ItemCount);
  return (
    <div className="w-28">
      <ItemCounter count={count} setCount={setCount} size="small" />
    </div>
  )
}

// TODO: handle size styling properly
const ItemCounter = ({ count, setCount, size="medium", rounded="full" }:
  {
    count: number,
    setCount: (e: number) => void,
    className?: string,
    size?: "small"|"medium"|"large",
    rounded?: "full"|"bottom"
  }
) => {

  let sizeStyle = "h-10";
  if (size==="small") sizeStyle = "h-8";
  if (size==="large") sizeStyle = "h-10";

  return (
    <div className={`grid grid-cols-4 w-full ${sizeStyle}`}>
      <button
        className={`
          col-span-1 rounded-bl-md border px-2 hover:bg-secondary font-semibold
          ${rounded==="full" ? "rounded-tl-md" : ""}
          ${sizeStyle}
        `}
        onClick={() => count ? setCount(count - 1) : 0}
      >-</button>
      <input type="text"
        className={`col-span-2 outline-none border-y p-2 text-center ${sizeStyle}`}
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <button
        className={`
          rounded-br-md border px-2 col-span-1 hover:bg-secondary font-semibold
          ${rounded==="full" ? "rounded-tr-md" : ""}
          ${sizeStyle}
        `}
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
}

export { AddToCart, ItemCountBtn };