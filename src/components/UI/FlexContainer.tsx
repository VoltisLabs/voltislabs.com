import Image from "next/image";
import React from "react";

interface Update {
  img: string;
  message: string;
  subText?: string;
  time: string;
}

interface FlexContainerProps {
  array: Update[];
}

const FlexContainer = ({ array }: FlexContainerProps) => {
  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:flex items-center gap-8">
        {array.map((text, index) => (
          <div
            key={index}
            className="text-left w-[16rem] h-[20rem] overflow-hidden items-start"
          >
            <div className="image-container bg-[white] w-[14rem] h-[14rem] overflow-hidden rounded-[10px]">
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
        ))}
      </div>

      {/* Mobile View */}
      <div className="overflow-x-scroll md:hidden no-scrollbar min-w-[20rem] flex items-center">
        <div className="flex flex-nowrap gap-6 h-full">
          {array.map((text, index) => (
            <div
              key={index}
              className="w-[12rem] text-left min-h-[15rem] overflow-hidden items-start"
            >
              <div className="image-container w-[10rem] h-[10rem] overflow-hidden rounded-[10px]">
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
      </div>
    </>
  );
};

export default FlexContainer;
