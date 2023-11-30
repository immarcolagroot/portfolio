import type { Metadata } from "next";
import "./globals.css";

import { heebo } from "@/app/fonts";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={heebo.className}>{children}</body>
    </html>
  );
}
