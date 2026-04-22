"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  return (
    <Link
      href={route ?? "/"}
      target="_blank" rel="noopener noreferrer"
      className={`item-container flex h-[2rem] w-[12rem] cursor-pointer items-center justify-center gap-2 rounded-[4px] border border-solid p-1 px-2 ${borderColor}`}
    >
      <span className={`block ${textColor} md:text-[.7rem] text-[.6rem]`}>
        {text}
      </span>
      <Image src={"/icons/arrow.svg"} alt="arrow-icon" width={20} height={20} />
    </Link>
  );
};

export default LearnMoreBtn;
