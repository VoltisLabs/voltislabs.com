"use client";

import React, { useState } from "react";
import {
  forBuyers,
  forSellers,
  prelura,
  secondaryTitleClassName,
  trustedCommunity,
} from "../data";

import Sidebar from "@/src/components/UI/SideBar";

import Button from "../../components/loyalty_bot_components/button";
import FifthSection from "../../components/loyalty_bot_components/fifth_section";
import FourthSection from "../../components/loyalty_bot_components/fourth_section";
import HeroSection from "../../components/loyalty_bot_components/hero_section";
import SecondSection from "../../components/loyalty_bot_components/second_section";
import ThirdSection from "../../components/loyalty_bot_components/third_section";
import { motion } from "framer-motion";
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function LoyaltyBotPage() {
  const menuItems = [
    { name: "About Loyalty", route: "loyalty-home", Icon: "" },
    { name: "Workspace", route: "loyalty-workspace", Icon: "" },
    { name: "Lightweight", route: "loyalty-lightweight", Icon: "" },
    { name: "Key features", route: "loyalty-features", Icon: "" },
    { name: "How It Works", route: "loaylty-more", Icon: "" },
  ];

  const [isPlaying, setIsplaying] = useState(false);

  return (
    <div id="loyalty-home" className="mx-auto w-full max-w-[85rem] bg-[#1a2081] pb-12 pt-14 text-white">
      <Sidebar tbList={menuItems} />
      <div className=" md:px-[4rem] lg:px-[10rem] xl:px-[16rem] px-[20px] bg-[#1a2081] pb-10 flex-col flex">
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <HeroSection />
        </motion.div>
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="self-center mt-16">
          <Button />
        </motion.div>
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SecondSection />
        </motion.div>
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <ThirdSection />
        </motion.div>
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <FourthSection />
        </motion.div>
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <FifthSection />
        </motion.div>
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="self-center mt-16">
          <Button />
        </motion.div>
      </div>
    </div>
  );
}

export default LoyaltyBotPage;
