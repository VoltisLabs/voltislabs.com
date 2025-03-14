// components/InfiniteMarqueeSlider.js
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const vmodelImages = [
  { img: "/image/vmodelslider1.jpeg" },
  { img: "/image/vmodelslider2.png" },
  { img: "/image/vmodelslider3.png" },
  { img: "/image/vmodelslider4.jpeg" },
];

const InfiniteMarqueeSlider = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10, // Continuous scroll effect
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
   draggable: true,
   rtl:true,
    //swipeToSlide: true,
    variableWidth: true, // Allow slides to have their own width
  };

  return (
    <section className="image-section hidden md:block mb-[4.2rem] md:px-[4rem] lg:px-[10rem] xl:px-[16rem] px-[2rem] overflow-hidden">
      <Slider {...settings} className="slider-statement flex items-center">
        {[...vmodelImages, ...vmodelImages, ...vmodelImages].map((img, index) => (
          <div key={index} className="px-2">
            <div className="w-[18rem] h-[18rem] rounded-[10px] overflow-hidden">
              <Image
                src={img.img}
                alt="reluraimg"
                className="w-full h-full object-cover rounded-[10px]"
                width={500}
                height={500}
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default InfiniteMarqueeSlider;
