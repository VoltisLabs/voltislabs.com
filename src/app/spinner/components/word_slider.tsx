import React from "react";
import Marquee from "react-fast-marquee";

const WordSlider = ({ rotate = false }) => {
    return (
        <div className="relative">

            <Marquee
                className={` slider-statement overflow-y-hidden z-20 cursor-default bg-black relative my-3 lg:my-10 ${rotate ? "-rotate-3" : ""
                    }`}
                speed={100}
                direction="left"
                play
            >
                <div className="flex w-full">

                    {["gaming spanning", "action-packed", "mind-bending", "collection of games"].map((word, index) => (
                        <div className="flex items-center w-fit" key={index}>

                            <div key={index} className="text-white text-base lg:text-4xl font-extrabold uppercase mx-12">

                                {word}
                            </div>
                            <img src="/svgs/Star.svg" className="size-4 lg:size-10" />
                        </div>
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default WordSlider;
