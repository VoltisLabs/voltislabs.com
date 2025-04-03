import Image from "next/image";
import Link from "next/link";
import React from "react";
import LearnMoreBtn from "../../UI/LearnMoreBtn";

const SecondHero = () => {
  return (
    <><section className="hero-section-container md:h-[42rem] h-[37rem] bg-black flex items-center relative">
      {/* Left Section */}
      <div className="hidden md:flex left-section h-full md:w-[50%] w-full bg-[#AB28B280] md:p-7 p-2 flex items-end">
        <LearnMoreBtn
          text="Learn More about Prelura"
          borderColor="border-white md:w-[12.7rem] w-[10.45rem]"
          textColor="text-white"
          route="https://prelura.com" />
      </div>

      {/* Right Section with Overlay */}
      <div className="right-section h-full md:w-[50%] w-full flex items-center justify-center relative">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        {/* Local Video */}
        <video
          src="/videos/Prelura.mp4" // Replace with the correct path to your local video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        ></video>
      </div>

      {/* Text Container */}
      <section className="text-container absolute top-1/2 left-0 -translate-y-1/2 px-4 w-full flex items-center justify-center z-20">
        <div className="content-container mx-auto md:w-[50%] w-[90%] text-center">
          <div className="image-container flex items-center justify-center md:mb-1 mb-[1.5rem] gap-2">
            <Image
              src={"/image/prelura2.jpg"}
              alt="vmodel-logo"
              className="rounded"
              width={50}
              height={60}
            />
            {/* <span className="block text-[#EDCEAB] font-semibold md:text-[1.15rem] text-[.85rem]">
        VMODEL
      </span> */}
          </div>

          <div className="text-section mx-auto">
            <span className="block text-center text-white md:text-[3rem] text-[1.7rem]">
              “A New Home for Your Fashion Finds.”
            </span>
          </div>
        </div>
      </section>



    </section><div className=" md:hidden left-section h-full md:w-[50%] w-full md:p-7 p-2 flex items-end">
        <LearnMoreBtn
          text="Learn More about Prelura"
          borderColor="border-white md:w-[12.7rem] w-[10.45rem]"
          textColor="text-white"
          route="https://prelura.com" />
      </div></>
  );
};

export default SecondHero;
