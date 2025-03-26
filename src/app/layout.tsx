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
  console.log("RootLayout rendered");

  return (
    <html lang="en">
      <head>
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        /> */}
        <title>Voltis Labs</title>
        <meta name="description" content="Software Development Company" />
      </head>

      <body className={`bg-black`}>
        <div className="mx-auto max-w-[85rem] w-full">
          <main className="content bg-black w-full">
            <div className="nav-container">
              <Nav setToggle={setToggle} toggle={toggle} />
            </div>

            <div className="item-container mt-0">{children}</div>
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
