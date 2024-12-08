import { MoveLeft } from "lucide-react";
import { H2 } from "@/components/ui/typography";
import { CartRow } from "@/components/cart/cart-row";
import { CartCalculation } from "@/components/cart/cart-calculation";
import { PageContainer } from "@/components/page-container";
import { getOrderDetails } from "@/components/customer/actions";
import { Order as OrderType } from "@/lib/shopify/types";
import Link from "next/link";


const Order = async ({ params }: { params: { oid: string } }) => {

  const orderId = `gid://shopify/Order/${params.oid}`;
  const order = await getOrderDetails(orderId) as OrderType;

  if (!order) {
    return (
      <H2>no such order exists</H2>
    );
  }

  const cost = {
    subtotalAmount: order.subtotal,
    totalAmount: order.totalPrice,
    totalTaxAmount: order.totalTax
  }

  return (
    <div className="w-full flex justify-center">
      <PageContainer className="flex flex-col justify-start items-start pt-8 px-2 lg:px-0">

        <Link className="flex flex-row" href="/order-history">
          <MoveLeft className="mr-2" size={24} />back
        </Link>
        <H2>Order Details</H2>

        <div className="w-full flex flex-col justify-start items-start mt-4">
          <p>Order id: {params.oid}</p>
          <p>Order date: {order.createdAt.toString().slice(0, 10)}</p>
          <p>Total cost: ${order?.totalPrice?.amount}</p>
        </div>

        {
          order?.lineItems?.map((line) => {

            const lineItem = {
              id: line.productId,
              quantity: line.quantity,
              cost: {
                totalAmount: line.totalPrice,
              },
              merchandise: {
                id: line.variantId,
                title: line.name,
                product: {
                  id: line.productId,
                  handle: "",
                  title: line.name,
                  featuredImage: line.image,
                }
              }
            };
            return <CartRow key={line.id} editable={false} row={lineItem} />;

          })
        }

        <div className="w-full flex flex-row justify-end items-center my-8">
          <CartCalculation cost={cost} />
        </div>

      </PageContainer>
    </div>
  );
}

export default Order;