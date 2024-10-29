import Link from "next/link";
import React from "react";
import DeveloperIcon from "../global/developer-icon";
import { Button } from "../ui/button";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const PageNavbar = async () => {
  const user = await currentUser();
  const navIcons = ["home", "about", "work", "skills", "contact"];
  const Navbar = (
    <nav className="flex sm:items-center justify-between px-4 py-2 bg-transparent sm:flex-row flex-col sm:gap-0 gap-10">
      <DeveloperIcon
        fullname="abhishek gawande"
        email="abhishekgawande1667@gmail.com"
        image="https://avatars.githubusercontent.com/u/136836702?v=4"
        alt="@gawandeabhishek"
      />
      <div className="flex items-center justify-center gap-4 sm:flex-row flex-col">
        {navIcons.map((icon) => (
          <Button key={icon}>
            <Link href={icon === "home" ? "/" : `/${icon}`}>{icon}</Link>
          </Button>
        ))}
      </div>
      {!user ? (
        <Link href={'/auth/sign-in'}><Button variant={'secondary'}>
        Sign In
      </Button></Link>
      ) : (
        <UserButton />
      )}
    </nav>
  );

  return <div className="full">
    <div className="md:hidden fixed my-4">
      <Sheet>
        <SheetTrigger asChild className="ml-2 ">
          <Button variant={"ghost"} className="mt-[2px]"><Menu /></Button>
        </SheetTrigger>
        <SheetContent side={'left'} className="p-10 w-full h-full bg-transparent border-none">{Navbar}</SheetContent>
      </Sheet>
    </div>
    <div className="md:block hidden h-full">{Navbar}</div>
  </div>
};

export default PageNavbar;
