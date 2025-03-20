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
            className="text-left w-[25rem] h-[25rem] overflow-hidden items-start"
          >
            <div className="image-container bg-[white] w-full h-[66%] overflow-hidden rounded-[10px]">
              <Image
                src={text.img}
                alt="Icon"
                width={350}
                height={350}
                className="transition-all w-full h-full object-cover duration-[.85s] ease-in-out hover:scale-110"
              />
            </div>

            <p className="text-white text-[.9rem] mt-3">{text.message}</p>
            {/* <p className="text-white text-[.7rem]">{text.time}</p> */}
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="overflow-x-scroll md:hidden md:min-w-[43rem] no-scrollbar min-w-[20rem] flex items-center">
        <div className="flex flex-nowrap gap-8 h-full md:w-full">
          {array.map((text, index) => (
            <div
              key={index}
              className="w-[15rem] text-left min-h-[20rem] overflow-hidden items-start"
            >
              <div className="image-container h-[78%] w-full overflow-hidden rounded-[10px]">
                <Image
                  src={text.img}
                  alt="Icon"
                  width={350}
                  height={350}
                  className="transition-all h-full w-full duration-[.85s] ease-in-out hover:scale-110"
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
