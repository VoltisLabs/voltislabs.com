"use client";

import { useRef, useState, useEffect } from "react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ButtonWithBackground from "./button_with_background";

const images = [
    "/images/fidgets/bat_fidget.png",
    "/images/fidgets/fiery_eye_fidget.png",
    "/images/fidgets/gun_fidget.png",
    "/images/fidgets/plate_fidget.png",
    "/images/fidgets/dragon_fidget.png",
    "/images/fidgets/blade_fidget.png",
];

const CrewSection = () => {
    const [marqueeDirection, setMarqueeDirection] = useState("left");
    const sliderRef = useRef<HTMLDivElement | null>(null); // Explicitly type the ref
    const itemWidthRef = useRef<number>(0);

    const swiperRef = useRef<any>(null);

    const handleLeftClick = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev(); // Slide to the previous slide
        }
    };

    const handleRightClick = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext(); // Slide to the next slide
        }
    };

    return (
        <section className="relative bg-gradient-to-r from-[#932F16] to-[#F94F26] flex items-center justify-center">
            <img
                src='/images/characters/axelDash.png'
                className='absolute -top-4 md:-top-10 lg:-top-16 z-40 -left-7 md:h-[470px] lg:left-0 object-cover lg:h-[600px] w-[209px] lg:w-[380px] aspect-auto bg-transparent'
            />

            <div className={`flex flex-col p-6 pb-0 sm:p-6 pt-2 sm:py-10 pl-[120px] lg:pl-[260px] pr-0 sm:pr-0 `}>
                <h2
                    className='text-base md:text-3xl xl:text-5xl font-normal text-white uppercase text-center tracking-widest text-nowrap'
                    style={{
                        fontFamily: 'var(--font-comfortaa)',
                    }}
                >
                    MEET YOUR CREW!
                </h2>
                <span className='text-xs md:text-lg xl:text-[25px] font-normal text-white px-6 md:pl-16 lg:px-0 lg:leading-8 xl:leading-9  my-4  text-center'>
                    <span className='font-bold'>Every spinner</span> has a story. <span className='font-bold'>Every hero</span> has a dream.
                </span>


                <Swiper
                    observer={true}
                    spaceBetween={40}
                    className=""
                    modules={[Pagination, Navigation]}
                    ref={swiperRef}
                    slidesPerView={5}
                    centeredSlides={true}
                    loop={true}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index} className="!w-1/4 md:w-1/6">
                            <img
                                src={image}
                                alt="Icon"
                                className="w-full md:h-[152px] object-cover md:object-contain aspect-square cursor-pointer relative z-20 h-20 lg:h-[256px]" // Adjust width to 80%
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>


                <div className="flex justify-center gap-4 mt-8 sm:mt-7 md:mt-3 p-2 mb-5">
                    <button
                        style={{
                            fontFamily: "var(--font-hammersmith-one)",
                        }}
                        className="w-6 h-6.5 text-center text-black font-bold bg-[#FFD94D] flex justify-center items-center rounded-[10px]"
                        onClick={handleLeftClick}
                    >
                        &lt;
                    </button>
                    <button
                        style={{
                            fontFamily: "var(--font-hammersmith-one)",
                        }}
                        className="w-6 h-6.5 text-center text-black font-bold bg-[#FFD94D] flex justify-center items-center rounded-[10px]"
                        onClick={handleRightClick}
                    >
                        &gt;
                    </button>
                </div>
                <div className="self-center md:block hidden md:mt-7 lg:mt-0">
                    <ButtonWithBackground text="DOWNLOAD NOW" width={"218"} />
                </div>
            </div>
        </section>
    );
};
export default CrewSection;
