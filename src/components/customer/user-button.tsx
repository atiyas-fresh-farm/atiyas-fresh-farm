"use client";

import { ThemeToggleSubMenu } from "@/components/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CircleUserRoundIcon } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/components/customer/auth-context";
import { useSearchParams } from 'next/navigation';
import { getAccessTokenAndSetCookie } from "@/components/customer/actions";
import { useEffect } from "react";

const UserButton = () => {

  const { isAuthenticated, loginUrl, logoutCallback, setCustomerToken } = useAuth();
  const searchParams = useSearchParams();
  useEffect(() => {
    (async () => {
      //only set cookie if on home page??
      if (searchParams.has('code')) {
        const customerToken = await getAccessTokenAndSetCookie(searchParams.get('code')?.toString() ?? "");
        if (typeof customerToken != "string") setCustomerToken(customerToken);
        console.log(customerToken);
      }
    })();
  }, []);

  if (!isAuthenticated) {
    return (
      <Link href={loginUrl ?? ""}>
        <p>Log in</p>
      </Link>
    );
  }
  
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage />
            <AvatarFallback>
              <CircleUserRoundIcon size={36}  />
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-1" align="end">
          <ThemeToggleSubMenu />
          <DropdownMenuSeparator />
          <Link href="/order-history"><DropdownMenuItem>Order History</DropdownMenuItem></Link>
          <Link href="/settings"><DropdownMenuItem>Settings</DropdownMenuItem></Link>
          <DropdownMenuItem onClick={logoutCallback}>Log off</DropdownMenuItem>                
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
      
}

export { UserButton };