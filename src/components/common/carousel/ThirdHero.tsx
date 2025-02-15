import Image from "next/image";
import React from "react";

const ThirdHero = () => {
  return (
    <section className="hero-section-container h-[35rem] flex items-center justify-center gap-2">
      <div className="image-container h-[35rem] md:w-[30%] md:block hidden">
        <Image
          src={"/image/hero4.jpeg"}
          alt="hero-images"
          width={500}
          height={500}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="image-container h-full md:w-[30%] md:block hidden">
        <Image
          src={"/image/hero5.jpeg"}
          alt="hero-images"
          width={500}
          height={500}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="item-container px-[2rem] bg-[#FFF1F1] md:w-[40%] w-full h-full flex flex-col items-center justify-center">
        <Image
          src={"/icons/hero.svg"}
          alt="heo-icon"
          width={100}
          height={100}
        />

        <span className="block text-center font-semibold mb-[3rem] text-black md:text-[4.5rem] text-[1.7rem]">
          Rooted in Culture, Styled for everyone.
        </span>

        <div className="item-container self-end flex items-center gap-2 p-1 border-solid border-black border-[1px] px-2 min-w-[10rem] h-[2rem] rounded-[9px]">
          <span className="block text-black text-[.8rem]">
            Learn More about VModel
          </span>
          <Image
            src={"/icons/arrow-dark.svg"}
            alt="arrow-icon"
            width={20}
            height={20}
          />
        </div>
      </div>
    </section>
  );
};

export default ThirdHero;
