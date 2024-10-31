import React from 'react';
import { Card } from "@/components/ui/card";
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Card className="bg-transparent border-none flex flex-col items-center justify-center p-8 shadow-none">
        <h1 className="sm:text-6xl text-4xl font-bold mb-4 text-center text-secondary">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-center mb-4 text-primary-foreground">
          Looks like this page doesn’t exist.
        </p>
        <p className="text-md text-center text-primary-foreground">
          Please check the URL or go back to the <Link href={'/'} className='text-blue-400'>homepage</Link>.
        </p>
      </Card>
    </div>
  );
};

export default NotFound;
