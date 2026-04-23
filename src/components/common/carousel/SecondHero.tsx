import React from "react";
import LearnMoreBtn from "../../UI/LearnMoreBtn";

const SecondHero = () => {
  return (
    <><section className="hero-section-container h-[37rem] w-full bg-black md:h-[42rem] flex items-center relative">
      {/* Left Section */}
      <div className="hidden md:flex left-section h-full md:w-[50%] w-full bg-[#AB28B280] md:p-7 p-2 flex items-end">
        <LearnMoreBtn
          text="Learn More about Wearhouse"
          borderColor="border-vl-cream"
          textColor="text-vl-cream"
          route="/wearhouse" />
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
            <img
              src="/icons/primary-logo.svg"
              alt="Wearhouse"
              className="h-12 w-12 rounded-[10px] object-cover object-center shadow-sm md:h-14 md:w-14"
            />
            {/* <span className="block text-[#EDCEAB] font-semibold md:text-[1.15rem] text-[.85rem]">
        VMODEL
      </span> */}
          </div>

          <div className="text-section mx-auto">
            <span className="block text-center text-[1.7rem] font-semibold leading-tight text-vl-cream md:text-[3rem]">
              “A New Home for Your Fashion Finds.”
            </span>
          </div>
        </div>
      </section>



    </section><div className=" md:hidden left-section  h-full md:w-[50%] w-full md:p-7 p-2 flex items-end justify-center md:justify-start">
        <LearnMoreBtn
          text="Learn More about Wearhouse"
          borderColor="border-vl-cream"
          textColor="text-vl-cream"
          route="/wearhouse" />
      </div></>
  );
};

export default SecondHero;
