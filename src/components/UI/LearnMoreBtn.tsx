"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LearnMoreProps {
  text: string;
  borderColor: string;
  textColor: string;
  route?: string;
  arrowSrc?: string;
}

const LearnMoreBtn = ({
  text,
  borderColor,
  textColor,
  route,
  arrowSrc,
}: LearnMoreProps) => {
  const href = route ?? "/";
  const external = href.startsWith("http");
  const resolvedArrowSrc = arrowSrc ?? (textColor.includes("white") ? "/icons/arrow.svg" : "/icons/arrow-brown.svg");
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`item-container inline-flex h-auto w-max max-w-full cursor-pointer flex-nowrap items-center justify-center gap-2 whitespace-nowrap rounded-full border border-solid px-3 py-2 leading-snug ${borderColor}`}
    >
      <span
        className={`shrink-0 font-semibold tracking-wide ${textColor} text-[.68rem] leading-snug md:text-[.72rem]`}
      >
        {text}
      </span>
      <Image
        src={resolvedArrowSrc}
        alt=""
        width={18}
        height={18}
        className="h-[18px] w-[18px] shrink-0"
      />
    </Link>
  );
};

export default LearnMoreBtn;
