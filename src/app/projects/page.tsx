import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Abhishek Gawande's Projects"
}

const page = () => {
  const projects = [
    {
      src: "/chordly.png", // Image for web development
      title: "Chordly",
      description: "Responsive music web project with API integration.",
      badge: ["React.js", "API", "TailwindCSS"],
      timeline: "March 2024 - October 2024",
      href: "https://github.com/gawandeabhishek/chordly",
    },
    {
      src: "/vibewave.png", // Image for web development
      title: "VibeWave",
      description: "New version of Chordly with backend",
      badge: ["Next.js", "API", "TailwindCSS", "Shadcn/UI", "Prisma"],
      timeline: "Nov 2024 - Nov 2024",
      href: "https://github.com/gawandeabhishek/vibewave/",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="sm:text-5xl text-3xl font-bold mb-2 text-center sm:py-8 py-12">
        Projects
      </h3>
      <div className="flex flex-wrap items-center sm:justify-start justify-center gap-8 w-fit">
        {projects.map((item, index) => (
          <Link href={item.href} key={index}>
            <Card className="w-fit h-[34rem] py-4 bg-transparent flex flex-col items-start justify-start border-none">
              <CardContent>
                <Image
                  src={item.src}
                  alt={item.title}
                  width={300}
                  height={300}
                  className="rounded-2xl object-cover"
                />
              </CardContent>
              <CardHeader>
                <CardTitle className="text-secondary w-64">
                  {item.title}
                </CardTitle>
                <CardDescription className="w-64">
                  {item.description}
                </CardDescription>
                <CardDescription className="w-64 font-semibold">
                  {item.timeline}
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-wrap justify-start items-center gap-1.5 w-[22rem]">
                {item.badge.map((badge, index) => (
                  <Badge key={index} variant={"secondary"}>
                    {badge}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
