"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Contents() {
  const [isOpen, setIsOpen] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const handleDrag = (clientX: number) => {
    if (!sliderRef.current) return;

    const container = sliderRef.current.getBoundingClientRect();
    let newPosition = ((clientX - container.left) / container.width) * 100;

    newPosition = Math.max(0, Math.min(100, newPosition));

    requestAnimationFrame(() => setSliderPosition(newPosition));
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => isDragging && handleDrag(e.clientX);
    const handleTouchMove = (e: TouchEvent) => isDragging && handleDrag(e.touches[0].clientX);
    const stopDragging = () => setIsDragging(false);

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", stopDragging);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", stopDragging);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", stopDragging);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", stopDragging);
    };
  }, [isDragging]);

  return (
    <div className="bg-black text-white">

      {/* Header Section */}
      <header className="text-center py-16">
        <h1 className="text-4xl font-bold">Remove Your Images Background</h1>

        <div className="mt-6 flex justify-center h-[250px] space-x-8">

        <div className="p-4 bg-[#181717] rounded-lg shadow-md w-64 text-center flex flex-col items-center">
          <Image src="/image-upload.svg" alt="Feature 1" width={25} height={25} className="mb-2 text-white" /> 

          <h2 className="text-lg font-semibold mt-2">Remove background instantly!</h2>
          <p className="text-sm text-gray-200 mt-1">
          With our free online background remover, it takes just 5 seconds to have your image background free.
          </p>
        </div>

        <div className="p-4 bg-[#181717] text-white rounded-lg shadow-md w-64 text-center  flex flex-col items-center">
          <Image src="/chrome.svg" alt="Feature 1" width={25} height={25} className="mb-2" />
            <h2 className="text-lg font-semibold mt-2">Automatic and free bg removal</h2>
            <p className="text-sm text-gray-200 text-center mt-1">
            Our background remover removes background from images automatically and for free.
            </p>
        </div>

        <div className="p-4 bg-[#181717] rounded-lg shadow-md w-64 text-center  flex flex-col items-center">
          <Image src="/file-heart.svg" alt="Feature 1" width={25} height={25} className="mb-2" />
            <h2 className="text-lg font-semibold mt-2">Download or keep editing</h2>
            <p className="text-sm text-gray-200 text-center mt-1">
            Done erasing the background from your image with the background remover? You can either download your file as a transparent PNG, enhance it further, incorporate it into your designs.
            </p>
        </div>
        </div>
      </header>

      {/* Image Dragging Section */}
      <section className="relative max-w-[85rem] flex justify-center items-center py-12 mx-5 md:mx-auto max-w-6xl">
         {/* Draggable Chevron Handle */}
         <div
            className="absolute top-1/2 transform -translate-y-1/2 flex items-center justify-center w-14 h-14 bg-gray-900/80 text-white rounded-full shadow-lg cursor-grab active:cursor-grabbing transition-transform duration-100 z-30 botder-white border-5"
            style={{ left: `calc(${sliderPosition}% - 28px)` }}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            <ChevronLeft size={25} className="mr-1" />
            <ChevronRight size={25} className="ml-1" />
          </div>

        {/* Image Slider */}
        <div
          ref={sliderRef}
          className="relative w-full h-[500px] shadow-lg overflow-hidden flex rounded-3xl"
        >
          {/* Before Image */}
          <Image
            src="/right.jpg"
            alt="Before"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 w-full h-full"
          />

          {/* After Image (Sliding Effect) */}
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
      <section className="py-16 max-w-5xl mx-auto space-y-12">

        <div className="flex items-center space-x-8">
          <div className="w-1/2">
            <Image src="/unleash-min.png" alt="Feature 1" width={500} height={400} />

          </div>
          <div className="w-1/2">
            <h2 className="text-3xl font-bold">The only background remover tool you’ll ever need</h2>
            <p className="text-white mt-4 text-justify">
            With Creative Fabrica’s online background remover or background eraser, removing the background from your photo or image has never been easier. Remove the photo background with the background remover for free and with just a few simple clicks. No need to install or learn how to use a complicated editing tool or app – just upload your image to the bg remover and get your background-free PNG image in seconds.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-8">
          <div className="w-1/2">
            <h2 className="text-3xl font-bold">The only background remover tool you’ll ever need</h2>
            <p className="text-white mt-4 text-justify">
            Using Creative Fabrica's background remover or bg remover, achieve precise control over your image editing. No more jagged edges or leftover pixels when you remove background from image. The photo background remove feature ensures a clean, high-quality result, giving you a background-free PNG you can use anywhere. And the best part? It's all free.
            </p>
          </div>

          <div className="w-1/2">
            <Image src="/where-min.png" alt="Feature 1" width={500} height={400} />
          </div>

        </div>

        <div className="flex items-center space-x-8">
          <div className="w-1/2">
            <Image src="/how-min.png" alt="Feature 1" width={500} height={400} />
          </div>
          <div className="w-1/2">
            <h2 className="text-3xl font-bold">The only background remover tool you’ll ever need</h2>
            <p className="text-gray-200 mt-4 text-justify">
            You can do so much more with a background-free image! You’ll learn this quickly upon using the background remover or bg remover tool. After removing background from image, you can insert other backgrounds with ease, do some interesting overlays, and even feature your transparent PNG in a simple animation, art prints, sticker sets, t-shirts, and other craft projects. You can create so much more with just a single image after using the background eraser for free.
            </p>
          </div>
        </div>

      </section>

      {/* Explore Other Tools Section */}
      <section className="text-center py-16">
      <h2 className="text-3xl font-bold">
      Also explore the other creative tools in our tools suite...
    </h2>

  <div className="relative inline-block">
    {/* Dropdown Button */}
    <span
      onClick={() => setIsOpen(!isOpen)}
      className="mt-6 px-6 py-2 font-bold rounded-lg flex items-center gap-2"
    >
      Discover all our tools <FiChevronDown />
    </span>

    {/* Dropdown Menu */}
    {isOpen && (
      <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg text-left">
        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
          AI Background Remover
        </a>
        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
          Magic Resize
        </a>
        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
          AI Editor
        </a>
      </div>
    )}
  </div>
      </section>

    </div>
  );
}
