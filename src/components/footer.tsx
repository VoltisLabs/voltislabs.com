import Image from "next/image";
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
          <p className="font-normal text-white sm:mt-0 text-sm  mt-2 cursor-pointer hover:text-blue-500 visited:text-red-500">
            View careers
          </p>
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
              <p>Research</p>
              <p>Overview</p>
              <p>Index</p>
              <p>GPT-4</p>
              <p>DALL.E 3</p>
            </div>

            <div className="flex flex-col">
              <p>API</p>
              <p>Overview</p>
              <p>Data privacy</p>
              <p>Pricing</p>
              <div className="flex items-center gap-2">
                <p>Docs</p>
                <Image
                  src={"../image/ArrowUpRight.svg"}
                  alt="GFY"
                  width={10}
                  height={10}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <p>ChatGPT</p>
              <p>Overview</p>
              <p>Enterprise</p>
              <p>Try ChatGPT</p>
            </div>

            <div className="flex flex-col">
              <p>Company</p>
              <p>About</p>
              <p>Blog</p>
              <p>Careers</p>
              <p>Charter</p>
              <p>Security</p>
              <p>Customer stories</p>
              <p>Safety</p>
            </div>
          </div>
        </div>
      </section>
      <div className=" border-[#ffffff] border-[1px] w-[full] mb-3 "></div>

      <footer className="flex flex-col md:flex-row justify-between text-white mb-20 ">
        <div className="flex flex-col space-y-2">
        <p>© 2025 Voltis Labs. All rights reserved.</p>
          <p>Terms & policies</p>
          <p>Privacy policy</p>
          <p>Brand guidelines</p>
        </div>
        <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
          <p>Twitter</p>
          <p>Youtube</p>
          <p>GitHub</p>
          <p>SoundCloud</p>
          <p>LinkedIn</p>
        </div>
      </footer>
    </div>
  );
}
