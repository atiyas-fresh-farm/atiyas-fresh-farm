import { Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { H2, Large, P } from '@/components/ui/typography';
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Settings = () => {
  return (
    <div className="w-full flex justify-center">
      <main className="container flex flex-row justify-start items-start pt-10">
        <div className="min-w-96 ">
          <div className="w-64 h-14 flex flex-row justify-start items-center p-8 bg-white">
            Personal Details
          </div>
          <div className="w-64 h-14 flex flex-row justify-start items-center p-8 bg-white">
            Contact Info
          </div>
          <div className="w-64 h-14 flex flex-row justify-start items-center p-8 bg-white">
            Address
          </div>
          <div className="w-64 h-14 flex flex-row justify-start items-center p-8 bg-white">
            Security
          </div>
        </div>

        <div className="w-full flex flex-row flex-wrap justify-center items-start">
          
          <section className="w-full flex flex-col justify-start items-start space-y-4 mb-10">
            <H2>Personal Details</H2>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="FirstName">First Name</Label>
              <Input type="text" id="FirstName" placeholder="First Name" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="LastName">Last Name</Label>
              <Input type="text" id="LastName" placeholder="Last Name" />
            </div>
          </section>

          <section className="w-full flex flex-col justify-start items-start space-y-4 mb-10">
            <H2>Contact Info</H2>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="PhoneNumber">Phone Number</Label>
              <Input type="text" id="PhoneNumber" placeholder="Phone Number" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="EmailAddress">Email Address</Label>
              <Input type="text" id="EmailAddress" placeholder="Email Address" />
            </div>
          </section>

          <section className="w-full flex flex-col justify-start items-start space-y-4 mb-10">
            <H2>Address</H2>
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
            <H2>Security</H2>
            <Button>Update Password</Button>
            <Button>Delete Account</Button>
          </section>

        </div>
      </main>
    </div>
  );
}

export default Settings;