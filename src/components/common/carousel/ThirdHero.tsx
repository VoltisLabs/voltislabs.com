import Image from "next/image";
import Link from "next/link";
import React from "react";

const ThirdHero = () => {
  return (
<<<<<<< HEAD
    <section className="hero-section-container h-[37rem] md:h-[42rem] flex flex-row items-center justify-center gap-2 w-full">
      
      {/* Left Section (Text + Button) */}
      <div className="py-6 md:px-8 px-4 bg-[#FFF1F1] w-[40%] h-full flex flex-col justify-between">
        
        {/* Content */}
        <div className="mt-20 text-center">
          <Image src="/icons/hero.svg" alt="hero-icon" width={100} height={100} className="mx-auto" />
          <span className="block font-semibold text-black text-[1.7rem] md:text-[3rem]">
=======
    <section className="hero-section-container md:h-[42rem] h-[37rem] flex items-center relative">
      
      {/* Left Section (Text + Button) */}
	<div className="left-section md:p-4 p-1 ml-[-18px] flex items-end bg-[#FFF1F1] w-1/2 h-full flex flex-col justify-between"> 
        {/* Content */}
        <div className="mt-20 md:mt-20 text-center">
          <Image 
            src="/icons/hero.svg" 
            alt="hero-icon" 
            width={100} 
            height={100} 
            className="mx-auto" 
          />
          <span className="block font-semibold text-black text-[1.5rem] md:text-[3rem] leading-tight">
>>>>>>> b05d131b9f90b346783ab2179836463336946867
            Rooted in Culture, Styled for Everyone.
          </span>
        </div>

<<<<<<< HEAD
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
=======
        {/* Button - Always at Bottom & Centered */}
	   <div className="mt-auto self-center flex items-center gap-2 p-2 border border-black rounded-md">
  		<Link href="/vmodel" className="text-black text-sm">
    		Visit Website
  		</Link>
  		<Image 
    		src="/icons/arrow-dark.svg" 
    		alt="arrow-icon" 
    		width={20} 
    		height={20} 
  		/>
	   </div>
	   
      </div>

      {/* Right Section (Two Side-by-Side Images) */}
      <div className="w-full h-full flex">
        <div className="w-1/2 h-full">
          <Image 
            src="/image/hero4.jpeg" 
            alt="hero-image-1" 
            width={500} 
            height={500} 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="w-1/2 h-full">
          <Image 
            src="/image/hero5.jpeg" 
            alt="hero-image-2" 
            width={500} 
            height={500} 
            className="w-full h-full object-cover" 
          />
>>>>>>> b05d131b9f90b346783ab2179836463336946867
        </div>
      </div>

    </section>
  );
};

export default ThirdHero;
