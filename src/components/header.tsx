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

const Header = () => {

  const loggedin = true;

  return (
    <header className="w-full h-16 px-4 bg-background grid grid-cols-4 items-center fixed">
      <span className="col-span-1">
        <Link href="/">
          <h1>Atiyas Fresh Farm</h1>
        </Link>
      </span>
      <span className="col-span-2">
        <SearchBar />
      </span>
      <span className="col-span-1 flex flex-row justify-end items-center">
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
    </header>
  );
}

export { Header };