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
import React from "react";

export const metadata: Metadata = {
   title: "About Abhishek Gawande"
}

const page = () => {
  const projects = [
    {
      src: "/web-development.jpg", // Image for web development
      title: "Web Development",
      description: "Building dynamic and responsive web applications using modern technologies.",
      badge: [
        "Next.js",
        "React.js",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "TailwindCSS",
      ],
    },
    {
      src: "/app-development.jpg", // Image for mobile development
      title: "Mobile Development",
      description: "Creating mobile applications using React Native for seamless user experiences.",
      badge: [
        "React Native",
        "JavaScript",
        "Redux",
        "Expo",
      ],
    },
    {
      src: "/ai-ml.jpg", // Image for AI/ML project
      title: "AI & ML Projects",
      description: "Exploring AI and ML applications to create innovative solutions.",
      badge: [
        "Python",
        "TensorFlow",
        "Machine Learning",
        "Data Analysis",
      ],
    },
  ];
  
  
  return (
    <div className="p-4 flex items-center flex-col justify-center">
      <h3 className="sm:text-5xl text-3xl font-bold mb-2 text-center sm:py-8 py-12">I Understand That High-Quality Apps Are Essential for Business Success.</h3>
      <div className="flex flex-wrap items-center sm:justify-start justify-center gap-8 w-fit">

      {projects.map((item, index) => (
        <Card key={index} className="w-fit h-[34rem] py-4 bg-transparent flex flex-col items-start justify-start border-none">
          <CardContent>
            <Image
              src={item.src}
              alt={item.title}
              width={300}
              height={300}
              className="rounded-2xl"
            />
          </CardContent>
          <CardHeader>
            <CardTitle className="text-secondary w-64">{item.title}</CardTitle>
            <CardDescription className="w-64">{item.description}</CardDescription>
          </CardHeader>
          <CardFooter className="flex flex-wrap justify-start items-center gap-1.5 w-[22rem]">
            {item.badge.map((badge, index) => (
              <Badge key={index} variant={"secondary"}>
                {badge}
              </Badge>
            ))}
          </CardFooter>
        </Card>
      ))}
      </div>
    </div>
  );
};

export default page;
