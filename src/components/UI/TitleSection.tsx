import React from "react";
import Title from "./Title";
import Subtitle from "./subtitle";

interface TitleProps {
  title: string;
  subTitle: string;
  secondaryText: string;
  containerStyle?: string;
  /** `light`: headings for cream / light page backgrounds (default matches legacy dark sections). */
  tone?: "dark" | "light";
}

const TitleSection = ({
  title,
  subTitle,
  secondaryText,
  containerStyle,
  tone = "dark",
}: TitleProps) => {
  const isLight = tone === "light";
  return (
    <div className={`text-center px-4 pt-20 ${containerStyle}`}>
      <Title className={isLight ? "text-vl-brown-dark" : "text-white"}>{title}</Title>
      <div
        className={`text-center px-4 sm:px-10 md:px-20 xl:px-56 mt-4 ${isLight ? "!text-vl-ink" : "!text-white"}`}
      >
        <Subtitle className={isLight ? "font-medium mb-8 text-vl-ink-muted" : "font-medium mb-8 text-white"}>
          {subTitle}
        </Subtitle>
        <Subtitle className={isLight ? "text-vl-ink-muted/90 font-normal" : "text-[#858585] font-normal"}>
          {secondaryText}
        </Subtitle>
      </div>
    </div>
  );
};

export default TitleSection;
