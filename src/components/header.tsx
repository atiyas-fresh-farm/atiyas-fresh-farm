import { ThemeToggleSubMenu } from "@/components/theme-toggle";
import { SearchBar } from "@/components/search/search-bar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";
import Image from "next/image";
import { ShoppingCartIcon, SearchIcon, TrashIcon } from "lucide-react";

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
            <Sheet>
              <SheetTrigger>
                <ShoppingCartIcon size={24} className="text-neutral-950" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>My Cart</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
                <div className="h-4/5 flex flex-col justify-start items-start overflow-y-scroll">

                  <div className="w-full flex flex-row justify-between items-center mt-8">
                    <div className="flex flex-row items-center">
                      <div className="w-16 aspect-square h-full bg-neutral-300 rounded"></div>
                      <p className="ml-4">Banana</p>
                    </div>
                    <div className="flex flex-row items-center">
                      <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      <p> x $2.00</p>
                      <TrashIcon className="ml-4" size={24} />
                    </div>
                  </div>

                  <div className="w-full flex flex-row justify-between items-center mt-8">
                    <div className="flex flex-row items-center">
                      <div className="w-16 aspect-square h-full bg-neutral-300 rounded"></div>
                      <p className="ml-4">Banana</p>
                    </div>
                    <div className="flex flex-row items-center">
                      <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      <p> x $2.00</p>
                      <TrashIcon className="ml-4" size={24} />
                    </div>
                  </div>

                  <div className="w-full flex flex-row justify-between items-center mt-8">
                    <div className="flex flex-row items-center">
                      <div className="w-16 aspect-square h-full bg-neutral-300 rounded"></div>
                      <p className="ml-4">Banana</p>
                    </div>
                    <div className="flex flex-row items-center">
                      <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      <p> x $2.00</p>
                      <TrashIcon className="ml-4" size={24} />
                    </div>
                  </div>

                  <div className="w-full flex flex-row justify-between items-center mt-8">
                    <div className="flex flex-row items-center">
                      <div className="w-16 aspect-square h-full bg-neutral-300 rounded"></div>
                      <p className="ml-4">Banana</p>
                    </div>
                    <div className="flex flex-row items-center">
                      <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      <p> x $2.00</p>
                      <TrashIcon className="ml-4" size={24} />
                    </div>
                  </div>

                  <div className="w-full flex flex-row justify-between items-center mt-8">
                    <div className="flex flex-row items-center">
                      <div className="w-16 aspect-square h-full bg-neutral-300 rounded"></div>
                      <p className="ml-4">Banana</p>
                    </div>
                    <div className="flex flex-row items-center">
                      <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      <p> x $2.00</p>
                      <TrashIcon className="ml-4" size={24} />
                    </div>
                  </div>

                  <div className="w-full flex flex-row justify-between items-center mt-8">
                    <div className="flex flex-row items-center">
                      <div className="w-16 aspect-square h-full bg-neutral-300 rounded"></div>
                      <p className="ml-4">Banana</p>
                    </div>
                    <div className="flex flex-row items-center">
                      <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      <p> x $2.00</p>
                      <TrashIcon className="ml-4" size={24} />
                    </div>
                  </div>

                  <div className="w-full flex flex-row justify-between items-center mt-8">
                    <div className="flex flex-row items-center">
                      <div className="w-16 aspect-square h-full bg-neutral-300 rounded"></div>
                      <p className="ml-4">Banana</p>
                    </div>
                    <div className="flex flex-row items-center">
                      <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      <p> x $2.00</p>
                      <TrashIcon className="ml-4" size={24} />
                    </div>
                  </div>

                  <div className="w-full flex flex-row justify-between items-center mt-8">
                    <div className="flex flex-row items-center">
                      <div className="w-16 aspect-square h-full bg-neutral-300 rounded"></div>
                      <p className="ml-4">Banana</p>
                    </div>
                    <div className="flex flex-row items-center">
                      <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      <p> x $2.00</p>
                      <TrashIcon className="ml-4" size={24} />
                    </div>
                  </div>

                  <div className="w-full flex flex-row justify-between items-center mt-8">
                    <div className="flex flex-row items-center">
                      <div className="w-16 aspect-square h-full bg-neutral-300 rounded"></div>
                      <p className="ml-4">Banana</p>
                    </div>
                    <div className="flex flex-row items-center">
                      <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      <p> x $2.00</p>
                      <TrashIcon className="ml-4" size={24} />
                    </div>
                  </div>

                  <div className="w-full flex flex-row justify-between items-center mt-8">
                    <div className="flex flex-row items-center">
                      <div className="w-16 aspect-square h-full bg-neutral-300 rounded"></div>
                      <p className="ml-4">Banana</p>
                    </div>
                    <div className="flex flex-row items-center">
                      <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      <p> x $2.00</p>
                      <TrashIcon className="ml-4" size={24} />
                    </div>
                  </div>

                  <div className="w-full flex flex-row justify-between items-center mt-8">
                    <div className="flex flex-row items-center">
                      <div className="w-16 aspect-square h-full bg-neutral-300 rounded"></div>
                      <p className="ml-4">Banana</p>
                    </div>
                    <div className="flex flex-row items-center">
                      <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      <p> x $2.00</p>
                      <TrashIcon className="ml-4" size={24} />
                    </div>
                  </div>

                  <div className="w-full flex flex-row justify-between items-center mt-8">
                    <div className="flex flex-row items-center">
                      <div className="w-16 aspect-square h-full bg-neutral-300 rounded"></div>
                      <p className="ml-4">Banana</p>
                    </div>
                    <div className="flex flex-row items-center">
                      <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      <p> x $2.00</p>
                      <TrashIcon className="ml-4" size={24} />
                    </div>
                  </div>

                </div>
                <SheetFooter>
                  checkout button
                </SheetFooter>
              </SheetContent>
            </Sheet>
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