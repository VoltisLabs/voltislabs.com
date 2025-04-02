import Image from "next/image";
import React from "react";
import LearnMoreBtn from "../../UI/LearnMoreBtn";

const ThirdHero = () => {
  return (
    <section className="hero-section-container md:h-[42rem] h-[37rem] flex items-center justify-center relative overflow-hidden">
      {/* Mobile Background Image (Only visible on small screens) */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/image/hero4.jpeg"
          alt="hero-image-mobile"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Desktop Background Images (Only visible on medium and larger screens) */}
      <div className="hidden md:flex absolute inset-0">
        <div className="w-1/3 h-full relative">
          <Image
            src="/image/hero4.jpeg"
            alt="hero-image-1"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-1/3 h-full relative">
          <Image
            src="/image/hero5.jpeg"
            alt="hero-image-2"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-1/3 h-full relative">
          <Image
            src="/image/garm1.jpg"
            alt="hero-image-3"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Dark Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered Content */}
      <div className="relative z-10 text-center text-white flex flex-col items-center justify-center w-full px-6">
        <Image
          src="/image/Frame.jpg"
          alt="hero-icon"
          width={100}
          height={100}
          className="mx-auto mb-4"
        />
        <span className="block text-center text-white md:text-[3rem] text-[1.7rem]">
          {"Rooted in Culture,\nStyled for Everyone."}
        </span>
      </div>

      {/* Bottom Centered Learn More Button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <LearnMoreBtn
          text="Learn More about Afrogarm"
          borderColor="border-white"
          textColor="text-white"
          route="http://afrogarm.com"
        />
      </div>
    </section>
  );
};

export default ThirdHero;
