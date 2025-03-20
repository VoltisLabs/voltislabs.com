"use client";

import Subtitle from "@/src/components/UI/subtitle";
import Title from "@/src/components/UI/Title";
import React, { useState } from "react";
import {
  constantlyInnovating,
  fragmentWork,
  keyFindings,
  lackOfDiversity,
  manyCreatives,
  paragrapghClassName,
  secondaryTitleClassName,
  sectionTitleClassName,
  slowExpensiveHiring,
  techBehind,
  titleClassName,
  unfairPayment,
  vmodelResearch,
  vmodelSolution4,
  vmodelSolution5,
  vmodelSolution6,
  vmodelSolutions,
  vmodelSolutions2,
  vmodelSolutions3,
} from "../data";
import Sidebar from "@/src/components/UI/SideBar";
import Image from "next/image";
import FlatList from "@/src/components/UI/FlatList";
import TitleSection from "@/src/components/UI/TitleSection";
import Marquee from "react-fast-marquee";
import SliderBackground from "@/src/components/UI/SliderBackground";
import InfiniteMarqueeSlider from "@/src/components/common/autoSlider";
import LearnMoreBtn from "@/src/components/UI/LearnMoreBtn";

function Vmodel() {
  const menuItems = [
    { name: "What is VModel?", route: "firstSection", Icon: "" },
    { name: "Who is VModel For?", route: "secondSection", Icon: "" },
    { name: "Why VModel?", route: "thirdSection", Icon: "" },
    { name: "How It Works", route: "firstSection", Icon: "" },
    { name: "Ideology", route: "fifthSection", Icon: "" },
    { name: "The Inspiration", route: "sixthSection", Icon: "" },
    {
      name: "Challenges Faced",
      route: "seventhSection",
      Icon: "",
    },
    {
      name: "The Research",
      route: "eighthSection",
      Icon: "",
    },
    { name: "A New Era", route: "lastSection", Icon: "" },
  ];

  const vmodelImages = [
    {
      img: "/image/vmodelslider1.jpeg",
    },
    {
      img: "/image/vmodelslider2.png",
    },
    {
      img: "/image/vmodelslider3.png",
    },
    {
      img: "/image/vmodelslider4.jpeg",
    },
  ];

  const [isPlaying, setIsplaying] = useState(false);

  return (
    <div className="text-white">
      <Sidebar tbList={menuItems} />

      <TitleSection
        title="Your creative career, your way!"
        subTitle="Exciting updates are here for VModel! Enjoy a fresh UI, AI job
          matching, real-time messaging, an enhanced portfolio, and easier
          payments. More to come soon!"
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
            {vmodelImages.map((img, index) => (
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
    route="http://vmodelapp.com"
  />
</div>
      <section className="hero-section md:hidden block mb-9">
        <SliderBackground
          containerStyle="bg-[#503C3B] w-full"
          imagesArray={vmodelImages}
          titleText="Your creative career, your way!"
          vmodel
          smallBtnText="Visit Vmodel"
        />
      </section>

      <div className="mb-16 mx-auto max-w-[45rem] px-[1.4rem] md:px-0">
        <div className="flex-container mb-8">
          <div id="firstSection" className="text-section mt-1">
            <h1 className={`${sectionTitleClassName}`}>What is VModel?</h1>
            <span className={`${paragrapghClassName} mb-6`}>
              VModel is the go-to platform for models, photographers, stylists,
              makeup artists, and brands looking to connect, collaborate, and
              create without limits. Whether you're an aspiring model trying to
              land your first gig, a seasoned photographer building your brand,
              or a creative director scouting the perfect talent for a campaign,
              VModel streamlines the process—so you can focus on what truly
              matters: your craft.
            </span>

            <span className={paragrapghClassName}>
              This isn’t just another job board. VModel is a dynamic ecosystem
              where creativity meets opportunity. It’s built for freelancers,
              professionals, and emerging talents who want to take control of
              their careers, build meaningful collaborations, and get paid
              securely for their work—all in one place.
            </span>

            <span className={`${paragrapghClassName} my-7`}>
              <span className={`${titleClassName} text-xs md:text-sm`}>
                Find Work That Matches Your Skills & Style:
              </span>
              Tired of endless searching? With VModel's intelligent job-matching
              system, you’ll discover job opportunities tailored to your
              profile, experience, and interests. Whether you’re looking for
              runway gigs, editorial shoots, brand campaigns, commercial
              projects, or artistic collaborations, our platform helps you
              connect with the right opportunities—fast.
            </span>

            <div className="section-container mb-[6.5rem]">
              <span className={`${paragrapghClassName} !font-bold`}>
                Book & Get Booked Seamlessly
              </span>

              <span className={paragrapghClassName}>
                Forget the hassle of back-and-forth emails, unverified contacts,
                and confusing contracts. VModel simplifies the booking process,
                ensuring secure, direct communication between talent and
                clients. Whether you’re a model accepting a shoot request or a
                brand hiring a team for a campaign, everything happens smoothly
                within the platform.
              </span>
            </div>
          </div>
        </div>

        <div className="mb-12 mt-[3rem]">
          <h1 className={titleClassName}>Get Paid Safely & On Time</h1>
          <span className={paragrapghClassName}>
            Say goodbye to unpaid invoices and sketchy payment processes.
            VModel's built-in secure payment system ensures that funds are held
            safely and released once the job is completed. No more chasing
            payments or worrying about getting scammed—just clear, transparent
            transactions that protect both talent and clients.
          </span>
          <br />
          <h1 className={titleClassName}>
            Create & Build Your Professional Reputation
          </h1>
          <span className={paragrapghClassName}>
            Your work should speak for itself—and on VModel, it does. Build a
            professional profile that showcases your portfolio, experience, and
            unique style. Let brands and clients see your best work at a glance,
            helping you stand out in a competitive industry.
          </span>
          <br />
          <h1 className={titleClassName}>Collaborate Without Limits</h1>
          <span className={paragrapghClassName}>
            Creativity thrives on collaboration, and VModel makes it easy to
            connect with like-minded professionals worldwide. Whether you’re a
            photographer looking for models, a stylist searching for the right
            makeup artist, or a brand assembling the perfect creative team,
            VModel’s tools help you bring your vision to life.
          </span>
        </div>

        <div id="secondSection" className="mb-8 font-normal">
          <h1 className={secondaryTitleClassName}>Who is VModel For?</h1>

          <br />
          <div className="image-container md:h-[30rem] h-[15rem] rounded-[8px] overflow-hidden">
            <Image
              src={"/image/vmodel4.jpeg"}
              alt="page-image"
              width={500}
              height={500}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <br />
          <br />

          <h1 className={titleClassName}>Models</h1>
          <span className={paragrapghClassName}>
            Break free from traditional agency constraints. Whether you're new
            to modeling or an established professional, VModel helps you get
            discovered, apply for gigs, and work with top brands on your terms.
          </span>
          <br />
          <h1 className={titleClassName}>Photographers</h1>
          <span className={paragrapghClassName}>
            No more waiting for the right connections—VModel puts you directly
            in touch with models, stylists, and brands. Whether you're shooting
            high fashion, commercial work, or personal projects, finding the
            right talent has never been easier.
          </span>
        </div>

        <div className="mb-8">
          <div className="section-container mb-6">
            <h1 className={titleClassName}>Stylists & Makeup Artists</h1>
            <span className={paragrapghClassName}>
              Your artistry deserves to be seen. VModel connects you with
              models, photographers, and brands looking for creative
              professionals to bring their vision to life. Whether it's fashion
              week, an editorial campaign, or a brand launch, VModel helps you
              land high-quality gigs.
            </span>
          </div>

          <div className="section-container">
            <h1 className={titleClassName}>Brands & Creative Directors</h1>

            <span className={paragrapghClassName}>
              Need talent for your next campaign? VModel makes scouting
              effortless. Browse profiles, review portfolios, and book
              professionals instantly—all in one secure, streamlined platform.
            </span>
          </div>
          <br />
        </div>

        <div id="thirdSection" className="mb-8 font-normal">
          <h1 className={secondaryTitleClassName}>Why VModel?</h1>

          <div className="section-container mt-4">
            <span className={titleClassName}>Empowering Creators</span>
            <span className={paragrapghClassName}>
              The creative industry has changed. Traditional agencies and
              networks no longer control who gets booked and who doesn’t. VModel
              puts the power back in your hands, giving you the tools,
              connections, and freedom to grow your career on your own terms.
            </span>
          </div>

          <span className={paragrapghClassName}>
            With the new updates, you can now add more diverse content types to
            your portfolio, including high-quality images, videos, detailed
            descriptions, and even process notes. You can organize your work
            into categories, allowing clients to easily navigate your
            expertise—whether it’s photography, design, writing, or something
            else entirely.
          </span>
          <br />

          <div className="section-container">
            <h1 className={titleClassName}>
              No Middlemen, No Delays—Just Pure Creative Collaboration
            </h1>
            <span className={paragrapghClassName}>
              We believe that creators should own their careers and keep their
              earnings. With VModel, you don’t need an agent or third-party
              negotiator to land work. You control your rates, your gigs, and
              your collaborations.
            </span>
          </div>
          <br />
          <div className="section-container">
            <h1 className={titleClassName}>A Platform That Grows With You</h1>

            <span className={paragrapghClassName}>
              Whether you’re just starting out or an industry veteran, VModel
              evolves with your career. As you gain experience and expand your
              network, the platform adapts to offer even better opportunities
              that match your skills, preferences, and goals.
            </span>
          </div>
        </div>

        <div className="mb-8">
          <h1 className={titleClassName}>
            A Global Community of Talent & Brands
          </h1>
          <span className={paragrapghClassName}>
            Creativity has no borders. VModel connects you with professionals
            worldwide, opening doors to opportunities you never imagined. Work
            with international brands, collaborate across industries, and build
            a career that transcends limitations.
          </span>
          <br />

          <div className="section-container">
            <h1 className={titleClassName}>
              Join the Future of the Creative Industry
            </h1>
            <span className={paragrapghClassName}>
              The way creators work is evolving, and VModel is at the forefront
              of this transformation. Whether you’re here to find work, hire
              talent, or build your network, we’re committed to providing a
              platform that supports and empowers you every step of the way.
            </span>
          </div>

          <br />

          <span className={paragrapghClassName}>
            Your career. Your way. Your VModel.
          </span>
        </div>

        <br />
        {/* <br /> */}

        <div id="fifthSection" className="mb-8 font-normal">
          <h1 className={secondaryTitleClassName}>
            Ideology: Redefining the Creative Industry
          </h1>

          <br />
          <div className="image-container md:h-[30rem] h-[15rem] rounded-[8px] overflow-hidden">
            <Image
              src={"/image/vmodel5.jpeg"}
              alt="page-image"
              width={500}
              height={500}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <br />
          <span className={paragrapghClassName}>
            For decades, the creative industry - spanning fashion, photography,
            styling, and content creation—has remained tightly controlled by
            traditional agencies and outdated gatekeeping systems. While the
            digital era has democratized many industries, creatives still
            struggle with limited access to opportunities, inconsistent income,
            and inefficient hiring processes. At VModel, we believe the future
            of creative work should be fair, accessible, and technology-driven.
            Our platform empowers models, photographers, stylists, and brands by
            removing unnecessary middlemen and placing control directly in the
            hands of those who create and hire.
          </span>
          <br />
          <span className={paragrapghClassName}>
            We’re not just a platform; we’re a movement designed to break
            barriers, champion fair pay, and enable creatives to build
            sustainable careers on their own terms.
          </span>

          <br />
        </div>

        <div id="sixthSection" className="sectional-page-container">
          <h1 className={secondaryTitleClassName}>
            The Inspiration: Why We Built VModel
          </h1>
          <br />
          <span className={paragrapghClassName}>
            VModel was born out of frustration with the outdated and
            exclusionary nature of the creative industry. We saw talented
            individuals unable to land jobs—not because of their skills or
            dedication, but because they lacked industry connections or the
            financial means to work with agencies.
          </span>

          <br />
          <span className={paragrapghClassName}>
            We recognized the same issues on the hiring side—businesses
            struggling to find verified, high-quality talent in an increasingly
            fast-paced digital world. Traditional agencies often create
            bottlenecks, slowing down hiring and making creative work
            unnecessarily expensive. The creative industry was long overdue for
            a digital transformation. “The world is evolving, and yet the way we
            hire and collaborate in creative industries remains stuck in the
            past. VModel is our answer to a future where talent meets
            opportunity - instantly, fairly, and without barriers.”
          </span>
        </div>
        <br />
        <br />
        <div id="seventhSection" className="section-page-container">
          <h1 className={secondaryTitleClassName}>
            The Problem: The Industry’s Biggest Challenges and How VModel Solves
            Them
          </h1>
          <br />
          <br />
          <div className="image-container md:h-[30rem] h-[15rem] rounded-[8px] overflow-hidden">
            <Image
              src={"/image/vmodel6.jpeg"}
              alt="page-image"
              width={500}
              height={500}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <br />

          <div className="text-container">
            <h1 className={titleClassName}>
              1. Lack of Accessible Opporunities for Talent
            </h1>
            {/* <br /> */}
            <span className={paragrapghClassName}>
              A report by the British Fashion Council found that 70% of aspiring
              models, photographers, and stylists struggle to find consistent
              work due to industry gatekeeping.
            </span>
            <br />

            <span className={paragrapghClassName}>
              Many creatives remain undiscovered simply because:
            </span>

            <FlatList listItems={manyCreatives} />
          </div>

          <br />

          <div className="text-section">
            <h1 className={titleClassName}>VModel’s Solution:</h1>
            <FlatList listItems={vmodelSolutions} />
          </div>

          <br />

          <div className="text-secti">
            <h1 className={titleClassName}>
              A Slow, Expensive Hiring Process for Brands
            </h1>
            <FlatList listItems={slowExpensiveHiring} />
          </div>

          <br />
          <div className="text-secti">
            <h1 className={titleClassName}>VModel’s Solution:</h1>
            <FlatList listItems={vmodelSolutions2} />
          </div>

          <br />
          <div className="text-secti">
            <h1 className={titleClassName}>
              Unfair Payment Structures and Late Payments
            </h1>
            <span className={paragrapghClassName}>
              A survey by Freelancers Union found that 71% of creatives
              experience delayed or missing payments at least once in their
              careers.
            </span>

            <br />

            <span className={paragrapghClassName}>
              The traditionally agency model often:
            </span>
            <FlatList listItems={unfairPayment} />
          </div>

          <br />

          <div className="text-section">
            <h1 className={titleClassName}>VModel's Solution:</h1>
            <FlatList listItems={vmodelSolutions3} />
          </div>
          <br />
          <div className="text-section">
            <h1 className={titleClassName}>
              4. Fragmented Work Management & Lack of Professional Tools
            </h1>
            <span className={paragrapghClassName}>
              Most creatives use multiple platforms—Instagram for exposure,
              emails for client communication, and third-party sites for
              payments. This leads to:
            </span>

            <FlatList listItems={fragmentWork} />
          </div>

          <br />

          <div className="text-section">
            <h1 className={titleClassName}>VModel's Solution:</h1>

            <FlatList listItems={vmodelSolution4} />
            <span className={paragrapghClassName}>
              “True representation starts with accessibility. VModel makes sure
              talent from every background gets seen.”
            </span>
          </div>
          <br />
          <div className="text-section">
            <h1 className={titleClassName}>
              The Shift to Digital-First Workflows
            </h1>

            <span className={paragrapghClassName}>
              A 2023 Statista report found that over 55% of creative
              professionals prefer digital platforms over traditional agencies.
              However, most existing platforms are either too broad (general
              freelancing sites) or too niche (agency-run networks).
            </span>
          </div>
          <br />
          <div className="text-section">
            <h1 className={titleClassName}>VModel's Solution:</h1>
            <FlatList listItems={vmodelSolution5} />
          </div>
          <br />
          <div className="text-section">
            <h1 className={titleClassName}>
              Lack of Diversity & Inclusivity in the Industry
            </h1>

            <span className={paragrapghClassName}>
              A 2022 report by The Fashion Spot revealed that:
            </span>

            <FlatList listItems={lackOfDiversity} />
          </div>

          <br />

          <div className="text-section">
            <h1 className={titleClassName}>VModel's Solution</h1>
            <FlatList listItems={vmodelSolution6} />
            <span className={paragrapghClassName}>
              “True representation starts with accessibility. VModel makes sure
              talent from every background gets seen
            </span>
          </div>
        </div>
        <br />
        <br />
        <div id="eighthSection" className="section-container">
          <h1 className={secondaryTitleClassName}>
            The Research Behind VModel
          </h1>
          <br />
          <div className="text-section">
            <span className={paragrapghClassName}>
              To ensure VModel meets real industry needs, we conducted extensive
              research, including:
            </span>

            <FlatList listItems={vmodelResearch} />
          </div>

          <br />

          <div className="text-section">
            <h1 className={titleClassName}>Key Findings:</h1>
            <FlatList listItems={keyFindings} />
          </div>

          <br />
          <div className="text-section">
            <h1 className={titleClassName}>Technology Behind VModel</h1>
            <span className={paragrapghClassName}>
              VModel is built for speed, scalability, and security.
            </span>
            <FlatList listItems={techBehind} />
          </div>
        </div>

        <br />
        <br />

        <div id="lastSection" className="section-container">
          <h1 className={secondaryTitleClassName}>What's Next For VModel</h1>
          <br />
          <span className={paragrapghClassName}>
            We’re constantly innovating, with upcoming features like:
          </span>
          <FlatList listItems={constantlyInnovating} />
          <br />

          <span className={paragrapghClassName}>
            VModel isn’t just a platform -{" "}
            <span className="font-bold">it’s a revolution.</span>
          </span>

          <span className={paragrapghClassName}>
            For creatives, <span className="font-bold">it’s freedom</span> to
            work on their own terms.
          </span>

          <span className={paragrapghClassName}>
            For brands, <span className="font-bold">it’s the fastest</span> way
            to find and book top-tier talent.
          </span>

          <span className={paragrapghClassName}>
            The future of creative work starts here.{" "}
            <span className="font-bold">Welcome to VModel.</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Vmodel;
