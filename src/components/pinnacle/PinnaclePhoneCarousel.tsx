"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const AUTO_MS = 4500;

const PHONE_DIM = { width: 1280, height: 2642 } as const;

const PHONE_SLIDES = [
  {
    src: "/products/pinnacle-transfer/pinnacle-mobile-01.png",
    alt: "Pinnacle Transfer on mobile - screen 1",
    ...PHONE_DIM,
  },
  {
    src: "/products/pinnacle-transfer/pinnacle-mobile-02.png",
    alt: "Pinnacle Transfer on mobile - screen 2",
    ...PHONE_DIM,
  },
  {
    src: "/products/pinnacle-transfer/pinnacle-mobile-03.png",
    alt: "Pinnacle Transfer on mobile - screen 3",
    ...PHONE_DIM,
  },
  {
    src: "/products/pinnacle-transfer/pinnacle-mobile-04.png",
    alt: "Pinnacle Transfer on mobile - screen 4",
    ...PHONE_DIM,
  },
] as const;

function ChevronLeft({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export function PinnaclePhoneCarousel() {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const pausedRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const go = useCallback((dir: -1 | 1) => {
    setIndex((i) => (i + dir + PHONE_SLIDES.length) % PHONE_SLIDES.length);
  }, []);

  useEffect(() => {
    if (reducedMotion || PHONE_SLIDES.length <= 1) return;
    const id = window.setInterval(() => {
      if (!pausedRef.current) setIndex((i) => (i + 1) % PHONE_SLIDES.length);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [reducedMotion]);

  const first = PHONE_SLIDES[0];
  const multiSlide = PHONE_SLIDES.length > 1;

  return (
    <div
      className="flex w-full flex-col items-center"
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
    >
      <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] xl:max-w-[340px]">
        <div className="relative w-full">
          <div
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: `${first.width} / ${first.height}` }}
          >
            {PHONE_SLIDES.map((slide, i) => {
              const active = i === index;
              return (
                <div
                  key={slide.src}
                  className={`absolute inset-0 ${
                    reducedMotion
                      ? active
                        ? "z-[1] opacity-100"
                        : "z-0 opacity-0"
                      : `transition-[opacity,transform] duration-500 ease-out ${active ? "z-[1] opacity-100 scale-100" : "z-0 opacity-0 scale-[0.97]"}`
                  }`}
                  aria-hidden={!active}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={slide.width}
                    height={slide.height}
                    className="h-full w-full object-contain"
                    sizes="(max-width:640px) 280px, (max-width:1024px) 300px, 340px"
                    priority={i === 0}
                    draggable={false}
                    unoptimized={slide.src.endsWith(".svg")}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {multiSlide ? (
        <div className="mt-5 flex items-center justify-center gap-3">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-vl-brown/25 bg-vl-cream-deep/90 text-vl-brown shadow-sm ring-1 ring-black/[0.04] transition hover:border-vl-brown/50 hover:bg-vl-cream-deep active:scale-95"
            aria-label="Previous screen"
            onClick={() => go(-1)}
          >
            <ChevronLeft />
          </button>
          <div className="flex gap-1.5" aria-hidden>
            {PHONE_SLIDES.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-5 bg-vl-brown" : "w-1.5 bg-vl-brown/25"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-vl-brown/25 bg-vl-cream-deep/90 text-vl-brown shadow-sm ring-1 ring-black/[0.04] transition hover:border-vl-brown/50 hover:bg-vl-cream-deep active:scale-95"
            aria-label="Next screen"
            onClick={() => go(1)}
          >
            <ChevronRight />
          </button>
        </div>
      ) : null}
    </div>
  );
}
