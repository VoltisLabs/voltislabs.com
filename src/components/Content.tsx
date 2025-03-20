import React from "react";
import Image from "next/image";
import { products, research } from "../app/data";
import FlexContainer from "./UI/FlexContainer";

function Content() {
  return (
    <>
      <section className="mb-20 md:px-[2rem] ">
        <div className="border-white  border-[1px] w-[full] mb-6 "></div>
        <div className="flex flex-col text-white mb-10 gap-8">
  {/* Title Section */}
  <h2 className="font-normal md:text-[1.7rem] text-[1.6rem] text-center lg:text-left">
    Responsible Innovation
  </h2>

  {/* Parent Container for Image and Text */}
  <div className="flex flex-col lg:flex-row items-start gap-8">
    {/* Image Section */}
    <div className="w-full lg:w-1/2 aspect-w-16 aspect-h-9 md:rounded-lg overflow-hidden">
  <img
    src="../image/safety.png"
    alt="Responsible Innovation"
    className="w-full h-full object-cover object-center"
  />
</div>

    {/* Text Section */}
    <div className="flex px-[1rem] flex-col lg:w-1/2 justify-center gap-6">
      <p className="font-normal text-[20px] md:text-[28px]">
        At Voltis Labs, we innovate with purpose and responsibility — crafting
        technology that enhances lives while considering its long-term impact
        on people and the planet.
      </p>
      <p className="font-normal text-[20px] md:text-[28px]">
        We believe in building technology that empowers, disrupts, and
        transforms—always with a thoughtful approach to its risks and rewards.
      </p>
      <p className="text-sm md:mt-[120px] underline cursor-pointer font-normal text-white hover:text-blue-500 visited:text-red-500">
        Learn about safety
      </p>
    </div>
  </div>
</div>
        
      </section>

      <div className=" border-white border-[1px] w-[full] mb-6"></div>
      <section className="mb-20 md:px-[2rem] px-[1rem] md:h-[27rem] min-h-[32.8rem]">
        <div className="flex flex-col md:flex-row justify-between text-white mb-12">
          <h2 className="font-normal mb-[1rem]  md:text-[1.7rem] text-[1.6rem] text-left">
            Research
          </h2>

          <div className="lg:w-1/2">
            <p className="md:font-normal text-[20px] md:text-[24px]">
              We research generative models and how to align them with human
              values.
            </p>
            <p className="text-sm underline mt-2 cursor-pointer font-normal text-white sm:mt-0  hover:text-blue-500 visited:text-red-500">
              Learn about our research
            </p>
          </div>
        </div>

        <FlexContainer array={research} />
      </section>

      <div className="border-white border-[1px] w-[full] mb-6"></div>
      <section className="mb-20 md:px-[2rem] px-[1rem] md:min-h-[33rem] min-h-[29rem]">
        <div className="flex flex-col md:flex-row justify-between text-white mb-10">
          <h2 className="font-normal  md:text-[1.7rem] text-[1.6rem] mb-4 md:mb-0">Products</h2>
          {/* <div className="md:w-1/2">
            <p className="font-normal text-[20px] md:text-[24px]">
              Our API platform offers our latest models and guides for safety
              best practices.
            </p>
            <p className="text-sm underline mt-2 cursor-pointer  font-normal text-white sm:mt-0  hover:text-blue-500 visited:text-red-500">
              Explore our products
            </p>
          </div> */}
        </div>

        <FlexContainer array={products} />
      </section>

      <section className="mb-20 md:px-[2rem] px-[1rem]">
        <div className="border-white border-[1px] w-[full] mb-6"></div>
        <div className="flex  flex-col md:flex-row justify-between text-white mb-10">
          <h2 className="font-normal  md:text-[1.7rem] text-[1.6rem]">
            Careers at Voltis-Labs
          </h2>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <p className="font-normal text-lg text-[20px] md:text-[24px]">
              Developing safe and beneficial AI requires people from a wide
              range of disciplines and backgrounds.
            </p>
            <p className="text-sm underline mt-2 font-normal text-white sm:mt-0  cursor-pointer hover:text-blue-500 visited:text-red-500">
              View careers
            </p>
          </div>
        </div>
        <div className="px-0">
          <img
            src="../image/career.png"
            alt="Icon"
            className="w-full h-[32rem] object-cover rounded-lg"
          />
        </div>
      </section>

      <section className="mb-20 md:px-[2rem] px-[1rem]">
        <div className=" border-[#333333] border-[1px] w-[full] mb-6 "></div>
        {/*  <div className="flex md:flex-row flex-col w-full gap-8">
          <div className="flex md:px-[2rem] px-[1rem] flex-col w-full md:w-[48.5%] mb-6 md:mb-0">
            <blockquote className="text-white font-normal text-[20px] md:text-[24px]">
              “I encourage my team to keep learning. Ideas in different topics
              or fields can often inspire new ideas and broaden the potential
              solution space.”
            </blockquote>
            <p className="text-white font-normal mt-1">Lilian Weng</p>
            <p className="text-white font-normal">Applied AI at OpenAI</p>
          </div>
          <div className="w-full md:pr-[2rem] pr-0 md:w-[55%] flex justify-center md:justify-end">
            <img
              src="/image/team.png"
              alt="Icon"
              className="w-full md:h-[30rem] h-[25rem] object-cover"
            />
          </div>
        </div> */}
      </section>

      {/*  <div className=" border-[#FFFFFF] border-[1px] w-[full] mb-[2rem]"></div>*/}
    </>
  );
}

export default Content;
