"use client";

import { Comfortaa, Geist, Geist_Mono, Hammersmith_One, Sometype_Mono, Titan_One, Lato } from "next/font/google";
import "./globals.css";
import Aside from "../components/common/Aside";
import { useState } from "react";
import Nav from "../components/common/Nav";
import { motion } from "framer-motion";
import Footer from "../components/footer";
import { usePathname } from "next/navigation";
import { comixLoud } from "./spinner/utils/font";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato", // Define a variable for Lato
  subsets: ["latin"],
  weight: "300"
});

const someType = Sometype_Mono({
  variable: "--font-sometype-mono", // Define a variable for Lato
  subsets: ["latin"],
  weight: "400"
});
const titan = Titan_One({
  variable: "--font-titan-one", // Define a variable for Lato
  subsets: ["latin"],
  weight: "400"
})

const hammer = Hammersmith_One({
  variable: "--font-hammersmith-one", // Define a variable for Lato
  subsets: ["latin"],
  weight: "400"
})

const comfortaa = Comfortaa({
  variable: "--font-comfortaa", // Define a variable for Lato
  subsets: ["latin"],
  weight: "400"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [toggle, setToggle] = useState<boolean>(false);
  const pathname = usePathname();
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

      <body className={`${lato.variable} ${comixLoud.variable} ${someType.variable} ${titan.variable} ${hammer.variable} ${comfortaa.variable} ${pathname == "/loyalty_bot" ? "bg-[#1a2081]" : "bg-black"}`}>
        <div className="mx-auto max-w-screen-2xl w-full">
          <main className={`content ${pathname == "/loyalty_bot" ? "bg-[#1a2081]" : "bg-transparent"} w-full`}>
            <div className="nav-container bg-black">
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
