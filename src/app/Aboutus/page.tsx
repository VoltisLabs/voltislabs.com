import React from "react";
import { Aboutus } from "../data";
import Image from "next/image";
import Title from "@/src/components/UI/Title";

function page() {
  return (
    <div className="px-4 md:px-8  pt-[.1rem] ">
      <section className="text-white my-8  mb-14">
        <div className="text-center px-4 mt-10 mb-6">
          <Title className="mt-2">We are Voltis Labs</Title>
          <div className="text-center   mt-1  ">
            <h5 className="text-[#858585] font-normal  md:text-[1.1rem] text-[1rem]">
              Published on Monday 9th February, 2025
            </h5>
          </div>
        </div>
      </section>

      <section className="text-white my-8  mb-10 font-normal  md:text-[1.1rem] text-[1rem]">
        <div className="flex flex-wrap md:flex-nowrap gap-4 mb-10 w-full">
          {Aboutus.map((img, index) => (
            <div key={index} className="w-full md:w-1/2">
              <img
                src={img.img}
                alt="reluraimg"
                className="w-full h-[500px] rounded-lg object-cover object-top"
              />
            </div>
          ))}
        </div>

        <p className="font-normal text-lg mb-5">
          {" "}
          At Voltis Labs, we <span className="font-semibold">believe</span>{" "}
          technology has the power to unlock human potential. We are a company
          built on the idea that innovation should serve a purpose—solving real
          problems, empowering creators, and shaping a more connected future.
        </p>

        <p className="font-normal mb-5">
          Our journey began with a simple yet powerful belief: great ideas
          deserve the right platform to thrive. Frustrated by outdated systems
          and missed opportunities, a small group of visionaries came together
          to rethink how technology could empower individuals and businesses
          alike.{" "}
        </p>

        <p className="font-normal">
          The result was Voltis Labs—a place where bold ideas are turned into
          reality, where barriers are broken, and where technology serves
          people, not the other way around.
        </p>
      </section>

      <section className="text-white my-8  mb-20 font-normal md:text-[1.1rem] text-[1rem] ">
        <h6 className="font-bold text-[25px] mb-5">Our Mission</h6>
        <div className="flex md:flex-row flex-col w-full gap-8">
          <div className="w-full md:w-[48.5%]">
            <p className="font-normal">
              We are here to build the next generation of digital platforms—ones
              that are intuitive, scalable, and designed to make life easier.
              Our approach is rooted in innovation, but more importantly, in
              impact. Every product we create is built to solve a problem, to
              simplify complexity, and to open new doors for those who dare to
              dream big.
            </p>
            <p className="font-normal">Our Values</p>
            <ul className="list-disc pl-4">
              <li>
                Empowerment Through Technology – We believe that technology
                should give people more control over their lives, their work,
                and their creativity. Every solution we build is designed to
                help individuals and businesses do more with less friction.
              </li>
              <li>
                Innovation Without Limits – The digital landscape is constantly
                evolving, and so are we. We push boundaries, challenge the
                status quo, and embrace the unknown in pursuit of groundbreaking
                solutions.
              </li>
              <p className="font-normal">
                A People-First Approach – Technology is only as powerful as the
                people who use it. That’s why everything we create is built with
                a deep understanding of real-world needs, ensuring that our
                platforms are as intuitive as they are transformative.
              </p>

              <li>
                Sustainability & Inclusion – We don’t believe in building for a
                select few. Our goal is to create ecosystems that are
                accessible, diverse, and built to last.
              </li>
            </ul>
          </div>
          <div className="w-full md:w-[55%] flex justify-center md:justify-end ">
            <img
              src="../image/landingimg3.png"
              alt="Icon"
              className="w-full md:h-[35rem] h-[25rem] object-cover object-top rounded-lg"
            />
          </div>
        </div>{" "}
      </section>

      <section className="text-white my-8  mb-20 font-normal md:text-[1.1rem] text-[1rem]">
        <p className="font-bold text-[25px] mb-5">Looking Ahead</p>
        <p className="font-normal">
          Voltis Labs isn’t just a tech company—it’s a movement. We are here to
          redefine what’s possible, to bridge the gap between vision and
          execution, and to create technology that truly matters. Whether it’s
          enabling new ways to work, connect, or create, we are building a
          future where digital solutions empower, rather than complicate.
        </p>
        <p className="font-normal">
          This is just the beginning. The future is being written now, and at
          Voltis Labs, we are here to shape it.
        </p>
      </section>
    </div>
  );
}

export default page;
