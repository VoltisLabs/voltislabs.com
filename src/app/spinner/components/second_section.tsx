"use client";
import React, { useState } from "react";
import ButtonWithBackground from "./button_with_background";
import ButtonWithGradientText from "./button_with_gradient_text";
import Marquee from "react-fast-marquee";
import { bgColor, defaultPadding } from "../data";

const images = [
    "/images/characters/byte.png",
    "/images/characters/captainBlaze.png",
    "/images/characters/commanderNova.png",
    "/images/characters/drSpinstein.png",

    "/images/characters/grannyBlitz.png",
    "/images/characters/izzySparks.png",
    "/images/characters/jetLi’l.png",
    "/images/characters/lunaFlip.png",
    "/images/characters/maverickMoon.png",
    "/images/characters/maxVolt.png",
    "/images/characters/shadeVex.png",
    "/images/characters/twizzleHex.png",
    "/images/characters/vivaVox.png",
];

const SecondSection = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleImageClick = (index: number) => {
        if (activeIndex === index) {
            // If clicked image is the same, remove it
            setActiveIndex(null);
            setIsClicked(false);
        } else {
            // Set the clicked image as active and show as underlay
            setActiveIndex(index);
            setIsClicked(true);
        }
    };

    const extractName = (filePath: string) => {
        const fileName = filePath.split("/").pop()?.split(".")[0] ?? "";
        const withSpaces = fileName.replace(/([A-Z])/g, " $1");
        return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
    };
    return (
        <section
            className={`flex mt-10 flex-col md:items-center p-6 px-0 pb-0 sm:p-6 sm:pb-0 sm:px-0 bg-black`}
        >
            <div className="mx-auto lg:w-4/5 w-full">
                <h2
                    style={{
                        fontFamily: "var(--font-comfortaa)",
                    }}
                    className="text-lg sm:text-lg lg:text-3xl xl:text-5xl font-normal text-white uppercase text-center tracking-widest sm:text-nowrap"
                >
                    LEGENDS AREN’T BORN, THEY’RE{" "}
                    <span
                        style={{
                            fontFamily: "var(--font-comfortaa)",
                        }}
                        className={`${bgColor} bg-clip-text text-transparent`}
                    >
                        {" "}
                        spun
                    </span>
                </h2>
                <p style={{ fontFamily: "var(--font-sometype-mono)" }} className=" my-10 xl:mb-24 text-sm sm:text-base lg:text-lg xl:text-[25px] font-normal text-white px-6 lg:px-0 md:leading-8 xl:leading-9 text-center mb-10">
                    In the world of Spinnersonic, every hero carries a spark — <span className="font-bold">
                        speed,
                        power, heart,
                    </span>
                    and a <span className="font-bold">
                        hunger to win.
                    </span>
                    Choose your champion from a roster
                    of <span className="font-bold">
                        unstoppable racers, fearless commanders, tech wizards,
                    </span>
                    and<span className="font-bold">

                        out-of-this-world dreamers.
                    </span>
                    Each one armed with their own moves, their
                    own style, and a destiny waiting to be written.
                </p>
            </div>
            <Marquee
                className="slider-statement z-20 cursor-default bg-transparent relative min-h-fit"
                speed={50}
                pauseOnHover
                direction="left"
                autoFill
                play
            >
                <div className="no-scrollbar flex w-full items-stretch bg-[#FF552A]">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="no-scrollbar relative w-full border-none"
                            style={{ margin: "-1px" }}
                        >
                            <div className="flex no-scrollbar flex-col h-full">
                                <img
                                    src={image}
                                    alt="Icon"
                                    className=" h-[152px] lg:h-[256px] object-contain cursor-pointer relative z-20 bg-black"
                                    onClick={() => handleImageClick(index)}
                                />
                                <p
                                    style={{ fontFamily: "var(--font-comix-loud)" }}
                                    className="text-xs p-3 lg:p-4 lg:pb-8 text-center uppercase leading-9 flex text-white w-full h-full items-center justify-center"
                                >
                                    {extractName(image).split(" ")[0]} <br />
                                    {extractName(image).split(" ")[1]}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Marquee>

            {/* 


            <div className='flex gap-4 mt-4'>
                <ButtonWithBackground text={"VIEW ALL"} />
                <ButtonWithGradientText text='Download' />
            </div> */}
        </section>
    );
};

export default SecondSection;
