// components/CourseCard.tsx
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
type CourseCardProps = {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
};

const CourseCard: React.FC<CourseCardProps> = ({ imageSrc, title, subtitle, description, link }) => {
  return (
    <div className="bg-[#141414] cursor-pointer h-[344px] p-3 rounded-2xl overflow-hidden text-white max-w-[182px]">
      <div className="w-full h-[149px] relative">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="py-3">
        <h3 className="h-[42px] text-[20px] font-bold leading-tight">
          {title} <br />
          <span className="font-bold">{subtitle}</span>
        </h3>
        <p className="text-[14px] h-[84px] mt-2 text-white">{description}</p>
        <Link href={link} className="flex items-center gap-2 text-sm  text-[#919191] hover:underline">
          View Curriculum <span className="ml-auto"><FaChevronRight/> </span>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
