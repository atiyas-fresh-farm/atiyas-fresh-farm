"use client"

import { H2, Large } from '@/components/ui/typography';
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
import { Order } from '@/lib/shopify/types';
import { useEffect, useState } from "react";


const OrderHistory = () => {

  const [orders, setOrders] = useState<Order[]|null>(null);
  useEffect(() => {
    const fetchOrders = async () => {
      setOrders(await getOrdersList() as Order[]);
      console.log(orders);
    }

    fetchOrders();
  }, []);

  return (
    <div className="w-full flex justify-center">
      <main className="container flex flex-col justify-start items-start pt-10 px-2 lg:px-0">
        <H2>Order History</H2>

        {
          (!orders || orders?.length === 0) &&
          <Large className="w-full text-center my-10">You have not placed any orders.</Large>
        }

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
              orders?.map((order, i) => {
                const itemList = order.lineItems.map(lineItem => lineItem.name).toString();
                const orderIdArray = order.id.match(/[^/]+$/);
                const orderId = orderIdArray ? orderIdArray[0] : i;
                return (
                  <TableRow key={orderId}>
                    <TableCell className="font-medium">{orderId}</TableCell>
                    <TableCell className="font-medium">{order.createdAt.toString().slice(0, 10)}</TableCell>
                    <TableCell>{itemList}</TableCell>
                    <TableCell>{order.lineItems.length}</TableCell>
                    <TableCell>${order.totalPrice.amount}</TableCell>
                    <TableCell className="text-right underline">
                      <Link href={`/order/${orderId}`}>View Details</Link>
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