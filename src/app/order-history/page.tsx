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


const OrderHistory = () => {
  return (
    <div className="w-full flex justify-center">
      <main className="container flex flex-col justify-start items-start pt-10">
        <H2>Order History</H2>

        <Table>
          <TableCaption>A list of your recent orders.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Date</TableHead>
              <TableHead className="w-[700px]">Items</TableHead>
              <TableHead>Count</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead>Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Aashirvaad Atta, Bananas, </TableCell>
              <TableCell>33</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell>View Details</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </main>
    </div>
  );
}

export default OrderHistory;