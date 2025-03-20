import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="md:px-[2rem] px-[1rem]">
      <section className="mb-40">
        <div className="container mx-auto">
          <p className="text-white text-3xl md:text-4xl text-center md:text-left">
            Join us in shaping the future of technology.
          </p>
        </div>

        <div className="border-[#FFFFFF] border-[1px] w-full text-center py-4 px-1 h-16 rounded mt-10 mb-28">
          <Link href="/careers">
            <p className="font-normal text-white sm:mt-0 text-sm mt-2 cursor-pointer hover:text-blue-500 visited:text-red-500">
              View careers
            </p>
          </Link>
        </div>

        <div className="flex flex-wrap justify-between items-start gap-6">
          <Image
            src={"/image/logo3.png"}
            alt="Icon"
            width={100}
            height={100}
            className="mb-6 md:mb-24"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
            <div className="flex flex-col">
              <Link href="/research"><p>Research</p></Link>
              <Link href="/overview"><p>Overview</p></Link>
              <Link href="/index"><p>Index</p></Link>
              <Link href="/gpt-4"><p>GPT-4</p></Link>
              <Link href="/dalle-3"><p>DALL.E 3</p></Link>
            </div>

            <div className="flex flex-col">
              <Link href="/api"><p>API</p></Link>
              <Link href="/api-overview"><p>Overview</p></Link>
              <Link href="/data-privacy"><p>Data privacy</p></Link>
              <Link href="/pricing"><p>Pricing</p></Link>
              <div className="flex items-center gap-2">
                <Link href="/docs">
                  <p>Docs</p>
                </Link>
                <Image
                  src={"../image/ArrowUpRight.svg"}
                  alt="GFY"
                  width={10}
                  height={10}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <Link href="/chatgpt"><p>ChatGPT</p></Link>
              <Link href="/chatgpt-overview"><p>Overview</p></Link>
              <Link href="/enterprise"><p>Enterprise</p></Link>
              <Link href="/try-chatgpt"><p>Try ChatGPT</p></Link>
            </div>

            <div className="flex flex-col">
              <Link href="/about"><p>Company</p></Link>
              <Link href="/about"><p>About</p></Link>
              <Link href="/blog"><p>Blog</p></Link>
              <Link href="/careers"><p>Careers</p></Link>
              <Link href="/charter"><p>Charter</p></Link>
              <Link href="/security"><p>Security</p></Link>
              <Link href="/customer-stories"><p>Customer stories</p></Link>
              <Link href="/safety"><p>Safety</p></Link>
            </div>
          </div>
        </div>
      </section>
      <div className="border-[#ffffff] border-[1px] w-full mb-3"></div>

      <footer className="flex flex-col md:flex-row justify-between text-white mb-20">
        <div className="flex flex-col space-y-2">
          <Link href="/terms"><p>Terms & policies</p></Link>
          <Link href="/privacy"><p>Privacy policy</p></Link>
          <Link href="/brand-guidelines"><p>Brand guidelines</p></Link>
        </div>
        <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
          <Link target="_blank" rel="noopener noreferrer" href="https://x.com"><p>X</p></Link>
          <Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/voltis-labs"><p>LinkedIn</p></Link>
        </div>
      </footer>
      <p className="text-center pb-10 text-white mt-10">© 2025 Voltis Labs. All rights reserved.</p>
    </div>
  );
}