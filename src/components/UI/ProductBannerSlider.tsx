"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

type BannerImage = { img: string };

interface ProductBannerSliderProps {
  images: BannerImage[];
  className?: string;
  fallbackImage?: string;
}

export default function ProductBannerSlider({
  images,
  className = "",
  fallbackImage,
}: ProductBannerSliderProps) {
  const safeImages = images.length ? images : fallbackImage ? [{ img: fallbackImage }] : [];
  const [activeSlide, setActiveSlide] = useState(0);
  const [failedSlides, setFailedSlides] = useState<Record<number, boolean>>({});
  const totalSlides = safeImages.length;
  const activeSrc =
    failedSlides[activeSlide] && fallbackImage ? fallbackImage : safeImages[activeSlide].img;

  useEffect(() => {
    if (totalSlides <= 1) return;
    const id = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 4200);
    return () => window.clearInterval(id);
  }, [totalSlides]);

  if (!totalSlides) return null;

  return (
    <div className={`w-full ${className}`}>
      <div className="w-full">
        <Image
          src={activeSrc}
          alt={`Product screenshot ${activeSlide + 1}`}
          width={1920}
          height={1080}
          className="h-auto w-full object-contain"
          sizes="(min-width: 1280px) 960px, (min-width: 768px) 88vw, 92vw"
          unoptimized
          onError={() =>
            setFailedSlides((prev) =>
              prev[activeSlide] ? prev : { ...prev, [activeSlide]: true },
            )
          }
        />
      </div>
      {totalSlides > 1 && (
        <div className="mt-5 flex items-center justify-center gap-2">
          {safeImages.map((tile, idx) => (
            <button
              key={`dot-${tile.img}-${idx}`}
              type="button"
              onClick={() => setActiveSlide(idx)}
              className={`h-2.5 w-2.5 rounded-full transition ${activeSlide === idx ? "bg-vl-brown" : "bg-vl-brown/35 hover:bg-vl-brown/55"}`}
              aria-label={`Show slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
