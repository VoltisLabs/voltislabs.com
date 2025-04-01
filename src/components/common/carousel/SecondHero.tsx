import Image from "next/image";
import Link from "next/link";
import React from "react";
import LearnMoreBtn from "../../UI/LearnMoreBtn";

const SecondHero = () => {
  return (
    <section className="hero-section-container md:h-[42rem] h-[37rem] flex items-center relative">
      <div className="left-section h-full w-[50%] bg-[#AB28B280] md:p-7 p-2 flex items-end">
        <div className="item-container flex flex-col md:justify-between justify-end h-[57%]">
          <span className="block md:static absolute top-1/2 mx-auto z-50 md:mb-[5rem] mb-[3rem] text-center md:text-left text-white md:text-[3rem] text-[1.7rem]">
            A New Home for Your Fashion Finds.
          </span>
          <LearnMoreBtn
            text="Learn More about Prelura"
            borderColor="border-white md:w-[12.7rem] w-[10.45rem]"
            textColor="text-white"
            route="https://prelura.com"          />
        </div>
      </div>
      <div className="right-section md:flex hidden md:w-[50%] bg-black h-full w-full">
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
  {/* Local Video */}
  <video
    src="/videos/Prelura.mp4" // Replace with the correct path to your local video
    autoPlay
    muted
    loop
    playsInline
    className=" w-full h-full object-cover z-0"
  ></video>
</div>

      <div className="mobile-picture-container relative bg-red-800 h-full md:hidden block !w-[50%]">
        <div className="overlay absolute inset-0 h-full w-full bg-black/50"></div>
        
        <video
    src="/videos/Prelura.mp4" // Replace with the correct path to your local video
    autoPlay
    muted
    loop
    playsInline
    className=" w-full h-full object-cover z-0"
  ></video>
      </div>
    </section>
  );
};

export default SecondHero;
