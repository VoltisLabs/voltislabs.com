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
            className="text-left w-full h-[26rem] overflow-hidden items-start"
          >
            <div className="image-container w-full h-[80%] overflow-hidden rounded-[10px]">
              <Image
                src={text.img}
                alt="Icon"
                width={350}
                height={300}
                className="transition-all w-full h-full object-cover duration-[.85s] ease-in-out hover:scale-110"
              />
            </div>

            <p className="text-white text-[.9rem] mt-3">{text.message}</p>
            <p className="text-white text-[.7rem]">{text.time}</p>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="overflow-x-scroll md:hidden md:min-w-[43rem] no-scrollbar min-w-[20rem] flex items-center">
        <div className="flex md:justify-between justify-center flex-nowrap gap-8 h-full md:w-full">
          {array.map((text, index) => (
            <div
              key={index}
              className="md:w-[15rem] md:h- w-[12.5rem] text-left !min-h-[25rem] overflow-hidden items-start"
            >
              <div className="image-container w-full h-[20rem] overflow-hidden rounded-[10px]">
                <Image
                  src={text.img}
                  alt="Icon"
                  width={310}
                  height={300}
                  className="transition-all w-full duration-[.85s] ease-in-out hover:scale-110"
                />
              </div>

              <p className="text-white text-[.9rem] mt-3">{text.message}</p>
              <p className="text-white text-[.7rem]">{text.time}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FlexContainer;
