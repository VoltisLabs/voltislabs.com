import Image from "next/image";
import Link from "next/link";
import React from "react";
import LearnMoreBtn from "../../UI/LearnMoreBtn";

const SecondHero = () => {
  return (
    <section className="hero-section-container md:h-[42rem] h-[37rem] flex items-center relative">
      <div className="left-section h-full w-[50%] bg-[#AB28B280] md:p-7 p-2 flex items-end">
        <div className="item-container flex flex-col md:justify-between justify-end h-[57%]">
          <span className="block md:static absolute top-[36%] mx-auto z-50 md:mb-[5rem] mb-[3rem] text-center md:text-left text-white md:text-[3rem] text-[1.7rem]">
            A New Home for Your Fashion Finds.
          </span>
          <LearnMoreBtn
            text="Learn More about Prelura"
            borderColor="border-white md:w-[12.7rem] w-[10.45rem]"
            textColor="text-white"
          />
        </div>
      </div>
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

        <div className="big-image-container w-[75%] overflow-hidden relative">
          <div className="image-wrapper relative w-full h-full">
            <Image
              src={"/image/hero2.jpeg"}
              alt="her-section-image"
              layout="fill"
              objectFit="cover"
              objectPosition="top" // Center the image
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mobile-picture-container relative bg-red-800 h-full md:hidden block !w-[50%]">
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
