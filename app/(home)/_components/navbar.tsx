import Link from "next/link";

import { logOut } from "@/action/auth/authAction";
import { auth } from "@/auth";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { UserNav } from "./user-nav";

export const Navbar = async () => {
  const user = await auth();

  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <form action={logOut}>
            {user ?
              <UserNav username={user!.user?.name!} email={user!.user?.email!} />
              :
              <Button size="sm" variant="outline" asChild>
                <Link href="/login">
                  <LogIn className="mr-2 h-4 w-4" /> Sign In
                </Link>
              </Button>
            }
          </form>
        </div>
      </div>
    </div>
  );
};
