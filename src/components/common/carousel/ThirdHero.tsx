import Image from "next/image";
import Link from "next/link";
import React from "react";

const ThirdHero = () => {
  return (
    <section className="hero-section-container md:h-[42rem] h-[37rem] flex items-center relative">
      
      {/* Left Section (Text + Button) */}
      <div className="left-section md:p-4 p-1 ml-[-18px] bg-[#FFF1F1] w-2/5 h-full flex flex-col justify-between items-center text-center">
        
        {/* Hero Icon & Text */}
        <div className="mt-20">
          <Image src="/icons/hero.svg" alt="hero-icon" width={100} height={100} className="mx-auto" />
          <span className="block font-semibold text-black text-[1.5rem] md:text-[3rem] leading-tight">
            Rooted in Culture, Styled for Everyone.
          </span>
        </div>

        {/* Button - Bottom Left */}
        <div className="self-start flex items-center gap-2 p-2 ml-5 border border-black rounded-md">
          <Link href="/vmodel" className="text-black text-sm">
            Visit Website
          </Link>
          <Image src="/icons/arrow-dark.svg" alt="arrow-icon" width={20} height={20} />
        </div>

      </div>

      {/* Right Section (Two Side-by-Side Images) */}
      <div className="w-3/5 h-full flex">
        <Image src="/image/hero4.jpeg" alt="hero-image-1" width={500} height={500} className="w-1/2 h-full object-cover" />
        <Image src="/image/hero5.jpeg" alt="hero-image-2" width={500} height={500} className="w-1/2 h-full object-cover" />
      </div>

    </section>
  );
};

export default ThirdHero;
