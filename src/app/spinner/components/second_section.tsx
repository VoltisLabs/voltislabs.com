
'use client';
import React, { useState } from 'react'
import ButtonWithBackground from './button_with_background'
import ButtonWithGradientText from './button_with_gradient_text'
import Marquee from 'react-fast-marquee';

const images = [
    "/svgs/gameplays/gameplay_1.svg",
    "/svgs/gameplays/gameplay_2.svg",
    "/svgs/gameplays/gameplay_3.svg",
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
    return (
        <section className='flex flex-col lg:items-center'>
            <span className=' lg:w-1/2 text-2xl lg:text-6xl font-extrabold text-white uppercase text-center'>choose your  <span className="bg-[url('/button_bg.png')] bg-cover  bg-clip-text text-transparent">
                favorite
            </span> games </span>
            <p className='lg:w-1/2 mt-4 font-normal text-white text-base lg:text-lg leading-8 text-center mb-10'>
                Offer sneak peeks and previews of upcoming games, including trailers, screenshots, and information about release.
            </p>
            <Marquee
                className="slider-statement z-20 cursor-default bg-black relative my-10"
                speed={100}
                pauseOnHover
                pauseOnClick
                direction="left"
                play
            >
                <div className="flex w-full">
                    {images.map((image, index) => (
                        <div key={index} className="relative w-full p-2">
                            {isClicked && activeIndex === index && (
                                <img
                                    src="/svgs/gameplays/underlay.svg"
                                    alt="Underlay"
                                    className="absolute inset-0 w-full h-full object-cover z-10 rounded-2xl"
                                />
                            )}
                            <img
                                src={image}
                                alt="Icon"
                                className="w-full h-[192px] object-cover transition-all duration-[.85s] ease-in-out cursor-pointer relative z-20 rounded-2xl"
                                onClick={() => handleImageClick(index)}
                            />
                        </div>
                    ))}
                </div>
            </Marquee>




            <div className='flex gap-4 mt-4'>
                <ButtonWithBackground text={"VIEW ALL"} />
                <ButtonWithGradientText />
            </div>
        </section>
    )
}

export default SecondSection