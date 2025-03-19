import Image from "next/image";
import Link from "next/link";
import React from "react";

const ThirdHero = () => {
  return (
    <section className="hero-section-container h-[37rem] md:h-[42rem] flex flex-row items-center justify-center gap-2 w-full">
      
      {/* Left Section (Text + Button) */}
      <div className="py-6 md:px-8 px-4 bg-[#FFF1F1] w-[40%] h-full flex flex-col justify-between">
        
        {/* Content */}
        <div className="mt-20 text-center">
          <Image src="/icons/hero.svg" alt="hero-icon" width={100} height={100} className="mx-auto" />
          <span className="block font-semibold text-black text-[1.7rem] md:text-[3rem]">
            Rooted in Culture, Styled for Everyone.
          </span>
        </div>

        {/* Button - Always at Bottom Left */}
        <div className="self-start flex gap-2 p-2 border border-black rounded-md">
          <Link href="/vmodel" className="text-black text-sm">
            Learn More about VModel
          </Link>
          <Image src="/icons/arrow-dark.svg" alt="arrow-icon" width={20} height={20} />
        </div>

      </div>

      {/* Right Section (Two Side-by-Side Images) */}
      <div className="flex w-[60%] h-full">
        <div className="h-full w-1/2">
          <Image src="/image/hero4.jpeg" alt="hero-image-1" width={500} height={500} className="h-full w-full object-cover" />
        </div>
        <div className="h-full w-1/2">
          <Image src="/image/hero5.jpeg" alt="hero-image-2" width={500} height={500} className="h-full w-full object-cover" />
        </div>
      </div>

    </section>
  );
};

export default ThirdHero;
