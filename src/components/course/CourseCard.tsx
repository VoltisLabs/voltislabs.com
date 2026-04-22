import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

type CourseCardProps = {
  imageSrc: string;
  title: string;
  subtitle?: string;
  description: string;
  link: string;
};

const CourseCard: React.FC<CourseCardProps> = ({
  imageSrc,
  title,
  subtitle,
  description,
  link,
}) => {
  return (
    <div className="bg-[#141414] text-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition w-full max-w-sm flex flex-col h-[420px]">
      {/* Image */}
      <div className="relative w-full h-48 md:h-48">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="rounded-3xl object-cover p-3"
          sizes="(max-width: 768px) 100vw, 320px"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-4 flex-grow">
        <div className="mb-2">
          <h3 className="text-lg font-semibold leading-snug mb-2 h-[48px] overflow-hidden">
            {title}
            {subtitle && (
              <>
                <br />
                <span className="font-semibold">{subtitle}</span>
              </>
            )}
          </h3>

          <p className="text-sm text-[#D1D1D1] line-clamp-5 ">
            {description}
          </p>
        </div>

        <Link
          href={link}
          className="flex items-center text-sm text-[#919191] hover:text-white transition mt-auto"
        >
          View Curriculum <FaChevronRight className="ml-2 text-sm" />
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
