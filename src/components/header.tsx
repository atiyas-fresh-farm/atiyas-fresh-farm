import { SearchBar } from "@/components/search/search-bar";
import Link from "next/link";
import Image from "next/image";
import { SearchIcon } from "lucide-react";
import { CartSheet } from "@/components/cart/cart-sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserButton } from "@/components/customer/user-button";



const Header = () => {

  const loggedin = true;

  return (
    <header className="w-full bg-background flex flex-col items-center fixed z-50">

      <div className="container h-24 grid grid-cols-6 items-center border-b z-10">
        <span className="col-span-3 md:col-span-1">
          <Link href="/">
            <Image src="/logo.png" width={160} height={70} alt="Atiyas Fresh Farm Logo" />
          </Link>
        </span>
        <span className="hidden md:inline col-span-4">
          <SearchBar />
        </span>
        <span className="col-span-3 md:col-span-1 flex flex-row justify-end items-center space-x-4">
          <span className="inline md:hidden p-2">
            <SearchIcon size={36} className="text-neutral-950" />
          </span>
          <span className="px-2">
            <CartSheet />
          </span>
          {
            loggedin ?
              <UserButton />
             :
            <div>
              <Link href="/login">Login</Link>
              <Link href="/signup">Sign Up</Link>
            </div>
          }
        </span>
      </div>
      <SubHeader />

    </header>
  );
}

const SubHeader = () => {
  return (
    <div className="w-full flex justify-center items-center h-12 bg-brand">
      <div className="container h-full flex flex-row justify-between items-center text-stone-50 px-4 lg:px-0">
        <span className="flex flex-row space-x-4">
          <Link href="/#explore-categories"><p className="font-semibold hover:bg-lime-700 rounded py-2 px-3">All Categories</p></Link>
          <Link href="/flyer"><p className="font-semibold hover:bg-lime-700 rounded py-2 px-3">Flyer</p></Link>
          <Link href="/#contact"><p className="font-semibold hover:bg-lime-700 rounded py-2 px-3">Contact</p></Link>
          <Link href="/#footer"><p className="font-semibold hover:bg-lime-700 rounded py-2 px-3">About</p></Link>
        </span>
        <span>
          <Dialog>
            <DialogTrigger><p className="font-semibold hover:bg-lime-700 rounded py-2 px-3">Delivery coverage</p></DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Check Delivery Coverage</DialogTitle>
                <DialogDescription>
                  Enter your postal code to check if we delivery to your address.
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-4 py-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="PostalCode">Postal Code</Label>
                  <Input type="text" id="PostalCode" placeholder="Postal Code" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Submit</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </span>
      </div>
    </div>
  );
}

export { Header };