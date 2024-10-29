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
import React from "react";

const page = () => {
  const projects = [
    {
      src: "https://avatars.githubusercontent.com/u/136836702?v=4", // Image for web development
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
      src: "https://avatars.githubusercontent.com/u/136836702?v=4", // Image for mobile development
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
      src: "https://avatars.githubusercontent.com/u/136836702?v=4", // Image for dynamic programming
      title: "Dynamic Programming Solutions",
      description: "Implementing efficient algorithms and dynamic programming techniques to solve complex problems.",
      badge: [
        "Java",
        "Algorithm Design",
        "Backtracking",
        "Problem Solving",
      ],
    },
    {
      src: "https://avatars.githubusercontent.com/u/136836702?v=4", // Image for your portfolio
      title: "Portfolio Website",
      description: "Showcasing my projects and skills as a web developer and coder.",
      badge: [
        "Next.js",
        "React.js",
        "TailwindCSS",
        "TypeScript",
      ],
    },
    {
      src: "https://avatars.githubusercontent.com/u/136836702?v=4", // Image for AI/ML project
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
