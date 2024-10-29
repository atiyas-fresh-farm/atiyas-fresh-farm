import { H2, P, Small } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { CartRow } from "@/components/cart/cart-row";
import { CartCalculation } from "@/components/cart/cart-calculation";

const Cart = () => {

  const cart = [
    {
      count: 2,
      product: {
        title: "Mosambi 100g",
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
    }
  ];

  return (
    <div className="w-full flex justify-center">
      <main className="container flex flex-col justify-start items-start py-10">
        <H2>Cart</H2>
        <Small>5 items</Small>

        {
          cart.map((row) => (
            <CartRow key={row.product.title} product={row.product} count={row.count} />
          ))
        }

        <div className="w-full flex flex-row justify-end items-center mt-6">
          <CartCalculation />
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