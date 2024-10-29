import { ThemeToggleSubMenu } from "@/components/theme-toggle";
import { SearchBar } from "@/components/search/search-bar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";
import Image from "next/image";
import { SearchIcon } from "lucide-react";
import { CartSheet } from "@/components/cart/cart-sheet";


const Header = () => {

  const loggedin = true;

  return (
    <header className="w-full bg-background flex flex-col">

      <div className="w-full h-20 px-6 grid grid-cols-6 items-center border-b z-10">
        <span className="col-span-3 md:col-span-1">
          <Link href="/">
            <Image src="/logo.png" width={150} height={60} alt="Atiyas Fresh Farm Logo" />
          </Link>
        </span>
        <span className="hidden md:inline col-span-4">
          <SearchBar />
        </span>
        <span className="col-span-3 md:col-span-1 flex flex-row justify-end items-center space-x-4">
          <span className="inline md:hidden p-2">
            <SearchIcon size={24} className="text-neutral-950" />
          </span>
          <span className="p-2">
            <CartSheet />
          </span>
          {
            loggedin ?
            <>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mt-1" align="end">
                  <ThemeToggleSubMenu />
                  <DropdownMenuSeparator />
                  <Link href="/profile"><DropdownMenuItem>Profile</DropdownMenuItem></Link>
                  <Link href="/settings"><DropdownMenuItem>Settings</DropdownMenuItem></Link>
                  <Link href="/logoff"><DropdownMenuItem>Log off</DropdownMenuItem></Link>                
                </DropdownMenuContent>
              </DropdownMenu>
            </> :
            <>
              <Link href="/login">Login</Link>
              <Link href="/signup">Sign Up</Link>
            </>
          }
        </span>
      </div>

      <div className="flex justify-center items-center h-12 bg-lime-700 px-2 xl:px-0">
        <div className="container h-full flex flex-row justify-start items-center text-stone-50 space-x-8">
          <Link href="#categories"><p>All Categories</p></Link>
          <Link href="/flyer"><p>Flyer</p></Link>
          <Link href="/contact"><p>Contact</p></Link>
          <Link href="/about"><p>About</p></Link>
        </div>
      </div>

    </header>
  );
}

export { Header };