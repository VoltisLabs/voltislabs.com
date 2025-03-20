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

const SmallLearnBtn = ({
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
      className={`item-container cursor-pointer flex items-center gap-2 h-[1.6rem] p-1 py-2 border-solid ${borderColor} border-[1px] p-2 rounded-[4px]`}
    >
      <span className={`block ${textColor} md:text-[.8rem] text-[.8rem]`}>
        {text}
      </span>
      <Image src={"/icons/arrow.svg"} alt="arrow-icon" width={12} height={12} />
    </Link>
  );
};

export default SmallLearnBtn;
