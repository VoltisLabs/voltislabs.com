import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Aside from "../components/common/Aside";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voltis-Labs",
  description: "Software Development Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex items-start min-h-screen justify-center">
          <div className="aside-container w-[16rem] h-screen overflow-y-scroll no-scrollbar fixed z-50 top-0 left-0 md:block hidden">
            <Aside />
          </div>
          <main className="content bg-green-300 w-full md:ml-[16rem]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
