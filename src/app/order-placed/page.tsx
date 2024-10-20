import { H2, P } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const OrderPlaced = () => {
  return (
    <div className="w-full flex justify-center">
      <main className="container flex flex-col justify-start items-start pt-10">
        <H2>Order Placed</H2>
        <div className="w-full flex flex-row justify-between items-center mb-4">
          <P>
            Thank you for placing your order. You will receive an email with your order details. <br />
            We will call if any of the items you ordered are out of stock.
          </P>
          <Badge>Confirming your order</Badge>
        </div>
        <div className="flex flex-row space-x-4">
          <Link href="/" className="underline">Continue shopping</Link>
          <Link href="/order-history" className="underline">Order History</Link>
        </div>
      </main>
    </div>
  );
}

export default OrderPlaced;