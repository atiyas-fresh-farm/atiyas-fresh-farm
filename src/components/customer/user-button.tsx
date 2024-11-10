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
import { useEffect } from "react";
import { getAccessTokenAndSetCookie } from "@/components/customer/actions";

const UserButton = ({ customerAccessCode }: { customerAccessCode: string|null }) => {

  useEffect(() => {
    (async () => {
      if (customerAccessCode) {
        console.log(await getAccessTokenAndSetCookie(customerAccessCode));
      }
    })();
  }, [customerAccessCode]);

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
          <Link href="/logoff"><DropdownMenuItem>Log off</DropdownMenuItem></Link>                
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export { UserButton };