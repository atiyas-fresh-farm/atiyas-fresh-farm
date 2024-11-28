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

const UserButton = () => {

  const { isAuthenticated, loginUrl, logoutUrl } = useAuth();


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
          <Link href={logoutUrl ?? ""}><DropdownMenuItem>Log off</DropdownMenuItem></Link>                
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
      
}

export { UserButton };