"use client";



import Image from "next/image";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import "./flexContainer.css";
import { motion } from "framer-motion";

interface Update {
  img: string;
  message: string;
  subText?: string;
  time: string;
  link?: string;
  id?: number | null;
  description?: string | null;
}

interface FlexContainerProps {
  array: Update[];
  marquee?: boolean; // New prop to activate Marquee
  isClickAble?: Boolean;
}

const FlexContainer = ({ array, marquee = false, isClickAble = false }: FlexContainerProps) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");
  const [seledctedDescription, setSelectedDescription] = useState("");

  const handleClick = (id: number) => {
    setSelected(selected === id ? null : id);
    console.log({ id });
  };
  const desktopContent = (
    <div className="flex items-stretch gap-3 px-3 py-1 md:gap-4">
      {array.map((text, index) => {
        const isBefore = selected !== null && array[index + 1]?.id === selected;
        const isAfter = selected !== null && array[index - 1]?.id === selected;
        const isLastContent = selected != null && array[array.length - 1]

        return <div
          key={index}
          onClick={(evt) => {
            let cards = [...document.querySelectorAll('.card')]
            console.log('total cards displayed', cards.length)
            setSelected(text.id ?? null);
            setPaused((prev) => true);
            if (selected == text.id) {
              setPaused((prev) => false);
              setSelected(null);

            }
            console.log('card:', evt.currentTarget)
            let clickedCardIndex = cards.findIndex(card => card === evt.currentTarget)
            setSelectedLink(text.link ?? "")
            setSelectedDescription(text.description ?? "");
            if (clickedCardIndex > -1) {
              cards.forEach(card => {
                card.classList.remove("before")
                card.classList.remove("after")
                card.classList.remove("current")
              })
              const leftCard = cards[clickedCardIndex - 1]
              const rightCard = cards[clickedCardIndex + 1]
              leftCard?.classList.add("before")
              rightCard?.classList.add("after")
            }
            console.log({ clickedCardIndex })
          }}


          className={`card flex w-[7.25rem] shrink-0 flex-col overflow-hidden rounded-xl border border-vl-brown/10 bg-vl-cream-deep text-left shadow-sm sm:w-32 md:w-36`}
        >

          <div className="image-container relative aspect-square w-full shrink-0 overflow-hidden bg-vl-cream">
            <Image
              src={text.img}
              alt={text.message}
              fill
              sizes="(max-width: 768px) 7rem, 9rem"
              unoptimized={text.img.endsWith(".svg")}
              className="object-cover object-center transition-all duration-[.85s] ease-in-out hover:scale-105"
            />
          </div>

          <p className="mt-2 min-h-[2.25rem] px-2 pb-2 text-center text-[0.7rem] font-semibold leading-tight text-vl-ink sm:text-xs">
            {text.message}
          </p>
        </div>
      })}
    </div>
  );
  const mobileContent = (
    <div className="flex h-full flex-nowrap items-stretch gap-3 px-3 py-1">
      {array.map((text, index) => (
        <div
          key={index}
          onClick={(evt) => {
            let cards = [...document.querySelectorAll('.card')]
            console.log('total cards displayed', cards.length)
            let clickedCardIndex = cards.findIndex(card => card === evt.currentTarget)
            setSelected(text.id ?? null);
            setPaused((prev) => true);
            if (selected == text.id) {
              setPaused((prev) => false);
              setSelected(null);
              if (clickedCardIndex > -1) {
                cards.forEach(card => {
                  card.classList.remove("before")
                  card.classList.remove("after")
                  card.classList.remove("current")
                })

              }
              return;
            }
            console.log('card:', evt.currentTarget)
            setSelectedLink(text.link ?? "")
            setSelectedDescription(text.description ?? "");
            if (clickedCardIndex > -1) {
              cards.forEach(card => {
                card.classList.remove("before")
                card.classList.remove("after")
                card.classList.remove("current")
              })
              const leftCard = cards[clickedCardIndex - 1]
              const rightCard = cards[clickedCardIndex + 1]
              leftCard?.classList.add("before")
              rightCard?.classList.add("after")
            }
            console.log({ clickedCardIndex })
          }}
          className={`card flex w-[6.75rem] shrink-0 flex-col overflow-hidden rounded-xl border border-vl-brown/10 bg-vl-cream-deep text-left shadow-sm sm:w-28`}
        >
          <div className="image-container relative aspect-square w-full shrink-0 overflow-hidden bg-vl-cream">
            <Image
              src={text.img}
              alt={text.message}
              fill
              sizes="(max-width: 640px) 6.75rem, 7rem"
              unoptimized={text.img.endsWith(".svg")}
              className="object-cover object-center transition-all duration-[.85s] ease-in-out hover:scale-105"
            />
          </div>

          <p className="mt-1.5 min-h-[2rem] px-1.5 pb-2 text-center text-[0.65rem] font-semibold leading-tight text-vl-ink sm:text-[0.7rem]">
            {text.message}
          </p>
          {/* <p className="text-white text-[.7rem]">{text.time}</p> */}
        </div>
      ))}
    </div>
  );

  const formatParagraph = (text: string) => {
    const words = text.split(" ");
    return (
      <>
        <span className="font-bold">{words[0]}</span>{" "}
        {words.slice(1).join(" ")}
      </>
    );
  };

  const expandHint = () => (
    <p className="py-2 text-center text-[11px] font-medium tracking-wide text-vl-brown/40 md:text-xs md:text-vl-ink/40">
      Select a card to expand
    </p>
  );

  const expandedPanel = (compact: boolean) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className={
        compact
          ? "mx-auto mt-5 max-w-xl rounded-2xl border border-vl-brown/20 bg-transparent px-5 py-7 sm:px-7 sm:py-8"
          : "mx-auto mt-6 max-w-2xl rounded-2xl border border-vl-brown/20 bg-transparent px-8 py-9 md:px-12 md:py-10"
      }
    >
      <p
        className={`text-center font-normal leading-relaxed text-vl-ink/90 ${compact ? "text-sm leading-6" : "text-sm leading-7 md:text-[15px] md:leading-8"}`}
      >
        {formatParagraph(seledctedDescription)}
      </p>
      <div className={`flex justify-center ${compact ? "mt-6" : "mt-8"}`}>
        <a
          href={selectedLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-vl-brown bg-vl-brown px-5 py-2 text-sm font-semibold text-vl-cream transition-colors hover:border-vl-brown-dark hover:bg-vl-brown-dark"
        >
          Read more
        </a>
      </div>
    </motion.div>
  );

  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:block">
        {marquee ? (
          <div className="flex flex-col gap-4 bg-vl-cream">
            <Marquee
              className="slider-statement relative z-20 cursor-default overflow-hidden"
              speed={40}
              pauseOnHover
              pauseOnClick={false}
              direction="right"
              play={!paused}
            >
              {desktopContent}
            </Marquee>
            {!paused && isClickAble && expandHint()}
            {paused && expandedPanel(false)}
          </div>
        ) : (
          desktopContent
        )}
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        {marquee ? (
          <div className="flex flex-col gap-4">
            <Marquee
              className="slider-statement relative z-20 cursor-default overflow-hidden"
              speed={28}
              pauseOnHover
              pauseOnClick={false}
              direction="left"
              play={!paused}
            >
              {mobileContent}
            </Marquee>
            {!paused && isClickAble && expandHint()}
            {paused && expandedPanel(true)}
          </div>

        ) : (
          <div className="overflow-x-scroll no-scrollbar min-w-[20rem] flex items-center">
            {mobileContent}
          </div>
        )}
      </div >
    </>
  );
};

export default FlexContainer;

