'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CartRowSm } from "@/components/cart/cart-row";
import { ShoppingCartIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { CartCalculation } from "@/components/cart/cart-calculation";
import { createCartAndSetCookie } from "./actions";
import { useEffect } from 'react';
import { useCart } from '@/components/cart/cart-context';

const CartSheet = () => {

  const cart = [
    {
      count: 2,
      product: {
        title: "Mosambi 100g - Apple Shimla",
        imageURL: "/fruits-vegetables/mosambi.jpeg",
        altText: "Mosambi",
        price: 2.3
      }
    },
    {
      count: 5,
      product: {
        title: "Apple Shimla 1pc",
        imageURL: "/fruits-vegetables/apple-shimla.jpeg",
        altText: "apples",
        price: 1.8
      }
    },
    {
      count: 1,
      product: {
        title: "Dragon Fruits 1pc",
        imageURL: "/fruits-vegetables/drangon-fruit.jpeg",
        altText: "Dragon Fruit",
        price: 4.12
      }
    },
    {
      count: 2,
      product: {
        title: "Garlic 100g",
        imageURL: "/fruits-vegetables/garlic.jpeg",
        altText: "Garlic",
        price: 2.3
      }
    },
    {
      count: 5,
      product: {
        title: "Apple Shimla 1pc",
        imageURL: "/fruits-vegetables/apple-shimla.jpeg",
        altText: "apples",
        price: 1.8
      }
    },
    {
      count: 1,
      product: {
        title: "Dragon Fruits 1pc",
        imageURL: "/fruits-vegetables/drangon-fruit.jpeg",
        altText: "Dragon Fruit",
        price: 4.12
      }
    },
    {
      count: 2,
      product: {
        title: "Garlic 100g",
        imageURL: "/fruits-vegetables/garlic.jpeg",
        altText: "Garlic",
        price: 2.3
      }
    },
  ];
  const { cart: NextCart } = useCart();

  useEffect(() => {
    if (!NextCart) {
      createCartAndSetCookie();
    }
  }, [NextCart]);

  /**
   * id: string | undefined;
    checkoutUrl: string;
    cost: {
      subtotalAmount: Money;
      totalAmount: Money;
      totalTaxAmount: Money;
    };
    lines: Connection<CartItem>;
    totalQuantity: number;
   */
   /* export type CartProduct = {
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
        selectedOptions: {
          name: string;
          value: string;
        }[];
        product: CartProduct;
      };
    };*/

  console.log(NextCart);

  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingCartIcon size={24} className="text-neutral-950" />
      </SheetTrigger>
      <SheetContent>

        <SheetHeader>
          <SheetTitle>My Cart</SheetTitle>
          <SheetDescription>
            Your shopping cart.
          </SheetDescription>
        </SheetHeader>

        <ScrollArea className="h-3/4 flex flex-col justify-start items-start overflow-y-auto">
          {/* {
            NextCart.map((row, i) => (

            ))
          } */}
          {
            cart.map((row, i) => (
              <CartRowSm key={row.product.title} index={i} product={row.product} count={row.count} />
            ))
          }
        </ScrollArea>

        <SheetFooter>
          <div className="w-full flex flex-col justify-center items-center">
            <CartCalculation className="w-full" />
            <Button className="w-full">Proceed to Checkout</Button>
          </div>
        </SheetFooter>

      </SheetContent>
    </Sheet>
  );
}

export { CartSheet };