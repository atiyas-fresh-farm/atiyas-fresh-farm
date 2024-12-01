import { SearchBar } from "@/components/search/search-bar";
import Link from "next/link";
import Image from "next/image";
import { SearchIcon, MenuIcon } from "lucide-react";
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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";



const Header = () => {

  const loggedin = true;

  return (
    <header className="w-full bg-background flex flex-col items-center fixed z-50">

      <div className="container h-20 grid grid-cols-6 items-center border-b z-10 px-4 xl:px-0">
        <span className="col-span-3 lg:col-span-1">
          <Link href="/">
            <Image src="/logo.png" width={140} height={60} alt="Atiyas Fresh Farm Logo" />
          </Link>
        </span>
        <span className="hidden lg:inline col-span-4">
          <SearchBar />
        </span>
        <span className="col-span-3 lg:col-span-1 flex flex-row justify-end items-center space-x-4">
          <span className="inline lg:hidden p-2">
          <Dialog>
            <DialogTrigger asChild>
              <SearchIcon size={36} className="text-neutral-950" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] top-0 translate-y-[0%]">
              <SearchBar />
            </DialogContent>
          </Dialog>
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
    <div className="w-full flex justify-center items-center min-h-12 bg-brand">
      <div className="container h-full flex flex-row justify-between items-center text-stone-50 px-4 lg:px-0">

        <Collapsible className="w-full p-2 sm:hidden">
          <CollapsibleTrigger>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <MenuIcon className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="w-full">
            <span className="flex flex-col">
              <Link href="/"><p className=" font-semibold hover:bg-lime-700 rounded py-2 px-3">Home</p></Link>
              <Link href="/flyer"><p className="font-semibold hover:bg-lime-700 rounded py-2 px-3">Flyer</p></Link>
              <Link href="/#contact"><p className="font-semibold hover:bg-lime-700 rounded py-2 px-3">Contact</p></Link>
              <Link href="/#footer"><p className="font-semibold hover:bg-lime-700 rounded py-2 px-3">About</p></Link>
            
              <Dialog>
                <DialogTrigger className="text-left"><p className="font-semibold hover:bg-lime-700 rounded py-2 px-3">Delivery coverage</p></DialogTrigger>
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
          </CollapsibleContent>
        </Collapsible>

        <div className="hidden sm:flex w-full flex-row justify-between items-center px-4 lg:px-0">
          <span className="flex flex-row space-x-4">
            <Link href="/"><p className="font-semibold hover:bg-lime-700 rounded py-2 px-3">Home</p></Link>
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
    </div>
  );
}

export { Header };