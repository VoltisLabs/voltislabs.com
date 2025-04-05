import React from "react";
import FifthSection from "./components/fifth_section";
import FourthSection from "./components/fourth_section";
import HeroSection from "./components/hero_section";
import SecondSection from "./components/second_section";
import ThirdSection from "./components/third_section";
import WordSlider from "./components/word_slider";
import BulletSlider from "./components/bullet_slider";

const Page = () => {
  return (
    <div className="flex flex-col max-w-[85rem] min-h-screen p-6 pb-20 gap-16 sm:p-6 font-[family-name:var(--font-inter)]  text-white overflow-hidden">
      <div className=""></div>
      <HeroSection />
      <WordSlider rotate />
      <SecondSection />
      <ThirdSection />
      <BulletSlider />
      {/* <WordSlider /> */}
      <FourthSection />
      <WordSlider />
      <FifthSection />
      <WordSlider />



    </div>
  );
};

export default Page;
