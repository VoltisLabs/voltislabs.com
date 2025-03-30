"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/slider1.jpg",
  "/slider2.jpg",
  "/slider3.jpg",
  "/slider4.jpg",
  "/slider5.jpg",
  "/slider6.jpg",
];

const TOTAL_COLUMNS = 6;

const Footer = () => {
  const [offset, setOffset] = useState(0);
  const speed = 0.5; // Adjust speed

  useEffect(() => {
    const animate = () => {
      setOffset((prev) => (prev + speed) % 350); // Reset smoothly
    };

    const interval = setInterval(animate, 16); // Approx 60FPS
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-black text-gray-200 py-8 px-4 sm:px-8 mt-2">
      <div className="relative w-full mt-16 rounded-3xl overflow-hidden h-[14rem] sm:h-[18rem] bg-[#865cff] py-3 sm:py-4">
        <div className="flex justify-center gap-2 sm:gap-6">
          {Array.from({ length: TOTAL_COLUMNS }).map((_, columnIndex) => (
            <div
              key={columnIndex}
              className="h-[300px] sm:h-[400px] w-[40%] sm:w-[260px] overflow-hidden"
              style={{
                transform: "rotate(-10deg)", // Slant the whole column
                display: "flex",
                flexDirection: "column",
                transformOrigin: "center",
                transformStyle: "preserve-3d",
              }}
            >
              <div
                style={{
                  transform: `translateY(-${offset}px)`,
                  transition: "transform 0.1s linear",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {[...Array(6)].map((_, rowIndex) => (
                  <div key={rowIndex} className="mb-1">
                    <Image
                      src={images[rowIndex % images.length]}
                      alt={`Carousel ${rowIndex}`}
                      width={320}
                      height={90}
                      className="rounded-lg shadow-lg w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Overlay Text + Button */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/70 text-white py-1.5 px-5 rounded-full flex items-center justify-center text-center gap-3 w-full max-w-[70%] sm:max-w-[40%]">
          <span className="text-xs sm:text-lg font-bold">Go beyond ordinary</span>

          <button className="bg-white text-black w-28 sm:w-auto px-3 sm:px-7 py-1.5 sm:py-3 rounded-lg text-xs sm:text-lg">
            Create for free
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
