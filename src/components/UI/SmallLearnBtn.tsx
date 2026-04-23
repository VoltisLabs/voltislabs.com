import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LearnMoreProps {
  text: string;
  borderColor: string;
  textColor: string;
  route?: string;
}

const SmallLearnBtn = ({
  text,
  borderColor,
  textColor,
  route,
}: LearnMoreProps) => {
  const href = route ?? "/";
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`item-container flex h-auto min-h-[1.75rem] cursor-pointer items-center gap-2 rounded-full border border-solid px-2.5 py-1.5 ${borderColor}`}
    >
      <span className={`block font-semibold tracking-wide ${textColor} text-[.75rem] md:text-[.8rem]`}>
        {text}
      </span>
      <Image src={"/icons/arrow.svg"} alt="arrow-icon" width={12} height={12} />
    </Link>
  );
};

export default SmallLearnBtn;
