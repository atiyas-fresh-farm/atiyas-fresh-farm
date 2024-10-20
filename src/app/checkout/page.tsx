import { Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { H2, Large, Small, P } from '@/components/ui/typography';
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



const Checkout = () => {
  return (
    <div className="w-full flex justify-center">
      <main className="container flex flex-col justify-start items-start pt-10">

        <section className="w-full flex flex-col justify-start items-start mb-10">
          <H2>Checkout</H2>
          <Small>3 items</Small>
          <P>Total cost: $156.25</P>
          <P><u>View your cart</u></P>
        </section>

        <section className="w-full flex flex-col justify-start items-start space-y-4 mb-10">
          <H2>Order Details</H2>
          <Tabs defaultValue="delivery" className="w-full">
            <TabsList className="grid w-2/3 grid-cols-2">
              <TabsTrigger value="delivery">Delivery</TabsTrigger>
              <TabsTrigger value="pickup">Pickup</TabsTrigger>
            </TabsList>
            <TabsContent value="delivery" className="w-full flex flex-col justify-start items-start space-y-4 mb-10">
              <Large>Shipping Address</Large>
              <Button>Add new address</Button>
              <div className="w-2/3 flex flex-col justify-start items-start space-y-4">
                <Card className="w-full">
                  <CardContent className="p-6">
                    <div className="w-full flex flex-row justify-between items-center">
                      <Large>Home</Large>
                      <span className="flex flex-row">
                        <Pencil size={24} />
                        <Trash className="ml-4" size={24} />
                      </span>
                    </div>
                    <P>Unit 406, 55 Caroline Street North, Waterloo, Ontario, Canada - N2L 6B9</P>
                  </CardContent>
                </Card>
                <Card className="w-full border-black dark:border-white">
                  <CardContent className="p-6">
                    <div className="w-full flex flex-row justify-between items-center">
                      <Large>Home</Large>
                      <span className="flex flex-row">
                        <Pencil size={24} />
                        <Trash className="ml-4" size={24} />
                      </span>
                    </div>
                    <P>Unit 406, 55 Caroline Street North, Waterloo, Ontario, Canada - N2L 6B9</P>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="pickup">
              PICKUP
            </TabsContent>
          </Tabs>
        </section>

        <section className="w-full flex flex-col justify-start items-start space-y-4 mb-10">
          <H2>Payment</H2>
          <Button>Add new payment method</Button>
          <div className="w-2/3 flex flex-col justify-start items-start space-y-4">
            <Card className="w-full">
              <CardContent className="p-6">
                <div className="w-full flex flex-row justify-between items-center">
                  <Large>Home</Large>
                  <span className="flex flex-row">
                    <Pencil size={24} />
                    <Trash className="ml-4" size={24} />
                  </span>
                </div>
                <P>Unit 406, 55 Caroline Street North, Waterloo, Ontario, Canada - N2L 6B9</P>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardContent className="p-6">
                <div className="w-full flex flex-row justify-between items-center">
                  <Large>Home</Large>
                  <span className="flex flex-row">
                    <Pencil size={24} />
                    <Trash className="ml-4" size={24} />
                  </span>
                </div>
                <P>Unit 406, 55 Caroline Street North, Waterloo, Ontario, Canada - N2L 6B9</P>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="w-full flex flex-col justify-start items-start space-y-4 mb-10">
          <Button>Place Order</Button>
        </section>

      </main>
    </div>
  );
}

export default Checkout;