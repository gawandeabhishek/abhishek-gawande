"use client"

import { Badge } from "@/components/ui/badge";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { CIcon } from '@coreui/icons-react'
import { cibLeetcode } from '@coreui/icons'

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="sm:text-5xl text-3xl font-bold mb-2 text-center sm:py-8 py-12">
        Contact
      </h3>
      <p className="my-10 sm:text-2xl text-lg text-center">
        <strong>mail: </strong>abhishekgawande1667@gmail.com
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 sm:w-[30rem]">
        <Badge variant={"secondary"} className="text-3xl">
          <Link
            href="https://github.com/gawandeabhishek"
            className="flex gap-2 items-center justify-center"
          >
            <Github /> Github
          </Link>
        </Badge>
        <Badge variant={"secondary"} className="text-3xl">
          <Link
            href="https://www.linkedin.com/in/abhishek-gawande-a944a2277/"
            className="flex gap-2 items-center justify-center"
          >
            <Linkedin /> LinkedIn
          </Link>
        </Badge>
        <Badge variant={"secondary"} className="text-3xl">
          <Link
            href="https://leetcode.com/u/programmerboyabhi/"
            className="flex gap-2 items-center justify-center"
          >
            <CIcon icon={cibLeetcode} className="h-6 w-6"/> LeetCode
          </Link>
        </Badge>
      </div>
    </div>
  );
};

export default page;
