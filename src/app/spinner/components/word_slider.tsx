import React from "react";
import Marquee from "react-fast-marquee";
import { PiStarFourFill } from "react-icons/pi";

const WordSlider = ({ rotate = false, isWhite = false }: { rotate?: Boolean, isWhite?: Boolean }) => {
    return (
        <div className="relative">

            <Marquee
                className={` slider-statement overflow-y-hidden z-20 cursor-default bg-transparent relative my-3 lg:my-10 ${rotate ? "-rotate-3" : ""
                    }`}
                speed={50}
                direction="left"
                play
            >
                <div className="flex w-full">

                    {["gaming spanning", "action-packed", "mind-bending", "collection of games"].map((word, index) => (
                        <div className="flex items-center w-fit" key={index}>

                            <div key={index} className="text-white text-base lg:text-4xl font-extrabold uppercase mx-12">

                                {word}
                            </div>
                            {isWhite ? <PiStarFourFill className="size-4 lg:size-10 text-white" /> :
                                <img src="/svgs/Star.svg" className="size-4 lg:size-10" />}
                        </div>
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default WordSlider;


// ["Multiple game modes for every playstyle",
//     "Online multiplayer & leaderboards",
//     "Customisable spinners & environments",
//     "Spin miles tracking in all modes",
//     "ADHD-friendly free play mode",
//     "Reverse-racing concept in Slow Motion mode",
//     "Optimised for iOS, Android, and Web"]