'use client';
import React from 'react';
import { Aboutus, prelura } from '../data';
import Title from '@/src/components/UI/Title';
import Subtitle from '@/src/components/UI/subtitle';
import { paragrapghClassName, titleClassName } from '../data';
import Sidebar from '@/src/components/UI/SideBar';
import TitleSection from '@/src/components/UI/TitleSection';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import SliderBackground from '@/src/components/UI/SliderBackground';
import LearnMoreBtn from '@/src/components/UI/LearnMoreBtn';

function page() {
  const menuItems = [
    { name: 'Home', route: 'about-home' },
    { name: 'About Us', route: 'about' },
    { name: 'Our Mission', route: 'mission' },
    { name: 'Looking Ahead', route: 'looking-ahead' },
  ];

  return (
    <div className="mx-auto max-w-[85rem]">
      <Sidebar tbList={menuItems} />

      <section id="prelura-home md:block hidden" className="max-w-[85rem]">
        <TitleSection
          title="We are Voltis Labs"
          subTitle="Where tomorrow’s tech leaders are built — one project at a time."
          secondaryText="Published on Monday 17th February, 2025"
          containerStyle="mb-4 md:block hidden"
        />
      </section>

      <section className="mb-[0.2rem] hidden px-[2rem] md:block md:px-[4rem] lg:px-[10rem] xl:px-[16rem]">
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <Marquee
            className="no-scrollbar slider-statement bg-carpet-green relative cursor-default overflow-x-scroll"
            speed={50}
            pauseOnHover
            pauseOnClick
            direction="right"
          >
            {Aboutus.map((img, index) => (
              <div
                key={index}
                className="mr-4 h-[23rem] w-[20rem] overflow-hidden rounded-[10px] md:h-[21rem]"
              >
                <Image
                  src={img.img}
                  alt="reluraimg"
                  className="h-full w-full object-cover object-top"
                  width={500}
                  height={500}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </section>
      <div className="flex hidden h-full items-center justify-center p-2 md:flex md:p-7">
        <LearnMoreBtn
          text="Visit Website"
          borderColor="border-white"
          textColor="text-white"
          route="/"
        />
      </div>
      <section className="mobile-slider hero-section mb-7 block md:hidden">
        <SliderBackground
          containerStyle="bg-[#000] w-full"
          imagesArray={Aboutus}
          titleText="We are Voltis Labs"
          smallBtnText="Learn More"
          route="/"
        />
      </section>

      <div className="mx-auto mb-16 max-w-[45rem] px-[1.4rem] md:px-0">
        <section id="about" className="my-8 mb-10 font-normal text-white">
          <span className={` ${paragrapghClassName}`}>
            At Voltis Labs, we <span className="font-semibold">believe </span>
            technology has the power to unlock human potential. We are a company built on the idea
            that innovation should serve a purpose—solving real problems, empowering creators, and
            shaping a more connected future.
          </span>

          <span className={` ${paragrapghClassName}`}>
            Our journey began with a simple yet powerful belief: great ideas deserve the right
            platform to thrive. Frustrated by outdated systems and missed opportunities, a small
            group of visionaries came together to rethink how technology could empower individuals
            and businesses alike
          </span>

          <span className={paragrapghClassName}>
            The result was Voltis Labs—a place where bold ideas are turned into reality, where
            barriers are broken, and where technology serves people, not the other way around.
          </span>
        </section>

        <section
          id="mission"
          className="my-0 mb-10 text-[1rem] font-normal text-white md:text-[1.1rem]"
        >
          <div id="mission" className="mb-3 text-3xl font-bold text-white">
            Our Mission
          </div>
          <div className="flex w-full flex-col gap-8 md:flex-row">
            <div className="w-full md:w-[48.5%]">
              <span className={paragrapghClassName}>
                We are here to build the next generation of digital platforms—ones that are
                intuitive, scalable, and designed to make life easier. Our approach is rooted in
                innovation, but more importantly, in impact. Every product we create is built to
                solve a problem, to simplify complexity, and to open new doors for those who dare to
                dream big.
              </span>
              <br />
              <span id="values" className={'text-3xl font-bold'}>
                Our Values
              </span>
              <ul className="mt-2 list-disc pl-4">
                <li>
                  <span className={titleClassName}>Empowerment Through Technology</span>

                  <span className={paragrapghClassName}>
                    We believe that technology should give people more control over their lives,
                    their work, and their creativity. Every solution we build is designed to help
                    individuals and businesses do more with less friction.
                  </span>
                </li>

                <li>
                  <span className={titleClassName}>Innovation Without Limits</span>

                  <span className={paragrapghClassName}>
                    The digital landscape is constantly evolving, and so are we. We push boundaries,
                    challenge the status quo, and embrace the unknown in pursuit of groundbreaking
                    solutions.
                  </span>
                </li>
                <li>
                  <span className={titleClassName}>A People-First Approach</span>

                  <span className={paragrapghClassName}>
                    Technology is only as powerful as the people who use it. That’s why everything
                    we create is built with a deep understanding of real-world needs, ensuring that
                    our platforms are as intuitive as they are transformative.
                  </span>
                </li>

                <li>
                  <span className={titleClassName}>Sustainability & Inclusion</span>

                  <span className={paragrapghClassName}>
                    We don’t believe in building for a select few. Our goal is to create ecosystems
                    that are accessible, diverse, and built to last.
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex w-full justify-center pt-2 md:w-[40%] md:justify-end">
              <img
                src="../image/landingimg3.png"
                alt="Icon"
                className="h-[15rem] w-full rounded-lg object-cover object-top md:h-[35rem]"
              />
            </div>
          </div>
        </section>

        <section
          id="looking-ahead"
          className="my-3 mb-10 text-[1rem] font-normal text-white md:text-[1.1rem]"
        >
          <div id="looking-ahead" className="mb-2 text-[30px] font-bold">
            Looking Ahead
          </div>
          <span className={paragrapghClassName}>
            Voltis Labs isn’t just a tech company—it’s a movement. We are here to redefine what’s
            possible, to bridge the gap between vision and execution, and to create technology that
            truly matters. Whether it’s enabling new ways to work, connect, or create, we are
            building a future where digital solutions empower, rather than complicate.
          </span>
          <span className={paragrapghClassName}>
            This is just the beginning. The future is being written now, and at Voltis Labs, we are
            here to shape it.
          </span>
        </section>
      </div>
    </div>
  );
}

export default page;
