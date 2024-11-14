'use client'

import { H2, P, Small } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { CartRow } from "@/components/cart/cart-row";
import { CartCalculation } from "@/components/cart/cart-calculation";
import { useCart } from '@/components/cart/cart-context';

const Cart = () => {

  const { cart } = useCart();

  return (
    <div className="w-full flex justify-center">
      <main className="container flex flex-col justify-start items-start py-10 px-2 lg:px-0">
        <H2>Cart</H2>
        <Small>5 items</Small>

        {
          cart?.lines.map((line) => (
            <CartRow key={line.merchandise.id} row={line} />
          ))
        }

        <div className="w-full flex flex-row justify-end items-center mt-6">
          <CartCalculation cost={cart?.cost} className="w-full md:w-auto" />
        </div>

        <div className="w-full flex flex-row justify-between items-center pt-4">
          <P>Clear Cart</P>
          <Button>Checkout</Button>
        </div>

      </main>
    </div>
  );
}

export default Cart;