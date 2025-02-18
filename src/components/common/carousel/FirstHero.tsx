import Image from "next/image";
import React from "react";

const FirstHero = () => {
  return (
    <section className="hero-section-container md:h-[42rem] h-[30rem] bg-black flex items-center relative">
      <div className="left-section h-full w-[50%] bg-[#503C3B] md:p-7 p-2 flex items-end">
        <div className="item-container flex items-center gap-2 p-1 border-solid border-white border-[1px] px-2 min-w-[10rem] h-[2rem] rounded-[4px]">
          <span className="block text-white md:text-[.8rem] text-[.7rem]">
            Learn More about VModel
          </span>
          <Image
            src={"/icons/arrow.svg"}
            alt="arrow-icon"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="right-section w-[50%]"></div>
      <section className="text-container absolute md:top-[30%] top-[20%] left-0 md:px-0 px-[1rem] w-full flex items-center justify-center mx-auto">
        <div className="content-container mx-auto md:w-[50%]">
          <div className="image-container flex items-center md:mb-1 mb-[1.5rem] gap-2">
            <Image
              src={"/icons/vmodel.svg"}
              alt="vmodel-logo"
              width={30}
              height={30}
            />

            <span className="block text-[#EDCEAB] font-semibold md:text-[1.15rem] text-[.85rem]">
              VMODEL
            </span>
          </div>

          <div className="text-section mx-auto">
            <span className="block text-center text-white md:text-[3rem] text-[1.7rem]">
              “Designed for Creators, Built for the Future”
            </span>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FirstHero;
