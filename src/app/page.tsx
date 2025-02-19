"use client";

import { IoIosSearch } from "react-icons/io";
import { About, updates } from "./data";
import Image from "next/image";
import FirstHero from "../components/common/carousel/FirstHero";
import SecondHero from "../components/common/carousel/SecondHero";
import ThirdHero from "../components/common/carousel/ThirdHero";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import Content from "../components/Content";
import Footer from "../components/footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FlexContainer from "../components/UI/FlexContainer";

export default function Home() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: false,
    fade: true,
  };

  const slides = [
    {
      image: <FirstHero />,
      text: "Slide 1 Text",
    },
    {
      image: <SecondHero />,
      text: "Slide 2 Text",
    },
    {
      image: <ThirdHero />,
      text: "Slide 3 Text",
    },
  ];

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const router = useRouter();

  return (
    <div className="page-container bg-black w-full min-h-screen">
      <div className="item-container relative">
        <Slider ref={sliderRef} {...settings}>
          {slides.map((item) => (
            <div key={item.text} className="item-container">
              {item.image}
            </div>
          ))}
        </Slider>
        <button
          className="absolute md:top-[49%] top-[41%] right-4 bg-gray-100/90 text-white rounded-full md:p-2 opacity-40 transition-all delay-75 ease-in-out hover:opacity-90 focus:outline-none"
          onClick={handleNextClick}
        >
          <Image
            src={"/icons/button-arrow.svg"}
            alt="button-icon"
            width={30}
            height={30}
          />
        </button>
      </div>

      <div className="content-container">
        <section className="overflow-x-scroll no-scrollbar flex md:px-[2rem] px-[1rem] pt-[3.45rem]   w-full min-h-[150px] gap-4  mb-20">
          {About.map((text, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-1 min-w-[200px] md:gap-3 gap-1  overflow-hidden"
            >
              <p className="text-white md:text-[1.5rem] text-[1.2rem] font-medium">
                {text.title}
              </p>
              <Link
                href={text.route}
                className="text-white underline font-normal text-sm    mt-2 cursor-pointer  sm:mt-0  hover:text-blue-500 "
              >
                {text.message}
              </Link>
            </div>
          ))}
        </section>

        <div className="border-white border-[1px] w-[full] mb-6"></div>
        <section className="mb-20 md:px-[2rem] md:h-[29rem]  h-[29rem] px-[1rem]">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-white mb-10">
            <h2 className="font-normal md:text-[1.7rem] text-[1.6rem]">
              Latest updates
            </h2>
            <div className="font-normal text-sm underline mt-2 sm:mt-0">
              See all
            </div>
          </div>

          <FlexContainer array={updates} />
        </section>
        <Content />
        <Footer />
      </div>
    </div>
  );
}
