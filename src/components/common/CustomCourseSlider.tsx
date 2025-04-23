import { useRef } from "react";
import CourseCard from "../course/CourseCard";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function CustomCourseSlider({ courses }: { courses: any }) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: "left" | "right") => {
    const container = sliderRef.current;
    if (!container) return;

    const scrollAmount = 100; // smoother scroll step
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full mb-16">
      <h2 className="text-2xl text-white font-semibold mb-6 text-left">
        Explore Career Paths
      </h2>

      {/* Scroll Area */}
      <div className="relative">
        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto scroll-smooth no-scrollbar justify-start"
        >
          {courses.map((course: any, index: number) => (
            <div
              key={index}
              className="flex-shrink-0 w-[95%] sm:w-[48%] lg:w-[32%] px-1"
            >
              <CourseCard {...course} />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-4 mt-4">
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
    </div>
  );
}

export default CustomCourseSlider;
