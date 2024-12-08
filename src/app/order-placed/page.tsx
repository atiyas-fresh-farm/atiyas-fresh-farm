import { H2, P } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { PageContainer } from "@/components/page-container";
import Link from "next/link";

const OrderPlaced = () => {
  return (
    <div className="w-full flex justify-center">
      <PageContainer className="flex flex-col justify-start items-start pt-10 px-2 lg:px-0">
        <H2>Order Placed</H2>
        <div className="w-full flex flex-row flex-wrap justify-between items-center mb-4">
          <P>
            Thank you for placing your order. You will receive an email with your order details. <br />
            We will call if any of the items you ordered are out of stock.
          </P>
          <Badge>Confirming your order</Badge>
        </div>
        <div className="flex flex-row space-x-4 mb-8">
          <Link href="/" className="underline">Continue shopping</Link>
          <Link href="/order-history" className="underline">Order History</Link>
        </div>
      </PageContainer>
    </div>
  );
}

export default OrderPlaced;