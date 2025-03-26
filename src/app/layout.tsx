"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Aside from "../components/common/Aside";
import { useState } from "react";
import Nav from "../components/common/Nav";
import { motion } from "framer-motion";
import Footer from "../components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <html lang="en">
      <head>
        <title>Voltis-Labs</title>
        <meta name="description" content="Software Development Company" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>

      <body className="bg-black text-white w-full min-h-screen">
        <div className="flex flex-col mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Navigation Bar */}
          <div className="fixed top-0 left-0 w-full z-50 bg-black">
            <Nav setToggle={setToggle} toggle={toggle} />
          </div>

          {/* Main Content Area */}
          <main className="flex flex-col items-center justify-center flex-1 mt-[5rem] w-full">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
