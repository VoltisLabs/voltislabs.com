import { useRef } from "react";
import CourseCard from "../course/CourseCard";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function CustomCourseSlider({ courses }: { courses: any }) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = sliderRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth / 1.2;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full px-1 mb-16">
      <h2 className="text-2xl text-white font-semibold mb-6">Explore Career Paths</h2>

      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto scroll-smooth no-scrollbar"
      >
        {courses.map((course: any, index: number) => (
          <div
            key={index}
            className="flex-shrink-0 px-2 w-[85%] sm:w-[50%] md:w-[37.33%]"
          >
            <CourseCard {...course} />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="flex justify-between items-center mt-4 px-2">
        <button
          onClick={() => scroll("left")}
          className="bg-white text-black p-2 rounded-full hover:bg-gray-300"
        >
          <FiArrowLeft size={20} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="bg-white text-black p-2 rounded-full hover:bg-gray-300"
        >
          <FiArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default CustomCourseSlider;
