import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import React from "react";

type Props = {
  fullname: string;
  email: string;
  image: string;
  alt: string;
};

const DeveloperIcon = ({ fullname, email, image, alt }: Props) => {
  return (
    <Button variant={'ghost'} className="flex items-center justify-center gap-2 pl-1 pr-4 py-6">
      <Avatar>
        <AvatarImage
          src={image}
          alt={alt}
        />
        <AvatarFallback className="uppercase">
          {fullname?.charAt(0)}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-start justify-center">
        <h3 className="text-sm capitalize">{fullname}</h3>
        <p className="text-xs truncate sm:w-auto w-40">{email}</p>
      </div>
    </Button>
  );
};

export default DeveloperIcon;
