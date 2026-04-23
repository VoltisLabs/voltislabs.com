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
      className={`item-container inline-flex h-auto w-max max-w-full cursor-pointer flex-nowrap items-center gap-1.5 whitespace-nowrap rounded-full border border-solid px-2.5 py-2 leading-snug ${borderColor}`}
    >
      <span
        className={`shrink-0 font-semibold tracking-wide ${textColor} text-[.78rem] leading-snug md:text-[.82rem]`}
      >
        {text}
      </span>
      <Image src={"/icons/arrow.svg"} alt="" width={14} height={14} className="h-3.5 w-3.5 shrink-0" />
    </Link>
  );
};

export default SmallLearnBtn;
