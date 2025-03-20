"use client";

import React, { useState } from "react";
import {
  forBuyers,
  forSellers,
  outfeatz,
  prelura,
  secondaryTitleClassName,
  trustedCommunity,
} from "../data";
import { motion } from "framer-motion";
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
    { name: "About Outfeatz", route: "outfeatz-home", Icon: "" },
    { name: "How It Works", route: "prelura-more", Icon: "" },
    // { name: "Why Choose Prelura?", route: "prelura-vision", Icon: "" },
    // { name: "Prelura For Sellers", route: "prelura-sellers", Icon: "" },
    // { name: "Prelura For Buyers", route: "prelura-buyer", Icon: "" },
    // { name: "FAQs & Help Center", route: "prelura-more", Icon: "" },
  ];




  const [isPlaying, setIsplaying] = useState(false);

  return (
    <div id="Outfeatz-home" className="">
      <Sidebar tbList={menuItems} />

      <section id="outfeatz-home md:block hidden">
        <TitleSection
          title=" Outfeatz – Curate Your Style, Your Way"
          subTitle="Turn Your Outfits into Stunning Digital Galleries"
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
            {outfeatz.map((img, index) => (
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
    text={` Visit website`}
    borderColor="border-white"
    textColor="text-white"
    route="https://outfeatz.com"
  />
</div>

      <section className="mobile-slider hero-section mb-7 md:hidden block">
        <SliderBackground
          containerStyle=" w-full"
          imagesArray={outfeatz}
          titleText="A New Home for Your Fashion Finds"
          smallBtnText="Visit Website"
        />
      </section>

      <div
        id="prelura-more"
        className="mb-16 mx-auto max-w-[45rem] px-[1.4rem] md:px-0"
      >
        <section className="text-white mb-8">
          <h1 className={titleClassName}>
          Outfeatz – Curate Your Style, Your Way
          </h1>
          <span className={paragrapghClassName}>
          Your fashion deserves a spotlight. Outfeatz is a revolutionary app
          designed for fashion lovers, influencers, stylists, photographers,
          and anyone who wants to organise, showcase, and plan outfits
          effortlessly. With one tap, Outfeatz automatically removes backgrounds
          from your outfit photos, giving you clean, professional cut-outs.
          From there, you can create custom galleries, categorise your looks,
          and even save them to your account for easy access – all from your
          phone.
          </span>{" "}
          <br />
        </section>

        <section id="prelura-more" className="text-white mb-8">
          <h1 className={secondaryTitleClassName}> How It Works</h1>

          <div className="flex flex-col gap-8">
          <div>
            <h3 className="font-semibold  ">Upload Your Outfit</h3>
            <p>
              Choose any photo of yourself in an outfit you love. Outfeatz
              automatically removes the background, leaving you with a clean,
              professional cut-out.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Curate Your Gallery</h3>
            <p>
              Create and organise multiple custom galleries to keep track of
              your best outfits. Name them however you like – categorise by
              style, season, or occasion.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Save & Sync to Your Account</h3>
            <p>
              Want to keep your galleries safe? Create an account to save and
              access them anytime.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Share & Inspire</h3>
            <p>
              Your curated looks can be saved, shared, or even used to plan
              future outfits. Build your perfect wardrobe digitally with ease.
            </p>
          </div>
        </div>
        <br />
        </section>


        <section className="text-white mb-8">
  <motion.h2
    className={secondaryTitleClassName}
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    Showcase Your Style
  </motion.h2>
  <motion.div
    className="flex flex-row gap-4 mt-6"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay: 0.2 }}
  >
    {/* First Image */}
    <motion.div
      className="w-1/2 rounded-lg overflow-hidden"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Image
        src="/image/phone-1.png"
        alt="Showcase Image 1"
        className="w-full h-full object-contain"
        width={500}
        height={500}
      />
    </motion.div>

    {/* Second Image */}
    <motion.div
      className="w-1/2 rounded-lg overflow-hidden"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      <Image
        src="/image/iphone-3.png"
        alt="Showcase Image 2"
        className="w-full h-full object-contain"
        width={500}
        height={500}
      />
    </motion.div>
  </motion.div>
</section>


        <section id="prelura-vision text-white mb-8" className="">
          <h1 className={secondaryTitleClassName}>Who Is Outfeatz For?</h1>
          <br />
          <div className="flex-section flex items-start gap-3 justify-between w-full">
            <div className="text-section">
             
            <div className="flex text-white mb-8 flex-col gap-8">
          <div>
            <h3 className="font-semibold ">
              Fashion Lovers & Outfit Planners
            </h3>
            <ul className="list-disc pl-5">
              <li>
                Build a visual wardrobe and plan your outfits for upcoming
                events.
              </li>
              <li>
                Experiment with different styles without digging through your
                wardrobe.
              </li>
              <li>
                Keep track of your best looks and avoid outfit repetition.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold ">
              Influencers & Content Creators
            </h3>
            <ul className="list-disc pl-5">
              <li>
                Easily curate outfit collections for social media posts,
                campaigns, or collaborations.
              </li>
              <li>
                Maintain a digital archive of your past fashion looks for
                inspiration.
              </li>
              <li>
                Share cut-out outfits without distractions from background
                clutter.
              </li>
            </ul>
          </div>
          <div>
            <span className="font-semibold">
              Stylists & Fashion Professionals
            </span>
            <ul className="list-disc pl-5">
              <li>
                Organise and showcase outfits for clients in a structured
                gallery format.
              </li>
              <li>
                Present mood boards and style ideas with clean cut-out visuals.
              </li>
              <li>
                Streamline fashion planning for photoshoots, shows, or
                consultations.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold  mb-2">
              Photographers & Creative Directors
            </h3>
            <ul className="list-disc pl-5">
              <li>
                Instantly remove backgrounds from outfit shots for a polished,
                professional look.
              </li>
              <li>
                Create high-quality fashion catalogues without intensive
                post-production edits.
              </li>
              <li>
                Use Outfeatz as a tool for fashion, portrait, or editorial
                photography projects.
              </li>
            </ul>
          </div>
        </div>
            </div>
          </div>
        </section>

        <section className="text-white mb-8">
        <h2 className={secondaryTitleClassName}>
          Why Outfeatz?
        </h2>
        <ul className="list-disc mt-4 pl-5">
          <li>Instant Background Removal – No more messy backgrounds.</li>
          <li>Create & Customise Galleries – Organise your fashion moments effortlessly.</li>
          <li>Account Syncing – Save your curated collections securely.</li>
          <li>Fast, Seamless, and Fun – No design skills required.</li>
        </ul>
      </section>

      <section className="text-white mb-8">
        <h2 className={secondaryTitleClassName}>
          The Future of Digital Fashion Starts Here
        </h2>
        <p className="mt-4">
          Outfeatz is more than an app – it is a fashion tool that helps you
          stay organised, creative, and inspired. Whether you are planning your
          next outfit, curating looks for social media, or building a
          professional fashion portfolio, Outfeatz gives you full control over
          how you document and present your style.
        </p>
        <p className="mt-4">
          Start curating your outfits with Outfeatz today.
        </p>
      </section>


        

      
      </div>
    </div>
  );
}

export default page;
