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

        <div className="border-[#FFFFFF] border-[1px] w-full text-center py-4 px-1 h-16 rounded mt-10 mb-10">
          <Link href="/careers">
            <p className="font-normal text-white sm:mt-0 text-sm mt-2 cursor-pointer hover:text-blue-500 visited:text-red-500">
              View careers
            </p>
          </Link>
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
        <Image
            src={"/image/logo3.png"}
            alt="Icon"
            width={100}
            height={100}
            className="mb-6 mt-6 md:mt-0 md:mb-24"
          />
      </footer>
      <p className="text-center pb-10 text-white mt-10">© 2025 Voltis Labs. All rights reserved.</p>
    </div>
  );
}