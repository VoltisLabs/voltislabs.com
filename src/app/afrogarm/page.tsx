"use client";

import Subtitle from "@/src/components/UI/subtitle";
import Title from "@/src/components/UI/Title";
import React, { useState } from "react";
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

function Vmodel() {
  const menuItems = [
    { name: "What is Afrogarm?", route: "firstSection", Icon: "" },
    { name: "What makes Afrogram different?", route: "secondSection", Icon: "" },
    { name: "Why shop african fashion?", route: "thirdSection", Icon: "" },
    { name: "The afrogarm experience", route: "firstSection", Icon: "" },
    { name: "Join our community", route: "fifthSection", Icon: "" },
  ];


  const afrogarmImages = [
    {
      img: "/svgs/afrogarm_sliders/slide_1.svg",
    },
    {
      img: "/svgs/afrogarm_sliders/slide_2.svg",
    },
    {
      img: "/svgs/afrogarm_sliders/slide_6.svg",
    },
    {
      img: "/svgs/afrogarm_sliders/slide_4.svg",
    },
  ]

  const [isPlaying, setIsplaying] = useState(false);

  return (
    <div className="text-white">
      <Sidebar tbList={menuItems} />

      <TitleSection
        title="Welcome to Afrogarm"
        subTitle="Your Gateway to Authentic African Fashion"
        secondaryText="Published on Monday 17th February, 2025"
        containerStyle="mb-[2.8rem] hidden md:block"
      />
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
                  height={500}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </section>
      <div className="hidden md:flex h-full  md:p-7 p-2 flex justify-center items-center">
        <LearnMoreBtn
          text="Visit Website"
          borderColor="border-white"
          textColor="text-white"
          route="http://www.afrogarm.com"
        />
      </div>
      <section className="hero-section md:hidden block mb-9">
        <SliderBackground
          containerStyle="bg-[#503C3B] w-full"
          imagesArray={afrogarmImages}
          titleText="Your creative career, your way!"
          vmodel
          route="https://www.afrogarm.com"
          smallBtnText="Visit Vmodel"
        />
      </section>

      <div className="mb-16 mx-auto max-w-[45rem] px-[1.4rem] md:px-0">
        <div className="flex-container mb-8">
          <div id="firstSection" className="text-section mt-1">
            <h1 className={`${sectionTitleClassName}`}>What is Afrogarm?</h1>
            <span className={`${paragrapghClassName} mb-6`}>
              Afrogarm is the global marketplace where African fashion comes to life. We connect talented designers, artisans, and fashion houses from across the African continent with customers around the world, creating a seamless bridge between creativity and opportunity.
            </span>

            <span className={paragrapghClassName}>
              Through Afrogarm, authentic, high-quality garments and accessories find their way from the hands of passionate creators to the wardrobes of style-conscious individuals everyw
            </span>

            <div className="section-container mb-[6.5rem]">
              <span className={`${paragrapghClassName}`}>

                <span className={`  !font-bold`}> Our mission goes beyond commerce. </span>  We aim to celebrate Africa’s rich cultural heritage, its bold modern expressions, and its future-forward vision of fashion. Every piece you discover on Afrogarm carries a story — of craftsmanship, innovation, and identity - woven into fabric, stitched into detail, and expressed through bold colour and design.
                You may be seeking timeless traditional wear or contemporary African street style, or exclusive handmade accessories, Afrogarm offers a curated experience that honours authenticity while embracing modern style. Here, fashion is not just worn, it’s lived, celebrated, and shared with the world.

              </span>
            </div>
          </div>
        </div>

        <div id="secondSection" className="mb-12 mt-[3rem]">
          <h1 className={sectionTitleClassName}>What Makes Afrogarm Different?</h1>

          <br />
          <h1 className={titleClassName}>
            Authentic African Talent
          </h1>
          <span className={paragrapghClassName}>
            Every item is crafted or curated by African designers, telling real stories through fabric, colour, and form.
          </span>
          <br />
          <h1 className={titleClassName}>
            Curated Collections
          </h1>
          <span className={paragrapghClassName}>
            Shop handpicked collections from emerging brands, master artisans, and fashion houses that are shaping the future of African style.
          </span>
          <br />
          <h1 className={titleClassName}>
            Global Access
          </h1>
          <span className={paragrapghClassName}>
            Wherever you are, Afrogarm brings Africa’s vibrant fashion culture straight to your wardrobe.
          </span>
          <br />
          <h1 className={titleClassName}>
            Empowering Creators
          </h1>
          <span className={paragrapghClassName}>
            We believe in building lasting opportunities for African entrepreneurs by giving them a platform to reach global markets.
          </span>
          <br />

          <h1 className={titleClassName}>
            Unique, Limited Pieces
          </h1>
          <span className={paragrapghClassName}>
            Many designs you’ll find on Afrogarm are exclusive, limited edition, or handmade—perfect for those who value individuality.
          </span>
          <br />
        </div>

        <div id="thirdSection" className="mb-8 font-normal">
          <h1 className={secondaryTitleClassName}>Why Shop African Fashion?</h1>

          <br />
          <div className="image-container md:h-[30rem] h-[15rem] rounded-[8px] overflow-hidden flex w-full gap-5">
            <Image
              src={"/svgs/afrogarm_sliders/slide_3.svg"}
              alt="page-image"
              width={500}
              height={500}
              className="w-1/2 h-full object-cover object-top flex-1 rounded-xl"
            />
            <Image
              src={"/svgs/afrogarm_sliders/slide_5.svg"}
              alt="page-image"
              width={500}
              height={500}
              className="w-1/2 h-full object-cover object-top flex-1 rounded-xl"
            />
          </div>
          <br />
          <br />


          <span className={paragrapghClassName}>
            African fashion represents a dynamic blend of tradition, innovation, and self-expression. By choosing Afrogarm, you’re supporting skilled artisans, celebrating cultural diversity, and making a powerful style statement rooted in creativity and pride. Afrogarm is also part of Voltis Labs’ vision to create platforms that connect creativity and opportunity. We’re proud to champion Africa’s rising talent and share it with the world.
          </span>

          <br />
        </div>

        <div id="fourthSection" className="mb-8 font-normal">
          <h1 className={secondaryTitleClassName}>The Afrogarm Experience</h1>

          <div className="section-container mt-4">

            <span className={paragrapghClassName}>
              At Afrogarm, we are committed to providing a seamless and enjoyable shopping experience:
              <ul className="list-disc list-outside pl-4">

                <li>
                  User-Friendly Platform — Easily navigate through categories, filter preferences, and find exactly what you're looking for.
                </li>
                <li>
                  Secure Transactions — Shop with confidence knowing that your payments are protected.
                </li>
                <li>
                  Worldwide Shipping — Reliable delivery services to bring your chosen pieces from Africa to your doorstep.
                </li>
                <li>
                  Customer Support — Our dedicated team is here to assist you with any inquiries or concerns.
                </li>
              </ul>
            </span>
          </div>


        </div>

        <br />
        <br />

        <div id="fifthSection" className="section-container">
          <h1 className={secondaryTitleClassName}>Join our community</h1>
          <br />


          <span className={paragrapghClassName}>
            Become part of a growing community that celebrates African fashion and culture. Follow us on social media, share your Afrogarm looks, and stay updated on the latest trends and exclusive offers.
          </span>
        </div>

        <div className="flex justify-center w-full my-12 gap-6 items-center">
          <div className="w-fit text-center py-2.5 px-12 rounded-xl bg-[url('/svgs/insta_bg.svg')]">
            <Link href="https://www.instagram.com/afrogarm" className="">
              <p className="font-normal text-white sm:mt-0 text-lg  cursor-pointer">
                Follow us on instagram
              </p>
            </Link>
          </div>
          <div className="border-[#FFFFFF] border-[1px] w-fit text-center py-2.5 px-12 rounded-xl">
            <Link href="https://www.afrogarm.com">
              <p className="font-normal text-white sm:mt-0 text-lg  cursor-pointer">
                Visit Website
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vmodel;
