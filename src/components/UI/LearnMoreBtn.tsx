"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LearnMoreProps {
  text: string;
  borderColor: string;
  textColor: string;
  route?: string;
}

const LearnMoreBtn = ({
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
      className={`item-container flex min-h-[2.25rem] w-[12rem] cursor-pointer items-center justify-center gap-2 rounded-full border border-solid px-3 py-2 ${borderColor}`}
    >
      <span className={`block font-semibold tracking-wide ${textColor} text-[.6rem] md:text-[.7rem]`}>
        {text}
      </span>
      <Image src={"/icons/arrow.svg"} alt="arrow-icon" width={20} height={20} />
    </Link>
  );
};

export default LearnMoreBtn;
