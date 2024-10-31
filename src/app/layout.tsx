import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PageNavbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import StarsCanvas from "@/components/global/stars";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// TODO: Edit description
export const metadata: Metadata = {
  title: {
    default: "Abhishek Gawande - Web and App Developer Portfolio",
    template: "%s | Abhishek Gawande's Portfolio",
  },
  description:
    "Abhishek Gawande - Web and App Developer specializing in React.js, Next.js, and AI-driven solutions. Passionate about dynamic programming, modern UI/UX with Tailwind CSS, and optimized algorithms. Blending creativity with problem-solving.",
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION, // Replace with your actual verification token
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased transition-all bg-transparent`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <PageNavbar />
            {children}
            <StarsCanvas />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
