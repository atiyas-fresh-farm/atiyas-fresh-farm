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
import { Order } from '@/lib/shopify/types';


const OrderHistory = async () => {

  const orders = await getOrdersList() as Order[];

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