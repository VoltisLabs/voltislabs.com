'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ButtonWithBackground from './button_with_background';
import ButtonWithGradientText from './button_with_gradient_text';
import NumberCounter from './number_counter';
import ViewAllButton from './view_all_button';
import FidgetSpinner from './fidget_spinner';
import { bgColor, defaultPadding } from '../data';



const spinners = [
    "/svgs/spinners/fidget_spiner.png",
    "/svgs/spinners/fidget_spiner_1.png",
    "/svgs/spinners/fidget_spiner_2.png",
    "/svgs/spinners/fidget_spiner_3.png",
    // "/svgs/afrogarm_sliders/slide_1.png"
    // "/svgs/spinners/spinner_dragon.svg",
    // "/svgs/spinners/spinner_fish.svg",
    // "/svgs/spinners/spinner_bang.svg",
    // "/svgs/spinners/spinner_dragon_right.svg",
    // "/svgs/spinners/spinner_star.svg",
    // "/svgs/spinners/spinner_round.svg"
];

const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);


    const nextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex === spinners.length - 1 ? 0 : prevIndex + 1));

    };

    return (
        <section className={`relative w-full flex lg:mt-6  flex-col lg:flex-row-reverse items-center justify-between pt-5 bg-gradient-to-r from-[#FF5722] to-[#99240B] ${defaultPadding} !pb-10 !gap-0`}>
            {/* Left Content */}
            <div className='flex flex-col w-full md:pl-[132px] lg:pl-[336px] xl:pr-[180px] xl:pl-[443px] items-center 2xl:pl-[350px]'>
                <h2 className='text-xs md:text-lg sm:text-base lg:text-3xl xl:text-4xl lg:text-[30px] xl:pt-1 font-normal text-[#FFD94D] text-nowrap' style={{ fontFamily: 'var(--font-comix-loud)' }}>
                    WELCOME TO SPINN`RSONIC!
                </h2>
                <h2 className='w-1/2 md:w-2/3 lg:w-2/3 xl:w-3/4  pl-4 md:pl-0 lg:pl-4 xl:pl-1 text-xl md:text-3xl lg:text-3xl xl:text-5xl self-end sm:self-center font-bold text-white mt-7 md:mt-10 lg:my-12 text-center' style={{ fontFamily: 'var(--font-titan-one)' }}>
                    Race, Spin and Soar to Glory
                </h2>
                <span className=' font-normal text-white text-xs md:text-sm xl:text-lg md:leading-6 lg:leading-10 px-2.5 lg:px-6 xl:px-12  py-2 lg:py-3.5 xl:py-6 md:left-0 lg:right-0 self-center top-72 md:top-58 lg:top-84 xl:top-[430px] 2xl:top-[430px] z-40 absolute bg-[#FF842A] '>
                    <span className='font-bold'>
                        spinnersonic
                    </span> is a fast-paced action game where your spinner is your hero.<br /> Race against others, customize your style, unlock wild characters, and become the ultimate spin champion.
                </span>

                <div className=' relative z-40 flex-col items-center flex md:flex-row gap-4 md:gap-7 lg:gap-12 mt-[269px] md:mt-[186px] sm:mt-[350px] lg:mt-[265px] xl:mt-[366px] lg:mb-0 md:ml-auto'>
                    <ButtonWithBackground isWhite text="PLAY NOW" width='218' />
                    <ButtonWithBackground isWhite text='meet the heroes' width='218' />
                </div>
                {/* <NumberCounter /> */}
            </div>
            <img src="/images/characters/bloop.png"
                className='absolute object-contain bottom-0 h-[600px] w-[280px] sm:w-[310px] md:w-[350px] lg:h-[700px] lg:w-[520px] xl:w-[600px] xl:h-[860px] -left-10 sm:-left-4 lg:-left-9 xl:-left-0 -top-[72px] md:-top-20 lg:-top-16 xl:-top-20 z-30' />

            {/* Right Spinner Carousel */}
            <div className="relative w-fit flex flex-col h-full gap-3 justify-center ">
                {/* <FidgetSpinner /> */}
                <div className="w-full relative flex flex-col gap-6 lg:gap-0 lg:flex-row justify-center items-center">
                    <AnimatePresence mode="wait"  >

                        {/* <FidgetSpinner
                            key={spinners[currentIndex]} 
                         /> */}
                        {/* <TbFidgetSpinner className="size-28" /> */}
                        {/* <span>
                            76.0RPM
                        </span> */}
                    </AnimatePresence>
                </div>

                {/* <div className='w-fit ml-auto '>
                    <ButtonWithBackground text={'Switch'} />
                </div> */}
            </div>
        </section>
    );
};

export default HeroSection;



