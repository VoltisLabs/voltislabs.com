import React from "react";
import Image from "next/image";
import { products, research } from "../app/data";

function Content() {
  return (
    <>
      <div className="border-white border-[1px] w-[full] mb-6"></div>
      <section className="mb-20">
        <div className="flex md:px-[2rem] px-[1rem] flex-col lg:flex-row justify-between text-white mb-10">
          <h2 className="font-normal text-3xl mb-4 lg:mb-0 ">
            Responsible Innovation
          </h2>
          <div className="lg:w-1/2">
            <p className="font-normal mb-[2rem] text-xl md:text-2xl">
              At Voltis Labs, we innovate with purpose and responsibility —
              crafting technology that enhances lives while considering its
              long-term impact on people and the planet."
            </p>
            <p className="font-normal mb-[3rem] text-xl md:text-2xl">
              We believe in building technology that empowers, disrupts, and
              transforms—always with a thoughtful approach to its risks and
              rewards."
            </p>
            <p className="text-sm underline mt-2 cursor-pointer font-normal text-white sm:mt-0  hover:text-blue-500 visited:text-red-500">
              Learn about safety
            </p>
          </div>
        </div>
        <div className="w-full px-0 md:h-[58rem] h-[40rem] rounded-lg overflow-hidden">
          <img
            src="../image/safety.png"
            alt="Icon"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </section>

      <div className=" border-white border-[1px] w-[full] mb-6"></div>
      <section className="mb-20 md:px-[2rem] px-[1rem] md:h-[37rem] h-[27rem]">
        <div className="flex flex-col md:flex-row justify-between text-white mb-12">
          <h2 className="font-normal mb-[1rem] text-[1.875rem] text-left">
            Research
          </h2>

          <div className="lg:w-1/2">
            <p className="md:font-normal text-[1.09rem] md:text-2xl">
              We research generative models and how to align them with human
              values.
            </p>
            <p className="text-sm underline mt-2 cursor-pointer font-normal text-white sm:mt-0  hover:text-blue-500 visited:text-red-500">
              Learn about our research
            </p>
          </div>
        </div>

        <div className="overflow-x-scroll md:min-w-[43rem]  no-scrollbar min-w-[20rem] flex items-center">
          <div className="flex flex-nowrap gap-8 h-full md:w-full">
            {research.map((text, index) => (
              <div
                key={index}
                className="md:min-w-[22rem] w-[13rem] text-left !min-h-[25rem] overflow-hidden items-start"
              >
                <div className="image-container w-full h-20rem overflow-hidden rounded-[10px]">
                  <Image
                    src={text.img}
                    alt="Icon"
                    width={450}
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
      </section>

      <div className="border-white border-[1px] w-[full] mb-6"></div>
      <section className="mb-20 md:px-[2rem] px-[1rem] md:h-[36rem] h-[29rem]">
        <div className="flex flex-col md:flex-row justify-between text-white mb-10">
          <h2 className="font-normal text-3xl mb-4 md:mb-0">Products</h2>
          <div className="md:w-1/2">
            <p className="font-normal text-xl md:text-2xl">
              Our API platform offers our latest models and guides for safety
              best practices.
            </p>
            <p className="text-sm underline mt-2 cursor-pointer  font-normal text-white sm:mt-0  hover:text-blue-500 visited:text-red-500">
              Explore our products
            </p>
          </div>
        </div>

        <div className="overflow-x-scroll md:min-w-[43rem]  no-scrollbar min-w-[20rem] flex items-center">
          <div className="flex flex-nowrap gap-8 h-full md:w-full">
            {products.map((text, index) => (
              <div
                key={index}
                className="md:min-w-[22rem] w-[12.5rem] text-left !min-h-[25rem] overflow-hidden items-start"
              >
                <div className="image-container w-full h-20rem overflow-hidden rounded-[10px]">
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
      </section>

      <div className="border-white border-[1px] w-[full] mb-6"></div>
      <section className="mb-20">
        <div className="flex md:px-[2rem] px-[1rem] flex-col md:flex-row justify-between text-white mb-10">
          <h2 className="font-normal text-2xl md:text-3xl">
            Careers at Voltis-Labs
          </h2>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <p className="font-normal text-lg md:text-2xl">
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
            className="w-full h-[32rem] object-cover md:rounded-lg"
          />
        </div>
      </section>

      <div className=" border-[#333333] border-[1px] w-[full] mb-6"></div>

      {/* <section className="mb-20">
        <div className="flex md:flex-row flex-col w-full gap-8">
          <div className="flex md:px-[2rem] px-[1rem] flex-col w-full md:w-[48.5%] mb-6 md:mb-0">
            <blockquote className="text-white font-normal text-2xl">
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
        </div>
      </section> */}

      <div className=" border-[#FFFFFF] border-[1px] w-[full] mb-[2rem]"></div>
    </>
  );
}

export default Content;
