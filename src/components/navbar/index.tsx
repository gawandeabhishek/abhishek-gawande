import Link from "next/link";
import React from "react";
import DeveloperIcon from "../global/developer-icon";
import { Button } from "../ui/button";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Menu, MessagesSquare } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Theme from "./theme";

const PageNavbar = async () => {
  const user = await currentUser();
  const navIcons = ["home", "about", "projects", "skills", "contact", "chat"];

  const Navbar = (
    <nav className="flex sm:items-center justify-between px-4 py-2 bg-transparent sm:flex-row flex-col sm:gap-0 gap-10">
      <DeveloperIcon
        fullname="abhishek gawande"
        email="abhishekgawande1667@gmail.com"
        image="/abhishek-img.png"
        alt="@gawandeabhishek"
      />
      <div className="flex items-center justify-center gap-4 sm:flex-row flex-col">
        {navIcons.map((icon) => (
          <Button key={icon}>
            <Link
              href={icon === "home" ? "/" : `/${icon}`}
              className="flex gap-4 items-center justify-center"
            >
              {icon === "chat" ? (
                <>
                  <MessagesSquare />{" "}
                  <span className="lg:flex hidden">{icon}</span>
                </>
              ) : (
                <>{icon}</>
              )}
            </Link>
          </Button>
        ))}
      </div>
      <span className="md:flex hidden items-center justify-center gap-4">
        {!user ? (
          <Link href={"/auth/sign-in"}>
            <Button variant={"secondary"}>Sign In</Button>
          </Link>
        ) : (
          <UserButton />
        )}
        <Theme />
      </span>
    </nav>
  );

  return (
    <div className="full">
      <div className="md:hidden my-4 w-full flex items-center justify-between pr-6">
        <Sheet>
          <SheetTrigger asChild className="ml-2 ">
            <Button variant={"ghost"} className="mt-[2px]">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent
            side={"left"}
            className="p-10 w-full h-full bg-transparent border-none"
          >
            <nav className="flex sm:items-center justify-between px-4 py-2 bg-transparent sm:flex-row flex-col sm:gap-0 gap-10">
              <DeveloperIcon
                fullname="abhishek gawande"
                email="abhishekgawande1667@gmail.com"
                image="/abhishek-img.png"
                alt="@gawandeabhishek"
              />
              <div className="flex items-center justify-center gap-4 sm:flex-row flex-col">
                {navIcons.map((icon) => (
                  <Button key={icon}>
                    <SheetClose asChild>
                      <Link
                        href={icon === "home" ? "/" : `/${icon}`}
                        className="flex gap-4 items-center justify-center"
                      >
                        {icon === "chat" ? (
                          <>
                            <MessagesSquare />{" "}
                            <span className="lg:flex hidden">{icon}</span>
                          </>
                        ) : (
                          <>{icon}</>
                        )}
                      </Link>
                    </SheetClose>
                  </Button>
                ))}
              </div>
              <span className="md:flex hidden">
                {!user ? (
                  <Link href={"/auth/sign-in"}>
                    <Button variant={"secondary"}>Sign In</Button>
                  </Link>
                ) : (
                  <UserButton />
                )}
              </span>
            </nav>
          </SheetContent>
        </Sheet>
        <span className="flex items-center justify-center gap-4">
          {!user ? (
            <Link href={"/auth/sign-in"}>
              <Button variant={"secondary"}>Sign In</Button>
            </Link>
          ) : (
            <UserButton />
          )}
          <Theme />
        </span>
      </div>
      <div className="md:block hidden h-full">{Navbar}</div>
    </div>
  );
};

export default PageNavbar;
