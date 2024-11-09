'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { addItem, updateItemQuantity, removeItem } from '@/components/cart/actions';
import { useCart } from '@/components/cart/cart-context';
import { Product } from '@/lib/shopify/types';
import { TrashIcon } from "lucide-react";
import { toast } from "sonner";

// Button used on product card and product page
const AddToCart = ({ className, product, rounded="bottom" }: { className?: string, product: Product, rounded?: "full"|"bottom" }) => {
  
  const { cart, addCartItem } = useCart();
  //const [message, formAction] = useActionState(addItem, null);
  //const actionWithProduct = formAction.bind(null, "gid://shopify/Product/9535946064170");
  let initialCount = 0;
  if (cart?.lines.length) {
    const line = cart.lines.find((line) => line.merchandise.product.id === product.id);
    if (line) initialCount = line.quantity;
  }
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    const line = cart?.lines.find((line) => line.merchandise.product.id === product.id);
    setCount(line ? line.quantity : 0);
  }, [cart?.lines]);

  // sample product
  /*const sampleProduct = {
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

  

  return (
    <>
      {
        count ? (
          <ItemCounter variantID={product.variants[0].id} count={count} setCount={setCount} rounded={rounded} />
        ) : (
          <Button
            className={`
              w-full p-2 bg-[#5e922e] hover:bg-lime-600 text-primary-foreground
              ${rounded==="full" ? `rounded-t-md` : `rounded-t-none`} rounded-b-md
              ${className}
            `}
            onClick={async () => {
              setCount(count + 1);
              toast("Item added to cart", {
                description: `${product.title} added to cart`
              });
              addCartItem(product.variants[0], product); // add item to local cart
              await addItem(null, product.variants[0].id); // add item to Shopify cart
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
const ItemCountBtn = ({ count: ItemCount, variantID }: { count: number, variantID: string }) => {

  const [count, setCount] = useState(ItemCount);

  return (
    <div className="w-28">
      <ItemCounter variantID={variantID} count={count} setCount={setCount} size="small" />
    </div>
  )
}

// TODO: handle size styling properly
const ItemCounter = ({ variantID, count, setCount, size="medium", rounded="full" }:
  {
    variantID: string,
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

  const { updateCartItem } = useCart();

  return (
    <div className={`grid grid-cols-4 w-full ${sizeStyle}`}>
      <button
        className={`
          col-span-1 rounded-bl-md border px-2 hover:bg-secondary font-semibold
          ${rounded==="full" ? "rounded-tl-md" : ""}
          ${sizeStyle}
        `}
        onClick={async () => 
          {
            setCount(count ? count - 1 : 0)
            updateCartItem(variantID, "minus");
            await updateItemQuantity(null, {merchandiseId: variantID, quantity: count - 1});
          }}
      >-</button>
      <input type="text"
        className={`col-span-2 outline-none border-y p-2 text-center ${sizeStyle}`}
        value={count}
        readOnly
      />
      <button
        className={`
          rounded-br-md border px-2 col-span-1 hover:bg-secondary font-semibold
          ${rounded==="full" ? "rounded-tr-md" : ""}
          ${sizeStyle}
        `}
        onClick={async () => {
          setCount(count + 1)
          updateCartItem(variantID, "plus");
          await updateItemQuantity(null, {merchandiseId: variantID, quantity: count + 1});
        }}
      >
        +
      </button>
    </div>
  );
}

const DeleteCartItem = ({ type="text", variantID }: { type?: string, variantID: string }) => {

  const { updateCartItem } = useCart();

  if (type === "button") {
    return (
      <Button
        className="col-span-1" variant="outline" size="icon"
        onClick={async () => {
          updateCartItem(variantID, "delete");
          await removeItem(null, variantID);
        }}
      >
        <TrashIcon size={24} />
      </Button>
    )
  } else {
    return (
      <div
        className="flex justify-start items-end underline cursor-pointer text-sm lg:text-base"
        onClick={async () => {
          updateCartItem(variantID, "delete");
          await removeItem(null, variantID);
        }}
      >
        Remove
      </div>
    );
  }
}

export { AddToCart, ItemCountBtn, DeleteCartItem };