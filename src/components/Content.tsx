import React from "react";
import Image from "next/image";
import { products, research } from "../app/data";

function Content() {
  return (
    <div>
      <div className=" border-white border-[1px] w-[full] mb-6"></div>
      <section className="mb-20 ">
        <div className="flex flex-col lg:flex-row justify-between text-white mb-10">
          <h2 className="font-normal text-3xl mb-4 lg:mb-0">
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
        <div>
          <img
            src="../image/safety.png"
            alt="Icon"
            className="w-full h-64 md:h-96 lg:h-[30rem] object-cover rounded-lg"
          />
        </div>
      </section>

      <div className=" border-white border-[1px] w-[full] mb-6"></div>
      <section className="mb-20">
        <div className="flex flex-col md:flex-row justify-between text-white mb-12">
          <h2 className="font-normal text-3xl text-center md:text-left">
            Research
          </h2>

          <div className="lg:w-1/2">
            <p className="font-normal text-xl md:text-2xl">
              We research generative models and how to align them with human
              values.
            </p>
            <p className="text-sm underline mt-2 cursor-pointer font-normal text-white sm:mt-0  hover:text-blue-500 visited:text-red-500">
              Learn about our research
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {research.map((text, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 items-center text-center md:items-start md:text-left"
            >
              <Image
                src={text.img}
                alt="Icon"
                width={450}
                height={300}
                className="transition-transform duration-300 ease-in-out hover:scale-95"
              />
              <p className="text-white text-sm font-normal text-[14px] mt-2">
                {text.message}
              </p>
              <p className="text-white text-sm">{text.time}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-white border-[1px] w-[full] mb-6"></div>
      <section className="mb-20">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((text, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 items-center text-center md:items-start md:text-left"
            >
              <Image
                src={text.img}
                alt="Icon"
                width={450}
                height={300}
                className="transition-transform duration-300 ease-in-out hover:scale-95"
              />
              <p className="text-white text-sm font-normal">{text.message}</p>
              <p className="text-white text-sm">{text.time}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-white border-[1px] w-[full] mb-6"></div>
      <section className="mb-20">
        <div className="flex flex-col md:flex-row justify-between text-white mb-10">
          <h2 className="font-normal text-2xl md:text-3xl">
            Careers at OpenAI
          </h2>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <p className="font-normal text-lg md:text-2xl">
              Developing safe and beneficial AI requires people from a wide
              range of disciplines and backgrounds.
            </p>
            <p className="text-sm underline mt-2    font-normal text-white sm:mt-0  cursor-pointer hover:text-blue-500 visited:text-red-500">
              View careers
            </p>
          </div>
        </div>
        <div>
          <img
            src="../image/career.png"
            alt="Icon"
            className="w-full h-64 md:h-96 lg:h-[30rem] object-cover rounded-lg"
          />
        </div>
      </section>

      <div className=" border-[#333333] border-[1px] w-[full] mb-6"></div>

      <section className="mb-20 ">
        <div className="flex flex-wrap  w-full gap-8">
          <div className="flex flex-col w-full md:w-[48.5%] mb-6 md:mb-0">
            <p className="text-white font-normal text-2xl">
              “I encourage my team to keep learning. Ideas in different topics
              or fields can often inspire new ideas and broaden the potential
              solution space.”
            </p>
            <p className="text-white font-normal mt-1">Lilian Weng</p>
            <p className="text-white font-normal">Applied AI at OpenAI</p>
          </div>
          <div className="w-full md:w-[48.5%] flex justify-center md:justify-end ">
            <img
              src="../image/team.png"
              alt="Icon"
              className="w-full h-auto rounded-lg "
            />
          </div>
        </div>
      </section>
      <div className=" border-[#FFFFFF] border-[1px] w-[full] mb-3"></div>
    </div>
  );
}

export default Content;
