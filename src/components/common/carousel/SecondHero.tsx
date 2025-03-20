import Image from "next/image";
import Link from "next/link";
import React from "react";
import LearnMoreBtn from "../../UI/LearnMoreBtn";

const SecondHero = () => {
  return (
    <section className="hero-section-container md:h-[42rem] h-[37rem] flex items-center relative">
<<<<<<< HEAD
	
      <div className="left-section h-full w-[50%] bg-[#AB28B280] md:p-7 p-2 flex items-end">
        <div className="item-container flex flex-col md:justify-between justify-end h-[57%]">
          <span 
		  className="block md:static absolute top-[36%] mx-auto z-50 md:mb-[5rem] mb-[3rem] text-center md:text-left text-white md:text-[3rem] text-[1.7rem]">
=======
    
      <div className="left-section h-full w-[50%] bg-[#AB28B280] md:p-7 p-2 flex items-end">     
        <div className="item-container flex flex-col md:justify-between justify-end h-[57%]">
          <span className="block font-semibold text-white text-[3.5rem] md:text-[3rem] leading-tight">
>>>>>>> b05d131b9f90b346783ab2179836463336946867
            A New Home for Your Fashion Finds.
          </span>
          
		{/* Button - Always at Bottom & Centered */}
	   <div className="mt-auto flex justify-center items-center self-center gap-2 p-2 border border-white rounded-md">
  		<Link href="" className="text-white text-sm">
    		Visit Website
  		</Link>
  		<Image 
    		src="/icons/arrow-dark.svg" 
    		alt="arrow-icon" 
    		width={20} 
    		height={20}
    		className="filter invert" 
  		/>
	   </div>
	   
        </div>
      </div>
<<<<<<< HEAD
	  
=======
      
>>>>>>> b05d131b9f90b346783ab2179836463336946867
      <div className="right-section md:flex hidden md:w-[50%] bg-black h-full w-full">
        <div className="image-container h-full px-2 gap-2 w-[20rem] flex flex-col justify-between">
          <div className="image-wrapper h-[50%] w-full rounded-[4px] overflow-hidden relative">
            <Image
              src={"/image/hero1.jpeg"}
              alt="her-section-image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          
          <div className="image-wrapper h-[50%] w-full relative rounded-[4px] overflow-hidden">
            <Image
              src={"/image/hero3.jpeg"}
              alt="her-section-image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="big-image-container w-[50%] overflow-hidden relative">
          <div className="image-wrapper relative w-full h-full">
            <Image
              src={"/image/hero2.jpeg"}
              alt="her-section-image"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mobile-picture-container relative bg-red-800 h-full md:hidden block w-full">
        <div className="overlay absolute inset-0 h-full w-full bg-black/50"></div>
        <Image
          src={"/image/hero6.jpeg"}
          alt="her-section-image"
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </div>	
    </section>
  );
};

export default SecondHero;
