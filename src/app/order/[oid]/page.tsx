import { MoveLeft } from "lucide-react";
import { H2, P } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { CartCalculation } from "@/components/cart/cart-calculation";
import { getOrderDetails } from "@/components/customer/actions";
import { Order as OrderType } from "@/lib/shopify/types";
import Link from "next/link";


const Order = async ({ params }: { params: { oid: string } }) => {

  const orderId = `gid://shopify/Order/${params.oid}`;

  // **************************
  //TODO: the values are being printed properly on the server, but for some reason the client is not able to get the values
  const orderDetails = await getOrderDetails(orderId) as OrderType;

  return (
    <div className="w-full flex justify-center">
      <main className="container flex flex-col justify-start items-start pt-8 px-2 lg:px-0">

        <Link className="flex flex-row" href="/order-history">
          <MoveLeft className="mr-2" size={24} />back
        </Link>
        <H2>Order Details</H2>

        <div className="w-full flex flex-col justify-start items-start mt-4">
          <p>Order id: {orderDetails?.id}</p>
          <p>Order date: {orderDetails.createdAt.toString().slice(0, 10)}</p>
          <p>Total cost: ${orderDetails?.totalPrice?.amount}</p>
        </div>

        {orderDetails?.lineItems?.map((product) => (
          <span key={product.name}>{product.name}</span>
        ))}

        <div className="w-full flex flex-row justify-end items-center mt-8">
          <CartCalculation />
        </div>

        <div className="w-full flex flex-row justify-between items-center mt-4 mb-8">
          <P>Clear Cart</P>
          <Button>Checkout</Button>
        </div>

      </main>
    </div>
  );
}

export default Order;