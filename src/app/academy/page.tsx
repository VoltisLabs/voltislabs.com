"use client";

import Subtitle from "@/src/components/UI/subtitle";
import Title from "@/src/components/UI/Title";
import React, { useEffect, useState } from "react";
import {
  paragrapghClassName,
  secondaryTitleClassName,
  sectionTitleClassName,

  titleClassName,

} from "../data";
import Sidebar from "@/src/components/UI/SideBar";
import Image from "next/image";
import TitleSection from "@/src/components/UI/TitleSection";
import Marquee from "react-fast-marquee";
import SliderBackground from "@/src/components/UI/SliderBackground";
import LearnMoreBtn from "@/src/components/UI/LearnMoreBtn";
import Link from "next/link";
import CourseCard from "@/src/components/course/CourseCard";

function Academy() {
  const menuItems = [
    { name: "What is Afrogarm?", route: "firstSection", Icon: "" },
    { name: "What makes Afrogram different?", route: "secondSection", Icon: "" },
    { name: "Why shop african fashion?", route: "thirdSection", Icon: "" },
    { name: "The afrogarm experience", route: "firstSection", Icon: "" },
    { name: "Join our community", route: "fifthSection", Icon: "" },
  ];

  const courses = [
    {
      imageSrc: "/images/course/course.png", // your image path
      title: "Marketing",
      subtitle: "",
      description: "Learn the building blocks of campaigns and analytics",
      link: "/curriculum/web-development",
    },
    {
        imageSrc: "/images/course/course.png", // your image path
    title: "Web",
      subtitle: "Development",
      description: "Build websites and web apps using HTML, CSS, JavaScript, and modern frameworks.",
      link: "/curriculum/ui-ux",
    },
    {
        imageSrc: "/images/course/course.png", // your image path
        title: "Mobile (Flutter)",
      subtitle: "Development",
      description: "Create cross-platform mobile apps with Flutter or native iOS apps using Flutter and Dart.",
      link: "/curriculum/data-analytics",
    },
    {
        imageSrc: "/images/course/course.png", // your image path
        title: "Marketing",
        subtitle: "",
        description: "Learn the building blocks of campaigns and analytics",
        link: "/curriculum/web-development",
      },
      {
          imageSrc: "/images/course/course.png", // your image path
      title: "Web",
        subtitle: "Development",
        description: "Build websites and web apps using HTML, CSS, JavaScript, and modern frameworks.",
        link: "/curriculum/ui-ux",
      },
      {
          imageSrc: "/images/course/course.png", // your image path
          title: "Mobile (Flutter)",
        subtitle: "Development",
        description: "Create cross-platform mobile apps with Flutter or native iOS apps using Flutter and Dart.",
        link: "/curriculum/data-analytics",
      },
  ];
  
  const afrogarmImages = [
    {
      img: "/svgs/afrogarm_sliders/slide_1.jpg",
    },
    {
      img: "/svgs/afrogarm_sliders/slide_2.jpg",
    },
    {
      img: "/svgs/afrogarm_sliders/slide_6.jpeg",
    },
    {
      img: "/svgs/afrogarm_sliders/slide_4.jpg",
    },
  ]

  const [isPlaying, setIsplaying] = useState(false);



  const formatDate = (timestamp: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    };
    return new Date(timestamp).toLocaleDateString('en-GB', options);
  };

  return (
    <><div className="text-white max-w-[85rem]">
          <Sidebar tbList={menuItems} />

          <TitleSection
              title="Welcome to Voltis Labs Academy"
              subTitle="Your Gateway to Authentic African Fashion"
              secondaryText="Published on Monday 17th February, 2025"
              containerStyle="mb-[2.8rem] hidden md:block" />
          {/* <InfiniteMarqueeSlider/> */}
          <section className="image-section hidden md:block mb-[4.2rem] md:px-[4rem] lg:px-[10rem] xl:px-[16rem] px-[2rem] ">
              <div
                  onMouseEnter={() => setIsplaying(true)}
                  onMouseLeave={() => setIsplaying(false)}
                  onClick={() => setIsplaying(!isPlaying)}
                  className="slider-statement z-10 cursor-default relative"
              >
                  <Marquee
                      className="slider-statement z-20 cursor-default bg-carpet-green relative"
                      speed={50}
                      pauseOnHover
                      pauseOnClick
                      direction="right"
                  >
                      {afrogarmImages.map((img, index) => (
                          <div
                              key={index}
                              className="w-[20rem] mr-4 overflow-hidden rounded-[10px] md:h-[21rem] h-[23rem]"
                          >
                              <Image
                                  src={img.img}
                                  alt="afrogarmImage"
                                  className="w-full h-full object-cover object-top"
                                  width={500}
                                  height={500} />
                          </div>
                      ))}
                  </Marquee>
              </div>
          </section>
          <div className="hidden md:flex h-full  md:p-7 p-2 flex justify-center items-center">
              <LearnMoreBtn
                  text="Visit Homepage"
                  borderColor="border-white"
                  textColor="text-white"
                  route="http://www.afrogarm.com" />
          </div>
          <section className="hero-section md:hidden block mb-9">
              <SliderBackground
                  containerStyle="bg-black w-full"
                  imagesArray={afrogarmImages}
                  titleText="Welcome to Afrogarm"
                  afrogarm
                  route="https://www.afrogarm.com"
                  smallBtnText="Visit Afrogarm" />
          </section>

          <div className="mb-16 mx-auto max-w-[45rem] px-[1.4rem] md:px-0">
              <div className="flex-container mb-8">
                  <div id="firstSection" className="text-section mt-1">
                      <h1 className={`${sectionTitleClassName}`}>What is VL Academy</h1>
                      <span className={`${paragrapghClassName} mb-6`}>
                          Voltis Labs Academy is a hands-on learning and internship hub for aspiring tech talent — a place where education meets execution. We provide a space for students, career switchers, and young professionals to learn real-world skills, build portfolio-worthy projects, and work alongside industry mentors on active Voltis Labs products.
                          Unlike traditional education, our academy blends open learning, on-the-job training, and creative freedom.
                      </span>
                  </div>
              </div>

          </div>
      </div><div className="border-white border-[1px] w-full mb-6"></div>
      <div className="mx-auto px-[0.4rem] md:px-[4.4rem] mb-16 flex flex-col items-center">
  <h2 className="text-2xl text-white font-semibold mb-6 self-start">Explore Career Paths</h2>
  <div className="flex gap-6 flex-wrap justify-center">
      {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
      ))}
  </div>
</div>
</>
  );
}

export default Academy;
