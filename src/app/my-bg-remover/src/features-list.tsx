"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Contents() {
  const [isOpen, setIsOpen] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const handleDrag = useCallback((clientX: number) => {
    if (!sliderRef.current) return;

    const container = sliderRef.current.getBoundingClientRect();
    let newPosition = ((clientX - container.left) / container.width) * 100;
    newPosition = Math.max(0, Math.min(100, newPosition));

    setSliderPosition((prev) => (prev !== newPosition ? newPosition : prev));
  }, []);

  useEffect(() => {
    if (!isDragging) return;

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      handleDrag(clientX);
    };

    const stopDragging = () => setIsDragging(false);

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseup", stopDragging);
    document.addEventListener("touchmove", handleMove, { passive: false });
    document.addEventListener("touchend", stopDragging);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", stopDragging);
      document.removeEventListener("touchmove", handleMove);
      document.removeEventListener("touchend", stopDragging);
    };
  }, [isDragging, handleDrag]);

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <header className="text-center py-16">
        <h1 className="text-4xl font-bold">Remove Your Images Background</h1>

        <div className="mt-6 flex flex-col sm:flex-row items-center sm:justify-center h-auto space-y-6 sm:space-y-0 sm:space-x-8">
          {[
            {
              img: "/image-upload.svg",
              title: "Remove background instantly!",
              text: "With our free online background remover, it takes just 5 seconds to have your image background free.",
            },
            {
              img: "/chrome.svg",
              title: "Automatic and free bg removal",
              text: "Our background remover removes background from images automatically and for free.",
            },
            {
              img: "/file-heart.svg",
              title: "Download or keep editing",
              text: "Done erasing the background? You can download your file as a transparent PNG or enhance it further.",
            },
          ].map(({ img, title, text }, index) => (
            <div
              key={index}
              className="p-4 bg-[#181717] rounded-lg shadow-md w-64 text-center flex flex-col items-center"
            >
              <Image src={img} alt={title} width={25} height={25} className="mb-2" />
              <h2 className="text-lg font-semibold mt-2">{title}</h2>
              <p className="text-sm text-gray-200 mt-1">{text}</p>
            </div>
          ))}
        </div>
      </header>

      {/* Image Dragging Section */}
      <section className="relative max-w-[85rem] flex justify-center items-center py-12 mx-5 md:mx-auto max-w-6xl">
        {/* Draggable Chevron Handle */}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 flex items-center justify-center w-14 h-14 bg-gray-900/80 text-white rounded-full shadow-lg cursor-grab active:cursor-grabbing transition-transform duration-100 z-30 border border-2xl"
          style={{ left: `calc(${sliderPosition}% - 30px)` }}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
        >
          <ChevronLeft size={25} className="mr-1" />
          <ChevronRight size={25} className="ml-1" />
        </div>

        {/* Image Slider */}
        <div
          ref={sliderRef}
          className="relative w-full h-[500px] shadow-lg overflow-hidden flex rounded-3xl"
          onTouchMove={(e) => {
            if (isDragging) {
              handleDrag(e.touches[0].clientX);
            }
          }}
          onTouchEnd={() => setIsDragging(false)}
        >
          {/* Before Image */}
          <Image
            src="/right.jpg"
            alt="Before"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 w-full h-full"
          />

          {/* After Image */}
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
            <Image
              src="/left.jpg"
              alt="After"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 w-full h-full"
            />
          </div>

          {/* Labels */}
          <span className="absolute bottom-4 left-4 bg-black text-white text-sm px-3 py-1 rounded">
            Before
          </span>
          <span className="absolute bottom-4 right-4 bg-black text-white text-sm px-3 py-1 rounded">
            After
          </span>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="py-16 max-w-5xl mx-auto space-y-12 px-4">
        {[
          {
            img: "/unleash-min.png",
            title: "The only background remover tool you’ll ever need",
            text: "With Creative Fabrica’s online background remover or background eraser, removing the background from your photo or image has never been easier. Remove the photo background with the background remover for free and with just a few simple clicks.",
            reverse: false,
          },
          {
            img: "/where-min.png",
            title: "Achieve precise background removal",
            text: "Using Creative Fabrica's background remover or bg remover, achieve precise control over your image editing. No more jagged edges or leftover pixels when you remove background from image. The photo background remove feature ensures a clean, high-quality result.",
            reverse: true,
          },
          {
            img: "/how-min.png",
            title: "More than just background removal",
            text: "You can do so much more with a background-free image! Insert new backgrounds, create overlays, and even use your transparent PNG in animations, prints, stickers, and other creative projects.",
            reverse: false,
          },
        ].map(({ img, title, text, reverse }, index) => (
          <div
            key={index}
            className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-6 md:gap-8`}
          >
            <div className="w-full md:w-1/2">
              <Image src={img} alt={title} width={500} height={400} />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold">{title}</h2>
              <p className="text-white mt-4 text-justify">{text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Explore Other Tools Section */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold">Also explore the other creative tools in our tools suite...</h2>
        <div className="relative inline-block overflow-visible">
          <span
            onClick={() => setIsOpen(!isOpen)}
            className="mt-6 px-6 py-2 font-bold rounded-lg flex items-center gap-2 cursor-pointer"
          >
            Discover all our tools <FiChevronDown />
          </span>

          {isOpen && (
            <div className="absolute left-0 right-auto mt-2 w-56 bg-[#181717] shadow-lg rounded-lg text-left z-50">
              {["AI Background Remover", "Magic Resize", "AI Editor"].map((tool, index) => (
                <a key={index} href="#" className="block px-4 py-2 text-white hover:bg-gray-700">
                  {tool}
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
