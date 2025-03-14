import React from "react";
import { Aboutus, prelura } from "../data";
import Title from "@/src/components/UI/Title";
import Subtitle from "@/src/components/UI/subtitle";
import { paragrapghClassName, titleClassName } from "../data";
import Sidebar from "@/src/components/UI/SideBar";
import TitleSection from "@/src/components/UI/TitleSection";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import SliderBackground from "@/src/components/UI/SliderBackground";

function page() {
  const menuItems = [
    { name: "Home", route: "about-home" },
    { name: "About Us", route: "about" },
    { name: "Our Mission", route: "mission" },
    { name: "Looking Ahead", route: "looking-ahead" },
  ];

  return (
    <><section className="mobile-slider hero-section mb-7 md:hidden block">
      <SliderBackground
        containerStyle="bg-[#AB28B280] w-full"
        imagesArray={Aboutus}
        titleText="A New Home for Your Fashion Finds"
        smallBtnText="Learn More" />
    </section><div className="pt-[6rem] text-white">
        <Sidebar tbList={menuItems} />


        <div className="hero-section">
          <div id="about-home">
            <TitleSection
              title="We are Voltis Labs"
              subTitle=""
              secondaryText="Published on Monday 9th February, 2025"
              containerStyle="mb-6" />
          </div>

          <section className="image-section hidden md:block mb-[4.2rem] md:px-[4rem] lg:px-[10rem] xl:px-[16rem] px-[2rem] ">
            <div
              // onMouseEnter={() => setIsplaying(true)}
              // onMouseLeave={() => setIsplaying(false)}
              // onClick={() => setIsplaying(!isPlaying)}
              className="slider-statement z-10 cursor-default relative"
            >
              <Marquee
                className="slider-statement z-20 cursor-default bg-carpet-green relative"
                speed={50}
                pauseOnHover
                pauseOnClick
                direction="right"
              >
                {Aboutus.map((img, index) => (
                  <div
                    key={index}
                    className="w-[20rem] mr-4 overflow-hidden rounded-[10px] md:h-[21rem] h-[23rem]"
                  >
                    <Image
                      src={img.img}
                      alt="reluraimg"
                      className="w-full h-full object-cover object-top"
                      width={500}
                      height={500} />
                  </div>
                ))}
              </Marquee>
            </div>
          </section>
        </div>




        <div className="mb-16 mx-auto max-w-[45rem] px-[1.4rem] md:px-0  ">
          <section id="about" className="text-white my-8 mb-20 font-normal ">
            {/**
    *
<div className="mb-16 md:px-[4rem] lg:px-[10rem] xl:px-[16rem] px-[2rem] "  >

    *  <div className="flex items-center md:justify-between justify-center gap-4 mb-10 md:flex-row flex-col  w-full">
      {Aboutus.map((img, index) => (
        <div
          key={index}
          className="w-full md:h-[38rem] h-[25rem] rounded-[9px] overflow-hidden md:w-[47.5%]"
        >
          <img
            src={img.img}
            alt="reluraimg"
            className="w-full h-full object-cover object-top"
          />
        </div>
      ))}
    </div>*/}

            <span className={`mb-5 ${paragrapghClassName}`}>
              At Voltis Labs, we <span className="font-semibold">believe </span>
              technology has the power to unlock human potential. We are a company
              built on the idea that innovation should serve a purpose—solving
              real problems, empowering creators, and shaping a more connected
              future.
            </span>
            <br />
            <br />
            <span className={`mb-5  ${paragrapghClassName}`}>
              Our journey began with a simple yet powerful belief: great ideas
              deserve the right platform to thrive. Frustrated by outdated systems
              and missed opportunities, a small group of visionaries came together
              to rethink how technology could empower individuals and businesses
              alike
            </span>
            <br />
            <br />

            <span className={paragrapghClassName}>
              The result was Voltis Labs—a place where bold ideas are turned into
              reality, where barriers are broken, and where technology serves
              people, not the other way around.
            </span>
          </section>

          <section
            id="mission"
            className="text-white my-8  mb-20 font-normal md:text-[1.1rem] text-[1rem] "
          >
            <h1 id="mission" className="font-bold text-3xl mb-8  text-white">
              Our Mission
            </h1>
            <div className="flex md:flex-row flex-col w-full gap-8">
              <div className="w-full md:w-[48.5%]">
                <span className={paragrapghClassName}>
                  We are here to build the next generation of digital
                  platforms—ones that are intuitive, scalable, and designed to
                  make life easier. Our approach is rooted in innovation, but more
                  importantly, in impact. Every product we create is built to
                  solve a problem, to simplify complexity, and to open new doors
                  for those who dare to dream big.
                </span>
                <br />
                <span id="values" className={paragrapghClassName}>
                  Our Values
                </span>
                <ul className="list-disc pl-4">
                  <li>
                    <span className={titleClassName}>
                      Empowerment Through Technology
                    </span>
                    –
                    <span className={paragrapghClassName}>
                      We believe that technology should give people more control
                      over their lives, their work, and their creativity. Every
                      solution we build is designed to help individuals and
                      businesses do more with less friction.
                    </span>
                  </li>

                  <li>
                    <span className={titleClassName}>
                      Innovation Without Limits
                    </span>
                    –
                    <span className={paragrapghClassName}>
                      The digital landscape is constantly evolving, and so are we.
                      We push boundaries, challenge the status quo, and embrace
                      the unknown in pursuit of groundbreaking solutions.
                    </span>
                  </li>
                  <li>
                    <span className={titleClassName}>
                      A People-First Approach
                    </span>
                    –
                    <span className={paragrapghClassName}>
                      Technology is only as powerful as the people who use it.
                      That’s why everything we create is built with a deep
                      understanding of real-world needs, ensuring that our
                      platforms are as intuitive as they are transformative.
                    </span>
                  </li>

                  <li>
                    <span className={titleClassName}>
                      Sustainability & Inclusion
                    </span>
                    –
                    <span className={paragrapghClassName}>
                      We don’t believe in building for a select few. Our goal is
                      to create ecosystems that are accessible, diverse, and built
                      to last.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="w-full md:w-[40%] flex justify-center md:justify-end pt-2 ">
                <img
                  src="../image/landingimg3.png"
                  alt="Icon"
                  className="w-full md:h-[35rem] h-[15rem] object-cover object-top rounded-lg" />
              </div>
            </div>
          </section>

          <section
            id="looking-ahead"
            className="text-white my-8  mb-20 font-normal md:text-[1.1rem] text-[1rem]"
          >
            <h1 id="looking-ahead" className="font-bold text-[30px] mb-8">
              Looking Ahead
            </h1>
            <span className={paragrapghClassName}>
              Voltis Labs isn’t just a tech company—it’s a movement. We are here
              to redefine what’s possible, to bridge the gap between vision and
              execution, and to create technology that truly matters. Whether it’s
              enabling new ways to work, connect, or create, we are building a
              future where digital solutions empower, rather than complicate.
            </span>
            <br />
            <span className={paragrapghClassName}>
              This is just the beginning. The future is being written now, and at
              Voltis Labs, we are here to shape it.
            </span>
          </section>
        </div>
      </div></>
  );
}

export default page;
