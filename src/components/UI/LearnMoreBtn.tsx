import Image from "next/image";
import React from "react";

interface LearnMoreProps {
  text: string;
  borderColor: string;
  textColor: string;
}

const LearnMoreBtn = ({ text, borderColor, textColor }: LearnMoreProps) => {
  return (
    <div
      className={`item-container flex items-center gap-2 p-1 border-solid ${borderColor} border-[1px] px-2 min-w-[9rem] h-[2rem] rounded-[4px]`}
    >
      <span className={`block ${textColor} md:text-[.8rem] text-[.6rem]`}>
        {text}
      </span>
      <Image src={"/icons/arrow.svg"} alt="arrow-icon" width={20} height={20} />
    </div>
  );
};

export default LearnMoreBtn;
