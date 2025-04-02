"use client";



import Image from "next/image";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import "./flexContainer.css"
import LearnMoreBtn from "./LearnMoreBtn";
import SmallLearnBtn from "./SmallLearnBtn";
import { motion } from "framer-motion";
import TextColorAnimation from "./animating_text";

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
    <div className="flex items-center  bg-[#191919]">
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
              let leftCard = cards[clickedCardIndex - 1]
              let rightCard = cards[clickedCardIndex + 1]
              leftCard.classList.add('before')
              rightCard.classList.add('after')
              // cards[clickedCardIndex].classList.add('current')
            }
            console.log({ clickedCardIndex })
          }}


          className={`card text-left w-[16rem] h-[20rem]  items-center px-3 bg-black
            `}
        >

          <div className={`image-container bg-[white] w-[14rem] h-[14rem] overflow-hidden rounded-[10px] `}>
            <Image
              src={text.img}
              alt="Icon"
              width={192}
              height={192}
              className="transition-all w-full h-full object-cover duration-[.85s] ease-in-out hover:scale-110"
            />
          </div>

          <p className="text-white text-[.9rem] mt-3">{text.message}</p>
        </div>
      })}
    </div >
  );
  const mobileContent = (
    <div className="flex flex-nowrap  h-full bg-[#191919]">
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
              let leftCard = cards[clickedCardIndex - 1]
              let rightCard = cards[clickedCardIndex + 1]
              leftCard.classList.add('before')
              rightCard.classList.add('after')
              // cards[clickedCardIndex].classList.add('current')
            }
            console.log({ clickedCardIndex })
          }}
          className={`card w-[12rem] text-left min-h-[15rem] overflow-hidden items-start px-3 bg-black`}
        >
          <div className="image-container w-[10rem] h-[10rem] overflow-hidden rounded-[10px] bg-white">
            <Image
              src={text.img}
              alt="Icon"
              width={160}
              height={160}
              className="transition-all w-full h-full object-cover duration-[.85s] ease-in-out hover:scale-110"
            />
          </div>

          <p className="text-white text-[.8rem] mt-2">{text.message}</p>
          <p className="text-white text-[.7rem]">{text.time}</p>
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

  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:block">
        {marquee ? (
          <div className="flex-col gap-6 bg-[#000000]">

            <Marquee
              className="slider-statement z-20 cursor-default bg-carpet-green relative overflow-hidden"
              speed={50}
              pauseOnHover
              pauseOnClick={false}
              direction="right"

              play={!paused}

            >
              {desktopContent}
            </Marquee>
            {!paused && isClickAble && (
              <p className="text-gray-400 text-center ">Click to expand</p>
            )}
            {paused && (<motion.div initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }} className="rounded-3xl   px-14 py-12">
              <div className="p-6 bg-[#000000] flex-col justify-center items-center rounded-3xl">
                <p className="text-white font-normal text-sm">{formatParagraph(seledctedDescription)}</p>

                <div className="my-7 mx-auto w-fit">
                  <a
                    href={selectedLink}

                    className="p-2 border-white border px-10 py-2 rounded-md text-white text-center font-black ">
                    Read More
                  </a>
                </div>
              </div>
            </motion.div>)}
          </div>
        ) : (
          desktopContent
        )}
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        {marquee ? (
          <div className="flex-col gap-6">

            <Marquee
              className="slider-statement z-20 cursor-default bg-black relative"
              speed={30}
              pauseOnHover
              pauseOnClick={false}
              direction="left"

              play={!paused}
            >
              {mobileContent}
            </Marquee>
            {!paused && isClickAble && (

              <div className="relative text-6xl font-bold text-white overflow-hidden">
                Click to expand
                <motion.div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear",
                  }}
                  style={{ mixBlendMode: "difference" }} // This makes the white effect visible
                />
              </div>
              // <TextColorAnimation text="Click to expand" textAlign="center" color01="#ffffff" color02="grey-400" fontSize={12} fontFamily={"Inter"} fontWeight={500} Duration={300} />
            )}
            {paused && (<motion.div initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }} className="rounded-3xl px-4 py-6">
              <div className="p-6 bg-[#000000] flex-col justify-center items-center rounded-3xl">
                <p className="text-white font-normal text-sm leading-6">{formatParagraph(seledctedDescription)}</p>

                <div className="my-7 mx-auto w-fit">
                  <a target="_blank"
                    href={selectedLink}
                    rel="noopener noreferrer"
                    className="p-2 border-white border px-10 py-2 rounded-md text-white text-center font-black ">
                    Read More
                  </a>
                </div>
              </div>
            </motion.div>)}
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
