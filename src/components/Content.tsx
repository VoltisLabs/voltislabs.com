import React from "react";
import { products } from "../app/data";
import FlexContainer from "./UI/FlexContainer";
import ViewAllButton from "./UI/view_all_button";

interface ContentProps {
  showResponsible?: boolean;
  showProducts?: boolean;
}

function Content({ showResponsible = true, showProducts = true }: ContentProps) {
  return (
    <>
      {showResponsible && (
        <section className="mb-20 md:px-[2rem] ">
          <div className="mb-6 w-full border border-vl-brown/20"></div>
          <div className="mb-10 flex flex-col gap-8 text-vl-ink">
            {/* Title Section */}
            <h2 className="text-center text-[1.6rem] font-semibold tracking-tight text-vl-brown-dark md:text-[1.7rem] lg:text-left">
              Responsible Innovation
            </h2>

            {/* Parent Container for Image and Text */}
            <div className="flex flex-col lg:flex-row items-start gap-8">
              {/* Image Section */}
              <div className="w-full lg:w-1/2 aspect-w-16 aspect-h-9 md:rounded-lg overflow-hidden">
                <img
                  src="/image/responsible.jpg"
                  alt="Responsible Innovation"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Text Section */}
              <div className="flex px-[1rem] flex-col lg:w-1/2 justify-center gap-6">
                <p className="text-[20px] font-medium leading-snug text-vl-ink md:text-[28px]">
                  At Voltis Labs, we innovate with purpose and responsibility - crafting
                  technology that enhances lives while considering its long-term impact
                  on people and the planet.
                </p>
                <p className="text-[20px] font-medium leading-snug text-vl-ink md:text-[28px]">
                  We believe in building technology that empowers, disrupts, and
                  transforms-always with a thoughtful approach to its risks and rewards.
                </p>
                <p className="cursor-pointer text-sm font-semibold text-vl-brown underline decoration-vl-brown/30 underline-offset-4 visited:text-red-500 hover:text-vl-brown-dark md:mt-[120px]">
                  Learn about safety
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* <div className=" border-white border-[1px] w-[full] mb-6"></div>
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
      </section> */}

      {showProducts && (
        <>
          <div className="mb-6 w-full border border-vl-brown/20"></div>
          <section className="mb-12 px-[1rem] md:px-[2rem]">
            <div className="mb-8 flex flex-col gap-4 text-vl-ink md:mb-10 md:flex-row md:items-center md:justify-between">
              <div className="flex w-full items-center justify-between gap-4">
                <h2 className="text-[1.6rem] font-semibold tracking-tight text-vl-brown-dark md:text-[1.7rem]">
                  Products
                </h2>
                <ViewAllButton link="/products" text="view all" />
              </div>
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

            <FlexContainer isClickAble marquee array={products} />
          </section>
        </>
      )}

      <section className="mb-20 md:px-[2rem] px-[1rem]">
        
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
