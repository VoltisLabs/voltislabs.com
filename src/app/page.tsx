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

      <div className="content-container md:px-[2rem] px-[1rem]">
        <section className="flex pt-[3.45rem] flex-col md:flex-row flex-wrap w-full min-h-[150px] gap-4  mb-20">
          {About.map((text, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-1 min-w-[200px] gap-3 px-4 md:px-8"
            >
              <p className="text-white text-2xl font-medium">{text.title}</p>
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
        <section className="mb-20">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-white mb-10">
            <h2 className="font-normal text-xl sm:text-2xl">Latest updates</h2>
            <p className="font-normal text-sm underline mt-2 sm:mt-0">Söhne</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {updates.map((text, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 items-center text-center md:items-start md:text-left"
              >
                <Image
                  src={text.img}
                  alt="Icon"
                  width={450}
                  height={300}
                  className="transition-transform duration-300 ease-in-out hover:scale-95 rounded-lg"
                />
                <p className="text-white text-sm">{text.message}</p>
                <p className="text-white text-sm">{text.time}</p>
              </div>
            ))}
          </div>
        </section>
        <Content />
        <Footer />
      </div>
    </div>
  );
}
