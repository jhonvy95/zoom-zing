import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "ZoomZing",
  description: "Video calling App",
  icons: {
    icon: "/icons/zoom-zing-logo.svg",
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
