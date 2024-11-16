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
import { getAccessTokenAndSetCookie, getLogoutUrl, getAuthorizationUrl } from "@/components/customer/actions";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const UserButton = () => {

  const [ loginUrl, setLoginUrl ] = useState<string | null>(null);
  const [ logoutUrl, setLogoutUrl ] = useState<string | null>(null);
  const loggedIn = false;

  const searchParams = useSearchParams();
  useEffect(() => {
    (async () => {
      if (searchParams.has('code')) {
        // TODO: check if a cookie is already set. If not, then set a new cookie
        // TODO: save idToken and expiresIn on the client
        /**
         * TODO:
         * 1. Get the code from the searchParams
         * 2. Check if an access token is already set in the user context
         * 3. If not, then set a new cookie - call getAccessTokenAndSetCookie with the code
         * 4. Save the idToken and expiresIn on the client
         */
        console.log(await getAccessTokenAndSetCookie(searchParams.get('code')?.toString() ?? ""))
      }
      setLoginUrl(await getAuthorizationUrl());
      setLogoutUrl(await getLogoutUrl());
    })();
  }, []);

  if (!loggedIn) {
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
          <Link href={logoutUrl ?? ""}><DropdownMenuItem>Log off</DropdownMenuItem></Link>                
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
      
}

export { UserButton };