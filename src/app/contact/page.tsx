import React from "react";
import { onAuthenticateUser } from "@/action/user";
import { redirect } from "next/navigation";
import ChatComponent from "./_components/chat";
import { currentUser } from "@clerk/nextjs/server";

const ADMIN_CLERK_ID = "user_2o6q3lCuOgeS1e0laM97iOm6rnY"; 

const page = async () => {
  const auth = await onAuthenticateUser();
  const user = await currentUser();
   
  if(!(auth.status === 200 || auth.status === 201)) redirect('/auth/sign-in')

  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="sm:text-5xl text-3xl font-bold mb-2 text-center sm:py-8 py-12">
        Grab a coffee, let&apos;s talk!
      </h3>
      <ChatComponent isAdmin={user?.id === ADMIN_CLERK_ID} />

    </div>
  );
};

export default page;
