import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Abhishek Gawande - Skills"
}

const index = () => {
  // Dynamic data for skills and experience based on our chats
  const skillsData = [
    {
      image: "/js.png", // Avatar image link
      alt: "JavaScript", // Alt text
      fallback: "JS", // Fallback initials
      skill: "JavaScript", // Skill title
    },
    {
      image: "/reactjs.png",
      alt: "React.js",
      fallback: "R",
      skill: "React.js",
    },
    {
      image: "/nextjs.png",
      alt: "Next.js",
      fallback: "N",
      skill: "Next.js",
    },
    {
      image: "/nodejs.png",
      alt: "Node.js",
      fallback: "ND",
      skill: "Node.js",
    },
    {
      image: "/tailwindcss.png",
      alt: "TailwindCSS",
      fallback: "T",
      skill: "TailwindCSS",
    },
    {
      image: "/java.png",
      alt: "Java",
      fallback: "J",
      skill: "Java",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="sm:text-5xl text-3xl font-bold mb-2 text-center sm:py-8 py-12">
        Skills
      </h3>
      <div className="flex flex-wrap justify-center gap-20 lg:w-[60rem]">
        {skillsData.map((item, index) => (
          <Card
            key={index}
            className="bg-transparent border-none flex items-center justify-center flex-col gap-4 shadow-none h-40"
          >
            <Avatar className="h-28 w-28">
              <AvatarImage src={item.image} alt={item.alt} className="object-cover h-28 w-28" />
              <AvatarFallback className="uppercase">{item.fallback}</AvatarFallback>
            </Avatar>
            <p className="text-lg font-bold dark:text-secondary/80 text-primary text-center">
              {item.skill}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default index;
