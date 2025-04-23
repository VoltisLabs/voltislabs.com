'use client';

import { useRef, useState, useEffect } from 'react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ButtonWithBackground from './button_with_background';
import Link from 'next/link';

const images = [
  '/images/fidgets/bat_fidget.png',
  '/images/fidgets/fiery_eye_fidget.png',
  '/images/fidgets/gun_fidget.png',
  '/images/fidgets/plate_fidget.png',
  '/images/fidgets/dragon_fidget.png',
  '/images/fidgets/blade_fidget.png',
];

const CrewSection = () => {
  const [marqueeDirection, setMarqueeDirection] = useState('left');
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
    <section className="relative flex items-center justify-center bg-gradient-to-r from-[#932F16] to-[#F94F26]">
      <img
        src="/images/characters/axelDash.png"
        className="absolute -left-7 -top-4 z-40 aspect-auto w-[209px] bg-transparent object-cover md:-top-10 md:h-[470px] lg:-top-16 lg:left-0 lg:h-[600px] lg:w-[380px]"
      />

      <div
        className={`flex flex-col p-6 pb-0 pl-[120px] pr-0 pt-2 sm:p-6 sm:py-10 sm:pr-0 lg:pl-[260px]`}
      >
        <h2
          className="text-nowrap text-center text-base font-normal uppercase tracking-widest text-white md:text-3xl xl:text-5xl"
          style={{
            fontFamily: 'var(--font-comfortaa)',
          }}
        >
          MEET YOUR CREW!
        </h2>
        <span
          style={{ fontFamily: 'var(--font-sometype-mono)' }}
          className="my-4 px-6 text-center text-xs font-normal text-white md:pl-16 md:text-lg lg:px-0 lg:leading-8 xl:text-[25px] xl:leading-9"
        >
          <span className="font-bold">Every spinner</span> has a story.{' '}
          <span className="font-bold">Every hero</span> has a dream.
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
                className="relative z-20 aspect-square h-20 w-full cursor-pointer object-cover md:h-[152px] md:object-contain lg:h-[256px]" // Adjust width to 80%
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mb-5 mt-8 flex justify-center gap-4 p-2 sm:mt-7 md:mt-3">
          <button
            style={{
              fontFamily: 'var(--font-hammersmith-one)',
            }}
            className="h-6.5 flex w-6 items-center justify-center rounded-[10px] bg-[#FFD94D] text-center font-bold text-black"
            onClick={handleLeftClick}
          >
            &lt;
          </button>
          <button
            style={{
              fontFamily: 'var(--font-hammersmith-one)',
            }}
            className="h-6.5 flex w-6 items-center justify-center rounded-[10px] bg-[#FFD94D] text-center font-bold text-black"
            onClick={handleRightClick}
          >
            &gt;
          </button>
        </div>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://spinnersonic.com/"
          className="hidden self-center md:mt-7 md:block lg:mt-0"
        >
          <ButtonWithBackground text="Visit Site" width={'218'} />
        </Link>
      </div>
    </section>
  );
};
export default CrewSection;
