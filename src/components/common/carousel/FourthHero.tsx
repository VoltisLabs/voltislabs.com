import Image from "next/image";
import React from "react";
import Link from 'next/link';
import LearnMoreBtn from '@/src/components/UI/LearnMoreBtn';

const FourthHero = () => {
  return (
    <>
      <section className="hero-section-container md:h-[42rem] h-[37rem] bg-black flex items-center relative">
        {/* Left Section */}
        <div className="hidden md:flex left-section h-full md:w-[50%] w-full bg-[#1B1B1B] md:p-7 p-2 items-end"></div>
        <div className="absolute bottom-7 left-7 hidden md:flex">
          <LearnMoreBtn
            text="Learn More about Pony"
            borderColor="border-white"
            textColor="text-white"
            route="https://myponyapp.com/" />
        </div>

        {/* Right Section with Image and Overlay */}
        <div className="right-section h-full md:w-[50%] w-full flex items-center justify-center relative">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image src="/pony.jpg" alt="pony" layout="fill" objectFit="cover" />
          </div>
        </div>

        {/* Text Container */}
        <section
          className="text-container absolute top-1/2 left-0 -translate-y-1/2 px-4 w-full flex items-center justify-center z-20">
          <div className="content-container mx-auto md:w-[50%] w-[90%] text-center">
            <div className="text-section mx-auto">
              <span className="block text-center text-white tracking-[0.2em] font-bold uppercase md:text-[1rem] text-[0.85rem] mb-3">
                Pony
              </span>
              <span className="block text-center text-white md:text-[3rem] text-[1.7rem]">
                “Interests make connections, start with substance.”
              </span>

            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default FourthHero;
