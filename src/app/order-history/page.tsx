"use client";

import { H2 } from '@/components/ui/typography';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from 'next/link';
import { getOrdersList } from '@/components/customer/actions';
import { useEffect, useState } from 'react';
import { Order } from '@/lib/shopify/types';

/*
interface OrderType {
  id: string,
  date: string,
  items: string,
  count: number,
  price: number,
}*/

const OrderHistory = () => {

  const [orders, setOrders] = useState<Array<Order> | null>(null);
  useEffect(() => {
    const fetchOrders = async () => {
      const orderList = await getOrdersList() as Order[];
      setOrders(orderList);
    }
    fetchOrders();
  }, []);

  /*
  const orders: Array<OrderType> = [
    {
      id: "981357",
      date: "Oct 28, 2024",
      items: "Aashirvaad Atta, Bananas, ...",
      count: 12,
      price: 351.02,
    },
    {
      id: "648463",
      date: "Sep 05, 2024",
      items: "Aashirvaad Atta, Bananas, ...",
      count: 8,
      price: 301.02,
    },
    {
      id: "648463",
      date: "Sep 05, 2024",
      items: "Aashirvaad Atta, Bananas, ...",
      count: 8,
      price: 301.02,
    },
    {
      id: "648463",
      date: "Sep 05, 2024",
      items: "Aashirvaad Atta, Bananas, ...",
      count: 8,
      price: 301.02,
    },
    {
      id: "648463",
      date: "Sep 05, 2024",
      items: "Aashirvaad Atta, Bananas, ...",
      count: 8,
      price: 301.02,
    },
    {
      id: "648463",
      date: "Sep 05, 2024",
      items: "Aashirvaad Atta, Bananas, ...",
      count: 8,
      price: 301.02,
    },
    {
      id: "648463",
      date: "Sep 05, 2024",
      items: "Aashirvaad Atta, Bananas, ...",
      count: 8,
      price: 301.02,
    },
    {
      id: "648463",
      date: "Sep 05, 2024",
      items: "Aashirvaad Atta, Bananas, ...",
      count: 8,
      price: 301.02,
    },
    {
      id: "648463",
      date: "Sep 05, 2024",
      items: "Aashirvaad Atta, Bananas, ...",
      count: 8,
      price: 301.02,
    },
    {
      id: "648463",
      date: "Sep 05, 2024",
      items: "Aashirvaad Atta, Bananas, ...",
      count: 8,
      price: 301.02,
    },
    {
      id: "648463",
      date: "Sep 05, 2024",
      items: "Aashirvaad Atta, Bananas, ...",
      count: 8,
      price: 301.02,
    },
    {
      id: "648463",
      date: "Sep 05, 2024",
      items: "Aashirvaad Atta, Bananas, ...",
      count: 8,
      price: 301.02,
    }
  ];*/

  return (
    <div className="w-full flex justify-center">
      <main className="container flex flex-col justify-start items-start pt-10 px-2 lg:px-0">
        <H2>Order History</H2>

        <Table className="mb-16">
          <TableCaption>A list of your recent orders.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-24">ID</TableHead>
              <TableHead className="w-32">Date</TableHead>
              <TableHead>Items</TableHead>
              <TableHead className="w-24">Count</TableHead>
              <TableHead className="w-32">Price</TableHead>
              <TableHead className="text-right">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            
            {
              orders?.map((order) => {
                const itemList = order.lineItems.map(lineItem => lineItem.name).toString();
                return (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell className="font-medium">{order.createdAt.toISOString()}</TableCell>
                    <TableCell>{itemList}</TableCell>
                    <TableCell>{order.lineItems.length}</TableCell>
                    <TableCell>${order.totalPrice.amount}</TableCell>
                    <TableCell className="text-right underline">
                      <Link href={`/order/${order.id}`}>View Details</Link>
                    </TableCell>
                  </TableRow>
                )
              })
            }

          </TableBody>
        </Table>

      </main>
    </div>
  );
}

export default OrderHistory;