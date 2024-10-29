import React from "react";
import { EmailForm } from "./_components/contact-form";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="sm:text-5xl text-3xl font-bold mb-2 text-center sm:py-8 py-12">
        Grab a coffee, let&apos;s talk!
      </h3>
      <EmailForm />

    </div>
  );
};

export default page;
