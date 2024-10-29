"use client"; // Importing hooks for client-side usage

import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@clerk/nextjs"; // Importing useAuth for authentication state
import { onAuthenticateUser } from "@/action/user";

const AuthCallback = () => {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useAuth();

  useEffect(() => {
    const authenticateUser = async () => {
      // Wait until Clerk is fully loaded and the user is signed in
      if (!isLoaded || !isSignedIn) return;

      // Call your server-side authentication function
      const result = await onAuthenticateUser();

      if (result.status === 201 || result.status === 200) {

      } else {
        // Handle the error scenario (e.g., show an error message or redirect to an error page)
        console.error(result.message || "Failed to authenticate user");
      }
    };

    authenticateUser();
  }, [isLoaded, isSignedIn, router]);

  return <div>Loading...</div>;
};

export default AuthCallback;
