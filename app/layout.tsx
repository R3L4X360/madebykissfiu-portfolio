import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/header/header";

export const metadata: Metadata = {
  title: "MADEBYKISSFIU",
  description: "Protfolio site of MADEBYKISSFIU",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-text">
        <Header />
        {children}
      </body>
    </html>
  );
}
