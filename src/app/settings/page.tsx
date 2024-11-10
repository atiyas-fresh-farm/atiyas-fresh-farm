"use client";

import { Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { H2, Large, P } from '@/components/ui/typography';
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";
import { useState, useEffect } from "react";
import { getUserDetails } from "@/components/customer/actions";

const Settings = () => {

  useEffect(() => {
    (async () => {
      console.log(await getUserDetails());
    })();
  });

  const sections = [
    {
      title: "Personal Details",
      handle: "personal-details"
    },
    {
      title: "Contact Info",
      handle: "contact-info"
    },
    {
      title: "Address",
      handle: "address"
    },
    {
      title: "Security",
      handle: "security"
    }
  ];
  const addresses = [
    {
      name: "Home",
      address_1: "Unit 406, 55 Caroline Street North",
      address_2: "",
      city: "Waterloo",
      province: "Ontario",
      postal_code: "N2L 6B9"
    },
    {
      name: "Work",
      address_1: "200 University Avenue North",
      address_2: "",
      city: "Waterloo",
      province: "Ontario",
      postal_code: "N2J 3G1"
    },
  ];

  const [] = useState();

  return (
    <div className="w-full flex justify-center">
      <main className="container flex flex-row justify-start items-start">

        <div className="w-18 md:min-w-64 h-full border-r pt-6">
          {
            sections.map((section) => (
              <Link key={section.handle} href={`/settings#${section.handle}`}>
                <div className="
                  w-full h-14 flex flex-row justify-center md:justify-start items-center
                  p-1 md:p-8 bg-background hover:bg-lime-100
                  text-sm md:text-base
                ">
                  {section.title}
                </div>
              </Link>
            ))
          }
        </div>

        <div className="w-full flex flex-col justify-center items-center pl-14 pt-10">
          
          <section id="personal-details" className="w-full flex flex-col justify-start items-start space-y-4 mb-10">
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

          <section id="contact-info" className="w-full flex flex-col justify-start items-start space-y-4 mb-10">
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

          <section id="address" className="w-full flex flex-col justify-start items-start space-y-4 mb-10">
            <H2>Address</H2>
            <Button>Add new address</Button>
            <div className="w-2/3 flex flex-col justify-start items-start space-y-4">
              {
                addresses.map((address, index) => (
                  <Card key={index} className="w-full hover:border-neutral-800">
                    <CardContent className="p-6">
                      <div className="w-full flex flex-row justify-between items-center">
                        <Large>{address.name}</Large>
                        <span className="flex flex-row">
                          <Pencil size={24} />
                          <Trash className="ml-4" size={24} />
                        </span>
                      </div>
                      <P>{address.address_1}</P>
                      <P>{address.address_2}</P>
                      <P>{address.city}, {address.province}, {address.postal_code}</P>
                    </CardContent>
                  </Card>
                ))
              }

              <Card className="w-full hover:border-neutral-800">
                <CardContent className="p-6">
                  <div className="w-full flex flex-row justify-between items-center">
                    <Large>Family</Large>
                    <span className="flex flex-row">
                      <Pencil size={24} />
                      <Trash className="ml-4" size={24} />
                    </span>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="Address1">Address line 1</Label>
                      <Input type="text" id="Address1" placeholder="Address Line 1" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="Address2">Address line 2</Label>
                      <Input type="text" id="Address2" placeholder="Address Line 2" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="City">City</Label>
                      <Input type="text" id="City" placeholder="City" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="Province">Province</Label>
                      <Input type="text" id="Province" placeholder="Province" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="PostalCode">Postal Code</Label>
                      <Input type="text" id="PostalCode" placeholder="Postal Code" />
                    </div>
                  </div>

                </CardContent>
              </Card>
            </div>
          </section>

          <section id="security" className="w-full flex flex-col justify-start items-start space-y-4 mb-10">
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