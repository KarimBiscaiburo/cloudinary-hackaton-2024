import type { Metadata } from "next";
import "./globals.css";
import { creepster } from "./fonts";

export const metadata: Metadata = {
  title: "Cloudinary Hackathon 2024",
  description: "Cloudinary Hackathon 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${creepster.className} antialiased h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
