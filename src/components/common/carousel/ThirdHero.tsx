import Image from "next/image";
import React from "react";
import LearnMoreBtn from "../../UI/LearnMoreBtn";

const ThirdHero = () => {
  return (
    <section className="hero-section-container md:h-[42rem] h-[37rem] flex items-center justify-center relative overflow-hidden">
      {/* Mobile Background Image (Only visible on small screens) */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/image/hero4.jpeg"
          alt="hero-image-mobile"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Desktop Background Images (Only visible on medium and larger screens) */}
      <div className="hidden md:flex absolute inset-0">
        <div className="w-1/3 h-full relative">
          <Image
            src="/image/hero4.jpeg"
            alt="hero-image-1"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-1/3 h-full relative">
          <Image
            src="/image/hero5.jpeg"
            alt="hero-image-2"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-1/3 h-full relative">
          <Image
            src="/image/garm1.jpg"
            alt="hero-image-3"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Dark Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered Content */}
<div className="relative z-10 text-center text-white flex flex-col items-center justify-center w-full px-6">
  <div className="mx-auto mb-4">
    <svg width="100" height="100" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2324_73)">
        <rect width="500" height="500" fill="white"/>
        <path d="M384.961 208.547C384.961 246.047 384.961 302.167 384.961 376.906C384.961 382.896 383.008 387.844 379.102 391.75C374.935 395.917 369.987 398 364.258 398C358.529 398 353.581 395.917 349.414 391.75C345.508 387.844 343.555 382.896 343.555 376.906C343.555 362.062 343.555 339.797 343.555 310.109C330.273 323.391 314.779 333.938 297.07 341.75C279.362 349.562 260.482 353.469 240.43 353.469C220.117 353.469 201.107 349.562 183.398 341.75C165.69 333.938 150.195 323.391 136.914 310.109C136.914 324.953 136.914 347.219 136.914 376.906C136.914 382.896 134.961 387.844 131.055 391.75C126.888 395.917 121.94 398 116.211 398C110.482 398 105.534 395.917 101.367 391.75C97.4609 387.844 95.5078 382.896 95.5078 376.906C95.5078 339.667 95.5078 283.547 95.5078 208.547C95.5078 182.505 101.758 158.677 114.258 137.062C126.758 115.188 143.294 97.8698 163.867 85.1094C175.065 78.3385 187.044 73 199.805 69.0938C212.826 65.4479 226.367 63.625 240.43 63.625C254.232 63.625 267.643 65.4479 280.664 69.0938C293.424 73 305.404 78.3385 316.602 85.1094C337.174 97.8698 353.711 115.188 366.211 137.062C378.711 158.677 384.961 182.505 384.961 208.547ZM136.914 206.594C136.914 222.74 140.82 238.755 148.633 254.641C156.445 270.266 167.643 283.026 182.227 292.922C190.039 298.13 198.763 302.297 208.398 305.422C218.294 308.547 228.971 310.109 240.43 310.109C259.701 310.109 277.018 305.682 292.383 296.828C307.747 287.974 319.857 276.125 328.711 261.281C333.659 253.469 337.435 245.005 340.039 235.891C342.383 226.516 343.555 216.75 343.555 206.594C343.555 196.698 342.253 187.062 339.648 177.688C337.044 168.573 333.268 160.109 328.32 152.297C319.206 137.453 306.836 125.604 291.211 116.75C275.846 107.635 258.919 103.078 240.43 103.078C221.68 103.078 204.622 107.635 189.258 116.75C173.633 125.604 161.263 137.453 152.148 152.297C147.201 160.109 143.424 168.573 140.82 177.688C138.216 187.062 136.914 196.698 136.914 206.594Z" fill="black"/>
      </g>
      <defs>
        <clipPath id="clip0_2324_73">
          <rect width="500" height="500" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  </div>
  <span className="block text-center text-white md:text-[3rem] text-[1.7rem]">
    {"Rooted in Culture,\nStyled for Everyone."}
  </span>
</div>

      {/* Bottom Centered Learn More Button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <LearnMoreBtn
          text="Learn More about Afrogarm"
          borderColor="border-white"
          textColor="text-white"
          route="http://afrogarm.com"
        />
      </div>
    </section>
  );
};

export default ThirdHero;
