import { MoveLeft } from "lucide-react";
import { H2, P } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { CartCalculation } from "@/components/cart/cart-calculation";
import { getOrderDetails } from "@/components/customer/actions";
import Link from "next/link";


const Order = async ({ params }: { params: { oid: string } }) => {

  const orderId = `gid://shopify/Order/${params.oid}`;

  type OrderDetailsType = {
    billingAddress: unknown;
    cancelledAt: Date;
    cancelReason: string;
    confirmationNumber: string;
    createdAt: Date;
    edited: boolean;
    financialStatus: string;
    fulfillments: unknown;
    id: string;
    lineItems: unknown;
    name: string;
    number: number;
    paymentInformation: unknown;
    poNumber: number;
    processedAt: Date;
    shippingAddress: unknown;
    shippingLine: unknown;
    statusPageUrl: string;
    subtotal: {
      amount: number;
    };
    totalPrice: {
      amount: number;
    };
    totalShipping: {
      amount: number;
    };
    totalTax: {
      amount: number;
    };
  };

  // **************************
  //TODO: the values are being printed properly on the server, but for some reason the client is not able to get the values
  const orderDetails = await getOrderDetails(orderId) as OrderDetailsType;
  //console.log(await getOrderDetails(orderId));
  const products = [
    {
      count: 2,
      product: {
        title: "Mosambi 100g",
        imageURL: "/fruits-vegetables/mosambi.jpeg",
        altText: "Mosambi",
        price: 2.3
      },
    },
    {
      count: 5,
      product: {
        title: "Apple Shimla 1pc",
        imageURL: "/fruits-vegetables/apple-shimla.jpeg",
        altText: "apples",
        price: 1.8
      },
    },
    {
      count: 1,
      product: {
        title: "Dragon Fruits 1pc",
        imageURL: "/fruits-vegetables/drangon-fruit.jpeg",
        altText: "Dragon Fruit",
        price: 4.12
      },
    },
    {
      count: 2,
      product: {
        title: "Garlic 100g",
        imageURL: "/fruits-vegetables/garlic.jpeg",
        altText: "Garlic",
        price: 2.3
      },
    }
  ];
  const order = {
    id: "23242",
    date: "Oct 28, 2024",
    cost: 232.32,
    subtotal: 220.23,
    tax: 10.09,
    delivery: 2.09,
    products: products
  }

  return (
    <div className="w-full flex justify-center">
      <main className="container flex flex-col justify-start items-start pt-8 px-2 lg:px-0">

        <Link className="flex flex-row" href="/order-history">
          <MoveLeft className="mr-2" size={24} />back
        </Link>
        <H2>Order Details</H2>
        
        <p>{orderDetails?.id}</p>
        {orderDetails?.lineItems?.toString()}
        {orderDetails?.totalPrice?.amount}

        <div className="w-full flex flex-col justify-start items-start mt-4">
          <p>Order id: {order.id}</p>
          <p>Order date: {order.date}</p>
          <p>Total cost: ${order.cost}</p>
        </div>

        {
          order.products.map((row) => (
            <span key={row.product.title}>{row.product.title}</span>
          ))
        }

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