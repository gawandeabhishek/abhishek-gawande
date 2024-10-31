"use client";

import React from "react";
import { useTheme } from "next-themes";
import StarsCanvas from "../global/stars";

const Background = () => {
  const { theme } = useTheme();
  return <>{theme === "dark" ? <StarsCanvas /> : <></>}</>;
};

export default Background;
