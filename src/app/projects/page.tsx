import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const projects = [
    {
      src: "/chordly.png", // Image for web development
      title: "Chordly",
      description:
        "Responsive music web project with API integration.",
      badge: [
        "React.js",
        "API",
        "TailwindCSS",
      ],
      timeline: "March 2024 - Working",
      href: "https://github.com/gawandeabhishek/chordly"
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="sm:text-5xl text-3xl font-bold mb-2 text-center sm:py-8 py-12">
        Projects
      </h3>
      <div className="flex flex-wrap items-center sm:justify-start justify-center gap-8 w-fit">
        {projects.map((item, index) => (
          <Link href={item.href}>
          <Card
            key={index}
            className="w-fit h-[34rem] py-4 bg-transparent flex flex-col items-start justify-start border-none"
          >
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
              <CardDescription className="w-64 font-semibold">{item.timeline}</CardDescription>
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
