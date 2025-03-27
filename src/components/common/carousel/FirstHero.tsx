import Image from "next/image";
import Link from "next/link";
import React from "react";
import LearnMoreBtn from "../../UI/LearnMoreBtn";

const FirstHero = () => {
  return (
    <><section className="hero-section-container md:h-[42rem] h-[37rem] bg-black flex items-center relative">
      {/* Left Section */}
      <div className="hidden md:flex left-section h-full md:w-[50%] w-full bg-[#503C3B] md:p-7 p-2 flex items-end">
        <LearnMoreBtn
          text="Learn More about VModel"
          borderColor="border-white"
          textColor="text-white"
          route="http://vmodelapp.com" />
      </div>

      {/* Right Section with Overlay */}
      <div className="right-section h-full md:w-[50%] w-full flex items-center justify-center relative">
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
  {/* Local Video */}
  <video
    src="/videos/VModel.mp4" // Replace with the correct path to your local video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  ></video>
</div>

      {/* Text Container */}
      <section className="text-container absolute md:top-[30%] top-[26.5%] left-0 md:px-0 px-[1rem] w-full flex items-center justify-center mx-auto z-20">
        <div className="content-container mx-auto md:w-[50%] text-center">
          <div className="image-container flex items-center md:mb-1 mb-[1.5rem] gap-2">
            <Image
              src={"/icons/vmodel.svg"}
              alt="vmodel-logo"
              width={30}
              height={30} />
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


    </section><div className=" md:hidden left-section h-full md:w-[50%] w-full md:p-7 p-2 flex items-end">
        <LearnMoreBtn
          text="Visit VModel"
          borderColor="border-white"
          textColor="text-white"
          route="http://vmodelapp.com" />
      </div></>
  );
};

export default FirstHero;
