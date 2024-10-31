"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import Theme from "..";
import { useTheme } from "next-themes";

const ToggleButton = () => {
  const { theme } = useTheme();
  return (
    <Button
      variant={theme === "dark" ? "secondary" : "outline"}
      className="sm:!px-2 sm:!py-6 !px-0.5 !py-5 w-fit"
    >
      <Theme />
    </Button>
  );
};

export default ToggleButton;
