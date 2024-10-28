import Link from "next/link";
import React from "react";
import DeveloperIcon from "../global/developer-icon";
import { Button } from "../ui/button";
import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

const PageNavbar = async () => {
  const user = await currentUser();
  const navIcons = ["home", "about", "work", "skills", "contact"];
  return (
    <nav className="flex items-center justify-between px-4 py-2">
      <DeveloperIcon
        fullname="abhishek gawande"
        email="abhishekgawande1667@gmail.com"
        image="https://avatars.githubusercontent.com/u/136836702?v=4"
        alt="@gawandeabhishek"
      />
      <div className="sm:flex hidden items-center justify-center gap-4">
        {navIcons.map((icon) => (
          <Button key={icon}>
            <Link href={icon === "home" ? "/" : `/${icon}`}>{icon}</Link>
          </Button>
        ))}
      </div>
      {!user ? (
        <Button variant={"outline"}>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </Button>
      ) : (
        <UserButton />
      )}
    </nav>
  );
};

export default PageNavbar;
