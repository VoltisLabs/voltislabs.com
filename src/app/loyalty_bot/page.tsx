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

function page() {
  const menuItems = [
    { name: "About Loyalty", route: "loyalty-home", Icon: "" },
    { name: "Workspace", route: "loyalty-workspace", Icon: "" },
    { name: "Lightweight", route: "loyalty-lightweight", Icon: "" },
    { name: "Key features", route: "loyalty-features", Icon: "" },
    { name: "How It Works", route: "loaylty-more", Icon: "" },
  ];

  const [isPlaying, setIsplaying] = useState(false);

  return (
    <div id="loyalty-home" className="">
      <Sidebar tbList={menuItems} />
      <div className=" md:px-[4rem] lg:px-[10rem] xl:px-[16rem] px-[20px] bg-[#1a2081] pb-10 flex-col flex">
        <HeroSection />
        <Button />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <Button />

      </div>
    </div>
  );
}

export default page;
