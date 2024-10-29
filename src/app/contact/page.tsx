import React from "react";
import { onAuthenticateUser } from "@/action/user";
import { redirect } from "next/navigation";
import ChatComponent from "./_components/chat";

const page = async () => {
  const auth = await onAuthenticateUser();
   
  if(!(auth.status === 200 || auth.status === 201)) redirect('/auth/sign-in')

  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="sm:text-5xl text-3xl font-bold mb-2 text-center sm:py-8 py-12">
        Grab a coffee, let&apos;s talk!
      </h3>
      <ChatComponent />

    </div>
  );
};

export default page;
