import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
// import { Children } from "react";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Rethink_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "StockTechDev - Startup Landing Page",
  description: "Startup landing Page using nextjs 15",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
