import { SignIn } from "@clerk/nextjs";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "ZoomZing",
  description: "Video calling App",
  icons: {
    icon: "/icons/zoom-zing-logo.svg",
  },
};

const SignInPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignIn />
    </main>
  );
};

export default SignInPage;
