import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "zoom zing",
  description: "video calling app",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <StreamVideoProvider>
      <main>{children}</main>
    </StreamVideoProvider>
  );
};
export default RootLayout;
