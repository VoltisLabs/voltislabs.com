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
import { useEffect, useRef, useState } from "react";
import Content from "../components/Content";
import Footer from "../components/footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaChevronLeft, FaChevronRight, FaSpotify } from "react-icons/fa";

export default function Home() {
  const sliderRef = useRef<Slider>(null);
  const updatesContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0); 
  // Function to check scroll position and update arrow visibility
  const checkScrollPosition = () => {
    const container = updatesContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft + container.clientWidth < container.scrollWidth
      );
    }
  };

  useEffect(() => {
    const container = updatesContainerRef.current;
    if (container) {
      checkScrollPosition(); // Initial check
      container.addEventListener("scroll", checkScrollPosition); // Listen for scroll events
      return () => container.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);

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
    afterChange: (current:any) => setCurrentSlide(current),
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
  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const router = useRouter();
console.log(currentSlide)
  return (
    <div className="page-container bg-black w-full min-h-screen">
     <div className="item-container absolute inset-0 w-full 2xl:w-3/5 h-full mx-auto">
  <button
    className="absolute left-4 md:top-[20rem] top-[30%] bg-gray-100/90 text-white rounded-full md:p-2 opacity-40 transition-all delay-75 ease-in-out hover:opacity-90 focus:outline-none z-10"
    onClick={handlePrevClick}
  >
    <Image
      src={"/icons/button-arrow.svg"}
      alt="button-icon"
      width={30}
      height={30}
      className="rotate-180"
    />
  </button>

  <Slider ref={sliderRef} {...settings}>
    {slides.map((item) => (
      <div key={item.text} className="w-full h-full">
        {item.image}
      </div>
    ))}
  </Slider>

  <button
    className="absolute md:top-[20rem] top-[30%] right-4 bg-gray-100/90 text-white rounded-full md:p-2 opacity-40 transition-all delay-75 ease-in-out hover:opacity-90 focus:outline-none z-10"
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


      <div className="pt-[42rem] content-container">
       


      <section className="overflow-x-scroll no-scrollbar flex md:px-[2rem] px-[1rem] pt-[3.45rem]   w-full min-h-[150px] md:gap-12 gap:4  mb-20">
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
                className="text-white underline font-normal text-sm    mt-2 cursor-pointer  sm:mt-0  hover:text-blue-500"
              >
                {text.message}
              </Link>
            </div>
          ))}
        </section>




      


        <section className="mb-20 md:px-[2rem] px-[1rem] md:h-[34rem] h-[23rem] relative">
      <div className="border-white border-[1px] w-full mb-6"></div>
      <div className="flex flex-row justify-between items-start sm:items-center text-white mb-10">
        <h2 className="font-normal md:text-[1.7rem] text-[1.6rem]">Latest Updates</h2>
        <Link
          href={"/latest-updates"}
          className="font-normal text-sm underline mt-2 sm:mt-0"
        >
          See all
        </Link>
      </div>

      {/* Scrollable Section with Arrows */}
      <div className="relative">
        {/* Left Arrow */}
        {/* Left Arrow */}
{canScrollLeft && (
  <button
    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 text-black rounded-full p-3 z-10 hover:bg-white focus:outline-none shadow-md"
    onClick={() => {
      const container = updatesContainerRef.current;
      container?.scrollBy({ left: -300, behavior: "smooth" });
    }}
  >
    <FaChevronLeft size={20} />
  </button>
)}

{/* Scrollable Content */}
<div
  id="updates-container"
  ref={updatesContainerRef}
  className="overflow-x-scroll md:min-w-[43rem] no-scrollbar min-w-[20rem] flex items-center"
>
  <div className="flex flex-nowrap gap-8 h-full md:w-full">
    {updates.map((text, index) => (
      <div
        key={index}
        className="md:min-w-[22rem] w-[12.5rem] text-left !min-h-[25rem] overflow-hidden items-start"
      >
        <div className="image-container w-full h-20rem overflow-hidden rounded-[10px]">
          <Image
            src={text.img}
            alt="Icon"
            width={310}
            height={300}
            className="transition-all w-full duration-[.85s] ease-in-out hover:scale-110"
          />
        </div>

        <p className="text-white text-[.9rem] mt-3">{text.message}</p>
        {text.subText && (
          <p className="text-[.9rem] text-[#535353]">{text.subText}</p>
        )}
        <p className="text-white text-[.7rem]">{text.time}</p>
        {text.spotify && (
          <a
            href={text.spotifyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 mt-4 py-2 px-4 rounded-full border hover:border-transparent border-white text-white text-[.9rem] font-medium overflow-hidden w-fit cursor-pointer group"
          >
            <span className="absolute inset-0 bg-[#1DB954] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            <FaSpotify className="relative z-10 text-[1.2rem] transition-all duration-300 group-hover:text-black" />
            <span className="relative z-10 transition-all duration-300 group-hover:text-black">
              Listen on Spotify
            </span>
          </a>
        )}
      </div>
    ))}
  </div>
</div>

{/* Right Arrow */}
{canScrollRight && (
  <button
    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 text-black rounded-full p-3 z-10 hover:bg-white focus:outline-none shadow-md"
    onClick={() => {
      const container = updatesContainerRef.current;
      container?.scrollBy({ left: 300, behavior: "smooth" });
    }}
  >
    <FaChevronRight size={20} />
  </button>
)}
      </div>
    </section>
        <Content />
      </div>
    </div>
  );
}
