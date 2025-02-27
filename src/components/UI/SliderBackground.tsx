"use client";
import Image from "next/image";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import SmallLearnBtn from "./SmallLearnBtn";

interface ImagesArray {
  img: string;
}

interface SliderBackgroundProps {
  containerStyle?: string;
  imagesArray: ImagesArray[];
  titleText: string;
  vmodel?: boolean;
  smallBtnText?: string;
}

const SliderBackground = ({
  containerStyle,
  imagesArray,
  titleText,
  vmodel,
  smallBtnText,
}: SliderBackgroundProps) => {
  const [isPlaying, setIsplaying] = useState(false);

  return (
    <div
      className={`component-container min-h-[41rem] flex items-end justify-end ${containerStyle}`}
    >
      <div className="item-container flex items-center flex-col justify-between h-[25rem] ">
        <div className="imageslider-container w-full">
          <div
            onMouseEnter={() => setIsplaying(true)}
            onMouseLeave={() => setIsplaying(false)}
            onClick={() => setIsplaying(!isPlaying)}
            className="slider-statement cursor-default relative"
          >
            <Marquee
              className="slider-statement cursor-default relative"
              speed={isPlaying ? 0 : 50}
              direction="right"
            >
              {imagesArray.map((img, index) => (
                <div
                  key={index}
                  className="mr-3 overflow-hidden rounded-[7px] h-[15rem]"
                >
                  <Image
                    src={img.img}
                    alt="reluraimg"
                    className="w-[13rem] h-full object-cover object-top"
                    width={300}
                    height={300}
                  />
                </div>
              ))}
            </Marquee>
          </div>

          <span className="block text-white font-bold text-[1.7rem] mt-2 text-center">
            {titleText}
          </span>
        </div>

        <div className="icons-section-flex p-4 flex items-center justify-between w-full">
          {vmodel && (
            <Image
              src={"/icons/vmodel.svg"}
              alt="vmodel-logo"
              width={25}
              height={25}
              className="rounded-full"
            />
          )}

          <div className="">
            <SmallLearnBtn
              text={smallBtnText || "Learn More"}
              textColor="text-white"
              borderColor="border-white"
              route="http://vmodelapp.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderBackground;
