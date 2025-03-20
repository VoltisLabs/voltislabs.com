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
      className={`item-container justify-between cursor-pointer flex items-center gap-2 p-1 border-solid ${borderColor} border-[1px] px-2 min-w-[9rem] h-[2rem] rounded-[4px]`}
    >
      <span className={`block ${textColor} md:text-[.8rem] text-[.6rem]`}>
        {text}
      </span>
      <Image src={"/icons/arrow.svg"} alt="arrow-icon" width={20} height={20} />
    </Link>
  );
};

export default LearnMoreBtn;
