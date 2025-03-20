"use client";

import React, { useState } from "react";
import {
  forBuyers,
  forSellers,
  prelura,
  secondaryTitleClassName,
  trustedCommunity,
} from "../data";
import Image from "next/image";
import Title from "@/src/components/UI/Title";
import Subtitle from "@/src/components/UI/subtitle";
import { paragrapghClassName, titleClassName } from "../data";
import Sidebar from "@/src/components/UI/SideBar";
import FlatList from "@/src/components/UI/FlatList";
import Marquee from "react-fast-marquee";
import TitleSection from "@/src/components/UI/TitleSection";
import SliderBackground from "@/src/components/UI/SliderBackground";
import LearnMoreBtn from "@/src/components/UI/LearnMoreBtn";

function page() {
  const menuItems = [
    { name: "About Prelura", route: "prelura-home", Icon: "" },
    { name: "How It Works", route: "prelura-more", Icon: "" },
    { name: "Why Choose Prelura?", route: "prelura-vision", Icon: "" },
    { name: "Prelura For Sellers", route: "prelura-sellers", Icon: "" },
    { name: "Prelura For Buyers", route: "prelura-buyer", Icon: "" },
    { name: "FAQs & Help Center", route: "prelura-more", Icon: "" },
  ];

  const [isPlaying, setIsplaying] = useState(false);

  return (
    <div id="prelura-home" className="">
      <Sidebar tbList={menuItems} />

      <section id="prelura-home md:block hidden">
        <TitleSection
          title="Prelura: A New Era of Secondhand Fashion"
          subTitle=" Exciting updates are here for VModel! Enjoy a fresh UI, AI job
            matching, real-time messaging, an enhanced portfolio, and easier
            payments. More to come soon!"
          secondaryText="Published on Monday 17th February, 2025"
          containerStyle="mb-4 md:block hidden"
        />
      </section>

      <section className="mb-16 md:block hidden md:px-[4rem] lg:px-[10rem] xl:px-[16rem] px-[2rem] ">
        <div
          onMouseEnter={() => setIsplaying(true)}
          onMouseLeave={() => setIsplaying(false)}
          onClick={() => setIsplaying(!isPlaying)}
          className="flex items-center gap-6 md:flex-row flex-col"
        >
          <Marquee
            className="overflow-x-scroll no-scrollbar slider-statement cursor-default bg-carpet-green relative"
            speed={50}
            pauseOnHover
            pauseOnClick
            direction="right"
          >
            {prelura.map((img, index) => (
              <div
                key={index}
                className="w-[20rem] mr-4 overflow-hidden rounded-[10px] md:h-[21rem] h-[23rem]"
              >
                <Image
                  src={img.img}
                  alt="reluraimg"
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
    route="https://prelura.com"
  />
</div>
      <section className="mobile-slider hero-section mb-7 md:hidden block">
        <SliderBackground
          containerStyle="bg-[#AB28B280] w-full"
          imagesArray={prelura}
          titleText="A New Home for Your Fashion Finds"
          smallBtnText="Learn More"
        />
      </section>

      <div
        id="prelura-more"
        className="mb-16 mx-auto max-w-[45rem] px-[1.4rem] md:px-0"
      >
        <section className="text-white mb-8">
          <h1 className={titleClassName}>
            Reimagining Preloved, One Item at a Time
          </h1>
          <span className={paragrapghClassName}>
            Fashion is more than just clothing—it’s a reflection of personality,
            creativity, and individuality. But the way we consume fashion has
            changed drastically. Overproduction, impulse shopping, and
            short-lived trends have created a wasteful cycle where clothes are
            discarded faster than ever before. At Prelura, we’re flipping the
            script.
          </span>{" "}
          <br />
          <span className={`mb-2 ${paragrapghClassName}`}>
            Prelura isn’t just another resale platform. We’re redefining
            secondhand fashion by making it simpler, smarter, and more rewarding
            for both buyers and sellers. We believe in quality over quantity,
            sustainability over waste, and individuality over mass production.
          </span>
          <span className={paragrapghClassName}>
            Every piece of clothing has a story, and we’re here to help it
            continue—through new owners, new styles, and new possibilities.
          </span>
        </section>

        <section id="prelura-more" className="text-white mb-8">
          <h1 className={secondaryTitleClassName}>The Problem We're Solving</h1>

          <div className="text-section">
            <span className={titleClassName}>Fast Fashion Impact</span>
            <span className={paragrapghClassName}>
              The fashion industry produces 92 million tons of textile waste
              every year. Mass production has made clothing cheaper and more
              disposable, leading to overfilled closets and landfills packed
              with barely worn garments.
            </span>
          </div>
          <br />
          <div className="text-section">
            <span className={titleClassName}>
              Impulse Shopping & Unworn Clothing
            </span>
            <span className={paragrapghClassName}>
              The average person wears only 20% of their wardrobe regularly. The
              rest sits untouched, often forgotten until it’s time to declutter.
              But instead of tossing items away or hoarding them indefinitely,
              what if there was a better option?
            </span>
          </div>
          <br />
          <div className="text-section">
            <span className={titleClassName}>
              Challenges in the Resale Market
            </span>
            <span className={paragrapghClassName}>
              Many existing resale platforms are complicated, impersonal, and
              frustrating to navigate. Sellers struggle with slow sales,
              unreliable buyers, and pricing confusion. Buyers worry about
              product authenticity, item condition, and getting fair deals.
              Fashion should be sustainable, stylish, and accessible. That’s
              where Prelura comes in.
            </span>
          </div>
        </section>
        <br />

        <section id="prelura-vision" className="">
          <h1 className={secondaryTitleClassName}>Our Vision</h1>
          <br />
          <div className="flex-section flex items-start gap-3 justify-between w-full">
            <div className="text-section w-[45%]">
              <span className={`${paragrapghClassName} !text-justify`}>
                We see a future where second-hand fashion is the first choice. A
                future where selling your clothes is as easy as posting a photo,
                and finding unique, high-quality items feels as effortless as
                browsing your favourite store.
              </span>

              <span className={paragrapghClassName}>
                Prelura is built for people who love fashion but want a smarter,
                more sustainable way to shop and sell. We’re here to make
                resale:
              </span>
              <br />
              <div className="title-text-section md:block hidden">
                <ul className="list-disc pl-5 text-white">
                  <li>
                    <span className={`${paragrapghClassName}`}>
                      <span className="font-bold">Effortless - </span>
                      No confusing steps or unnecessary friction. Just list,
                      sell, and ship.
                    </span>
                  </li>
                  <br />
                  <li>
                    <span className={`${paragrapghClassName}`}>
                      <span className="font-bold">Enjoyable - </span>A
                      beautifully designed platform that makes buying and
                      selling feel exciting.
                    </span>
                  </li>
                  <br />
                  <li>
                    <span className={`${paragrapghClassName}`}>
                      <span className="font-bold">Empowering - </span>
                      Helping people make money from clothes they no longer
                      wear.
                    </span>
                  </li>
                  <li>
                    <span className={`${paragrapghClassName}`}>
                      <span className="font-bold">Ethical - </span>
                      Fighting fashion waste and supporting a more sustainable
                      industry.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="image-section rounded-[9px] overflow-hidden bg-yellow-300 md:h-[22rem] h-[15rem] md:w-[40%] w-[50%]">
              <Image
                src={"/image/prelura2.jpeg"}
                alt="section-image"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
        <div className="title-text-section md:hidden block">
          <ul className="list-disc pl-5 text-white">
            <li>
              <span className={`${paragrapghClassName}`}>
                <span className="font-bold">Effortless - </span>
                No confusing steps or unnecessary friction. Just list, sell, and
                ship.
              </span>
            </li>
            <br />
            <li>
              <span className={`${paragrapghClassName}`}>
                <span className="font-bold">Enjoyable - </span>A beautifully
                designed platform that makes buying and selling feel exciting.
              </span>
            </li>
            <br />
            <li>
              <span className={`${paragrapghClassName}`}>
                <span className="font-bold">Empowering - </span>
                Helping people make money from clothes they no longer wear.
              </span>
            </li>
            <li>
              <span className={`${paragrapghClassName}`}>
                <span className="font-bold">Ethical - </span>
                Fighting fashion waste and supporting a more sustainable
                industry.
              </span>
            </li>
          </ul>
        </div>
        <br />
        <br />
        <section id="prelura-sellers" className="text-white mb-8">
          <h1 className={secondaryTitleClassName}>How Prelura Works</h1>
          <br />

          <div className="text-section">
            <span className={titleClassName}>For Sellers</span>
            <FlatList listItems={forSellers} />
          </div>
          <br />
          <div id="prelura-buyer" className="text-section">
            <span className={titleClassName}>For Buyers</span>
            <FlatList listItems={forBuyers} />
          </div>

          <br />
          <br />
          <div className="image-container md:h-[30rem] h-[15rem] rounded-[8px] overflow-hidden">
            <Image
              src={"/image/prelura3.jpeg"}
              alt="page-image"
              width={500}
              height={500}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <br />

          <section id="prelura-help">
            <h1 className={secondaryTitleClassName}>
              What Sets Prelura Apart?
            </h1>

            <br />

            <div className="text-container">
              <span className={titleClassName}>Simplicity First</span>
              <span className={paragrapghClassName}>
                Unlike other platforms, we designed Prelura to feel as easy and
                enjoyable as shopping online—no unnecessary complexity, no
                frustration.
              </span>
            </div>
            <br />
            <div className="text-container">
              <span className={titleClassName}>Sustainablity at the core</span>
              <span className={paragrapghClassName}>
                We believe in circular fashion. Every purchase helps reduce
                fashion waste, giving clothes a second life instead of
                contributing to landfills
              </span>
            </div>

            <br />
            <div className="text-container">
              <span className={titleClassName}>A Trusted Community</span>
              <FlatList listItems={trustedCommunity} />
            </div>

            <br />

            <div className="text-section">
              <span className={titleClassName}>
                A Future of Conscious Fashion
              </span>
              <span className={paragrapghClassName}>
                As second-hand fashion grows, we’re shaping a world where resale
                isn’t just an afterthought—it’s the future of shopping.
              </span>
            </div>
          </section>
        </section>

        <section className="final-section ">
          <blockquote className="font-bold text-center text-white md:text-[1.4rem] text-[1rem] mx-auto md:w-[90%] w-full">
            "Clothing is a form of self-expression. Let’s express ourselves
            while making a difference." -{" "}
            <span className="text-gray-500">Voltis Labs</span>
          </blockquote>
        </section>
      </div>
    </div>
  );
}

export default page;
