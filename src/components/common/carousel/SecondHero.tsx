import Image from "next/image";
import React from "react";

const SecondHero = () => {
  return (
    <section className="hero-section-container h-[42rem] flex items-center relative">
      <div className="left-section h-full md:w-[50%] w-full bg-[#AB28B280] p-7 pb-[4rem] flex md:items-end items-center">
        <div className="item-container mb-[4.5rem]">
          <span className="block mb-[5rem] text-left text-white md:text-[3.5vw] text-[2.4rem]">
            A New Home for Your Fashion Finds.
          </span>
          <div className="item-container flex items-center gap-2 p-1 border-solid border-white border-[1px] px-2 w-[14rem] h-[2rem] rounded-[4px]">
            <span className="block text-white text-[.8rem]">
              Learn More about Prelura
            </span>
            <Image
              src={"/icons/arrow.svg"}
              alt="arrow-icon"
              width={20}
              height={20}
            />
          </div>
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

        <div className="big-image-container w-[75%] overflow-hidden">
          <Image
            src={"/image/hero2.jpeg"}
            alt="her-section-image"
            width={800}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SecondHero;
