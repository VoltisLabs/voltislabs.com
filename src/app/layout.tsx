"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Aside from "../components/common/Aside";
import { useState } from "react";
import Nav from "../components/common/Nav";
import { motion } from "framer-motion";

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
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Voltis-Labs</title>
        <meta name="description" content="Software Development Company" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex items-start min-h-screen justify-center">
          {/* <div className="aside-container w-[16rem] h-screen overflow-y-scroll no-scrollbar fixed z-50 top-0 left-0 md:block hidden">
            <Aside />
          </div> */}

          {/* mobile-nav */}
          {/* {toggle && (
            <motion.div
              className="fixed inset-0 z-40 bg-black bg-opacity-10 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setToggle(false)}
            />
          )} */}
          {/* <motion.div
            className={`aside-container w-[16rem] h-screen overflow-y-scroll no-scrollbar fixed z-50 top-0 left-0 md:hidden ${
              toggle ? "block" : "hidden"
            }`}
            initial={{ x: "-100%" }}
            animate={{ x: toggle ? "0" : "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Aside />
          </motion.div> */}

          <main className="content bg-black w-full">
            <div className="nav-container">
              <Nav setToggle={setToggle} toggle={toggle} />
            </div>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
