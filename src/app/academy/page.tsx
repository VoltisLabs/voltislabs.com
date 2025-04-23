'use client';

import Subtitle from '@/src/components/UI/subtitle';
import Title from '@/src/components/UI/Title';
import React, { useEffect, useState } from 'react';
import {
  paragrapghClassName,
  secondaryTitleClassName,
  sectionTitleClassName,
  titleClassName,
} from '../data';
import Sidebar from '@/src/components/UI/SideBar';
import Image from 'next/image';
import TitleSection from '@/src/components/UI/TitleSection';
import Marquee from 'react-fast-marquee';
import SliderBackground from '@/src/components/UI/SliderBackground';
import LearnMoreBtn from '@/src/components/UI/LearnMoreBtn';
import Link from 'next/link';
import CourseCard from '@/src/components/course/CourseCard';
// _app.tsx or globals.css
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomCourseSlider from '@/src/components/common/CustomCourseSlider';

function Academy() {
  const menuItems = [
    { name: 'What is VL Academy?', route: 'vlacademy', Icon: '' },
    { name: 'Courses', route: 'courses', Icon: '' },
    
  ];

  const courses = [
    {
      imageSrc: '/images/course/course.png', // your image path
      title: 'Marketing',
      subtitle: '',
      description: 'Learn the building blocks of campaigns and analytics',
      link: '/curriculum/web-development',
    },
    {
      imageSrc: '/images/course/course.png', // your image path
      title: 'Web',
      subtitle: 'Development',
      description:
        'Build websites and web apps using HTML, CSS, JavaScript, and modern frameworks.',
      link: '/curriculum/ui-ux',
    },
    {
      imageSrc: '/images/course/course.png', // your image path
      title: 'Mobile (Flutter)',
      subtitle: 'Development',
      description:
        'Create cross-platform mobile apps with Flutter or native iOS apps using Flutter and Dart.',
      link: '/curriculum/data-analytics',
    },
    {
      imageSrc: '/images/course/course.png', // your image path
      title: 'Marketing',
      subtitle: '',
      description: 'Learn the building blocks of campaigns and analytics',
      link: '/curriculum/web-development',
    },
    {
      imageSrc: '/images/course/course.png', // your image path
      title: 'Web',
      subtitle: 'Development',
      description:
        'Build websites and web apps using HTML, CSS, JavaScript, and modern frameworks.',
      link: '/curriculum/ui-ux',
    },
    {
      imageSrc: '/images/course/course.png', // your image path
      title: 'Mobile (Flutter)',
      subtitle: 'Development',
      description:
        'Create cross-platform mobile apps with Flutter or native iOS apps using Flutter and Dart.',
      link: '/curriculum/data-analytics',
    },
  ];

  const afrogarmImages = [
    {
      img: '/svgs/academy/slide1.jpg',
    },
    {
      img: '/svgs/academy/slide2.jpg',
    },
    {
      img: '/svgs/academy/slide3.jpg',
    },
    {
      img: '/svgs/academy/slide4.jpg',
    },
    {
      img: '/svgs/academy/slide5.jpg',
    },
  ];

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
    <div className="mx-auto max-w-[85rem]">
      <div className="max-w-[85rem] text-white">
        <Sidebar tbList={menuItems} />

        <TitleSection
          title="Welcome to Voltis Labs Academy"
          subTitle="Gain real world experience and master  digital skills through immersive internships"
          secondaryText="Published on Monday 18th April, 2025"
          containerStyle="mb-[2.8rem] hidden md:block"
        />
        {/* <InfiniteMarqueeSlider/> */}
        <section className="image-section mb-[4.2rem] hidden px-[2rem] md:block md:px-[4rem] lg:px-[10rem] xl:px-[16rem]">
          <div
            onMouseEnter={() => setIsplaying(true)}
            onMouseLeave={() => setIsplaying(false)}
            onClick={() => setIsplaying(!isPlaying)}
            className="slider-statement relative z-10 cursor-default"
          >
            <Marquee
              className="slider-statement bg-carpet-green relative z-20 cursor-default"
              speed={50}
              pauseOnHover
              pauseOnClick
              direction="right"
            >
              {afrogarmImages.map((img, index) => (
                <div
                  key={index}
                  className="mr-4 h-[23rem] w-[20rem] overflow-hidden rounded-[10px] md:h-[21rem]"
                >
                  <Image
                    src={img.img}
                    alt="afrogarmImage"
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
            text="Visit Homepage"
            borderColor="border-white"
            textColor="text-white"
            route="https://academy.voltislabs.com"
          />
        </div>
        <section className="hero-section mb-9 block md:hidden">
          <SliderBackground
            containerStyle="bg-black w-full"
            imagesArray={afrogarmImages}
            titleText="Welcome to VL Academy"
            route="https://academy.voltislabs.com"
            smallBtnText="Visit Homepage"
          />
        </section>

        <div className="text-justify mx-auto mb-16 max-w-[45rem] px-[1rem] md:px-0">
          <div className="flex-container mb-8">
            <div id="vlacademy" className="text-section mt-1">
              <h1 className={`mb-2 text-[30px] font-bold`}>What is Voltis Labs Academy?</h1>
              <span className={`${paragrapghClassName} mb-6`}>
                Voltis Labs Academy is a mission-driven, hands-on learning and internship hub built
                for the doers, dreamers, and disruptors of tomorrow’s tech world. Designed to close
                the opportunity gap in tech education, our Academy empowers aspiring developers,
                designers, and digital creators - especially those from underrepresented or
                underserved backgrounds - to learn by doing, create with purpose, and grow through
                real-world experiences.
              </span>
              <span className={`${paragrapghClassName} mb-6`}>
                At its core, Voltis Labs Academy is where education meets execution. We are not a
                bootcamp. We are not a school. We are an ecosystem - a place where ambition is met
                with mentorship, where raw potential is refined through real projects, and where
                learning happens by doing, building, failing, and trying again.
              </span>
              <span className={`${paragrapghClassName} mb-6`}>
                We believe that talent is everywhere, but opportunity is not. That’s why Voltis Labs
                Academy offers paid, project-based courses and internships to ambitious adults who
                may not have access to traditional tech pathways. Whether you're a student, a career
                switcher, or a self-taught coder looking for direction, we provide a space where
                your potential can be seen, nurtured, and developed.
              </span>
            </div>
          </div>
          <div className="mb-6 max-w-[45rem] border-[1px] border-white"></div>
          <div id='courses' className="mb-16 w-full px-[1.9rem] md:px-[1rem]">
            <CustomCourseSlider courses={courses} />
          </div>
          <div id="thirdSection" className="mb- font-normal">
            <h1 className='mb-2 text-[30px] font-bold'>Where Learning Meets Execution</h1>
            <span className={paragrapghClassName}>
              <span>
                Unlike conventional classrooms, VL Academy is built on action. Our approach blends:
              </span>
              <ul className="mt-2 list-disc pl-4">
                <li>
                  <span className={paragrapghClassName}>
                    Intensive, instructor-led courses that teach in-demand tech skills like software
                    development, UI/UX design, product management, and more.
                  </span>
                </li>

                <li>
                  <span className={paragrapghClassName}>
                    Mentorship from industry professionals, including developers, product leads, and
                    designers currently working at Voltis Labs and partner companies.
                  </span>
                </li>
                <li>
                  <span className={paragrapghClassName}>
                    Real-time collaboration on active Voltis Labs products, allowing participants to
                    contribute to real-world projects, not just simulations.
                  </span>
                </li>
                <li>
                  <span className={paragrapghClassName}>
                    Portfolio development, with each graduate leaving the program with tangible
                    proof of their skills and experience
                  </span>
                </li>
              </ul>
            </span>
            <br />
          </div>

          <div id="firstSection" className="text-section ">
            <h1 className={`mb-2 text-[30px] font-bold`}>A Different Kind of Tech Education</h1>
            <span className={`${paragrapghClassName} mb-6`}>
              We're not just teaching how to code - we’re teaching how to think, build, and ship. VL
              Academy’s curriculum is designed to reflect the real pace and challenges of startup
              and industry life. Learners work in cross-functional teams, solve problems creatively,
              and learn the art of collaboration and innovation - all while being paid for their
              time and effort..
            </span>
          </div>

          <div id="firstSection" className="text-section mt-1">
            <h1 className={`mb-2 text-[30px] font-bold`}>Creating Pathways, Not Just Programs</h1>
            <span className={`${paragrapghClassName} mb-6`}>
              Voltis Labs Academy isn’t a one-size-fits-all bootcamp. We’re a growing community of
              learners and makers who believe in inclusive innovation and the power of hands-on
              learning. By offering financially accessible, paid learning opportunities, we help
              remove barriers and open doors -particularly for people who may not have access to
              expensive courses, elite networks, or traditional credentials. Every part of the
              Academy is designed to be transformational, not transactional. We invest in our
              learners because we believe talent is everywhere, but opportunity is not. By offering
              paid programs, we aim to make the experience both sustainable and equitable - so that
              no promising learner has to choose between growth and income.
            </span>
          </div>

          <div id="firstSection" className="text-section mt-1">
            <h1 className={`mb-2 text-[30px] font-bold`}>Courses we offer:</h1>
            <span className={`${paragrapghClassName} mb-6`}>
              We offer a growing catalog of paid courses, tailored to high-potential individuals
              looking to level up their skills and build a meaningful career. Our current programs
              include:
            </span>
            <span className={`${paragrapghClassName} mb-6`}>
              <ul className="mt-2 list-disc pl-4">
                <li>
                  <span className={paragrapghClassName}>
                    <span className={sectionTitleClassName}>Software Development –</span> Designed for beginners
                    and intermediate learners alike, our courses cover essential programming
                    concepts in Python, JavaScript, HTML/CSS, and more.
                  </span>
                </li>

                <li>
                  <span className={paragrapghClassName}>
                    <span className={sectionTitleClassName}>Coding Fundamentals & Programming –</span> Designed
                    for beginners and intermediate learners alike, our courses cover essential
                    programming concepts in Python, JavaScript, HTML/CSS, and more.
                  </span>
                </li>
                <li>
                  <span className={paragrapghClassName}>
                    <span className={sectionTitleClassName}>Marketing & Digital Strategy –</span> Learn how to
                    plan, execute, and analyze marketing campaigns that drive growth, brand
                    awareness, and customer engagement.
                  </span>
                </li>
                <li>
                  <span className={paragrapghClassName}>
                    <span className={sectionTitleClassName}>Social Media Strategy –</span> Explore the
                    platforms, tools, and techniques behind impactful social content, including
                    audience targeting, content planning, and growth metrics
                  </span>
                </li>
                <li>
                  <span className={paragrapghClassName}>
                    <span className={sectionTitleClassName}>Data Analysis –</span> Dive into data-driven
                    decision-making with training in Excel, SQL, Python for data, dashboards, and
                    visualization tools like Tableau or Power BI.
                  </span>
                </li>
                <li>
                  <span className={paragrapghClassName}>
                    <span className={sectionTitleClassName}>Machine Learning & AI –</span> For those ready to go
                    deeper, we offer an intro to machine learning fundamentals, from model training
                    to data preprocessing and predictive analytics.
                  </span>
                </li>
              </ul>
              <span>And we’re just getting started</span>
            </span>

            <span className={`${paragrapghClassName} mb-6`}>
              At Voltis Labs Academy, we’re constantly growing our course library to meet the
              evolving needs of the tech industry — and our learners. Have a specific skill set or
              field you want to explore? We’re open to special requests, and we’re actively building
              custom tracks based on community interest. Our goal is to stay flexible, inclusive,
              and aligned with what actually matters in today’s job market.
            </span>
            <span className={`${paragrapghClassName} mb-6`}>
              Every learner at VL Academy is treated as a creator, not just a student. From day one,
              you’re not just preparing for the future — you're already building it. We provide:
            </span>

            <span className={`${paragrapghClassName} mb-6`}>
              <ul className="mt-2 list-disc pl-4">
                <li>
                  <span className={paragrapghClassName}>
                    Real project experience for your portfolio
                  </span>
                </li>

                <li>
                  <span className={paragrapghClassName}>
                    Mentorship from industry professionals
                  </span>
                </li>
                <li>
                  <span className={paragrapghClassName}>Paid opportunities during training</span>
                </li>
                <li>
                  <span className={paragrapghClassName}>
                    A diverse, collaborative, and empowering community
                  </span>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Academy;
