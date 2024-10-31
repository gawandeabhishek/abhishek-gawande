"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

const Theme = () => {
  const { setTheme, theme } = useTheme();
  return (
    <span
      className={cn(
        "rounded-full !px-2.5 !py-2",
        buttonVariants({ variant: "default" })
      )}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Moon /> : <Sun />}
    </span>
  );
};

export default Theme;
