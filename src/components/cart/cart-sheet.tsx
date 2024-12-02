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
import Link from 'next/link';

const CartSheet = () => {

  const { cart } = useCart();

  useEffect(() => {
    if (!cart) {
      createCartAndSetCookie();
    }
  }, [cart]);

  return (
    <Sheet>
      <SheetTrigger>
        <div className="relative">
          <span className="rounded-full aspect-square w-4 text-xs bg-red-500 text-white absolute bottom-0 left-0">{ typeof cart !== "undefined" ? cart.lines.length : 0 }</span>
          <ShoppingCartIcon size={32} className="text-neutral-950" />
        </div>
      </SheetTrigger>
      <SheetContent>

        <SheetHeader>
          <SheetTitle>My Cart</SheetTitle>
          <SheetDescription>
            Your shopping cart.
          </SheetDescription>
        </SheetHeader>

        <ScrollArea className="h-3/4 flex flex-col justify-start items-start overflow-y-auto">
          {
            cart?.lines.map((line) => (
              <CartRowSm key={line.merchandise.id} row={line} />
            ))
          }
        </ScrollArea>

        <SheetFooter>
          <div className="w-full flex flex-col justify-center items-center">
            <CartCalculation cost={cart?.cost} className="w-full" />
            {/* add "?logged_in=true" to the checkout url */}
            <Link href={cart ? cart.checkoutUrl : "#"}><Button className="w-full">Proceed to Checkout</Button></Link>
          </div>
        </SheetFooter>

      </SheetContent>
    </Sheet>
  );
}

export { CartSheet };