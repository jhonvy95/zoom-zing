import { SignUp } from "@clerk/nextjs";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZoomZing",
  description: "Video calling App",
  icons: {
    icon: "/icons/zoom-zing-logo.svg",
  },
};

const SignUpPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignUp />
    </main>
  );
};

export default SignUpPage;
