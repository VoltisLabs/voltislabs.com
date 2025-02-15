import { IoIosSearch } from "react-icons/io";
import { About, updates, products, research } from "./data";
import Image from "next/image";
import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import FirstHero from "../components/common/carousel/FirstHero";
import SecondHero from "../components/common/carousel/SecondHero";
import ThirdHero from "../components/common/carousel/ThirdHero";

export default function Home() {
  const slides = [
    {
      image: "/path/to/image1.jpg",
      text: "Slide 1 Text",
    },
    {
      image: "/path/to/image2.jpg",
      text: "Slide 2 Text",
    },
    {
      image: "/path/to/image3.jpg",
      text: "Slide 3 Text",
    },
  ];

  return (
    <div className="page-container bg-black w-full min-h-screen">
      {/* <Swiper spaceBetween={50} slidesPerView={1} autoplay={{ delay: 3000 }}> */}
      {/* <FirstHero /> */}
      <SecondHero />
      {/* <ThirdHero /> */}
      {/* </Swiper> */}

      <div className="content-container md:px-[2rem] px-[1rem]">
        <section className="flex pt-[3.45rem] flex-col md:flex-row flex-wrap w-full min-h-[150px] gap-4  mb-20">
          {About.map((text, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-1 min-w-[200px] gap-3 px-4 md:px-8"
            >
              <p className="text-white text-2xl font-medium">{text.title}</p>
              <Link  href={text.route} className="text-white underline font-normal text-sm    mt-2 cursor-pointer  sm:mt-0  hover:text-blue-500 ">
                {text.message}
              </Link>
            </div>
          ))}
        </section>

        <div className=" border-white border-[1px] w-[full] mb-6"></div>
        <section className="mb-20 ">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-white mb-10">
            <h2 className="font-normal text-xl sm:text-2xl">Latest updates</h2>
            <p className="font-normal text-sm underline mt-2 sm:mt-0">Söhne</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {updates.map((text, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 items-center text-center md:items-start md:text-left"
              >
                <Image src={text.img} alt="Icon" width={450} height={300} />
                <p className="text-white text-sm">{text.message}</p>
                <p className="text-white text-sm">{text.time}</p>
              </div>
            ))}
          </div>
        </section>

        <div className=" border-white border-[1px] w-[full] mb-6"></div>
        <section className="mb-20 ">
          <div className="flex flex-col lg:flex-row justify-between text-white mb-10">
            <h2 className="font-normal text-3xl mb-4 lg:mb-0">
              Safety & Responsibility
            </h2>
            <div className="lg:w-1/2">
              <p className="font-normal text-xl md:text-2xl">
                Our work to create safe and beneficial AI requires a deep
                understanding of the potential risks and benefits, as well as
                careful consideration of the impact.
              </p>
              <p className="text-sm underline mt-2 cursor-pointer font-normal text-white sm:mt-0  hover:text-blue-500 visited:text-red-500">
                Learn about safety
              </p>
            </div>
          </div>
          <div>
            <img
              src="../Image/safety.png"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {research.map((text, index) => (
              <div
                key={index}
                className="flex flex-col items-center md:items-start"
              >
                <Image src={text.img} alt="Icon" width={450} height={300} />
                <p className="text-white text-sm font-normal text-[14px] mt-2">
                  {text.message}
                </p>
                <p className="text-white text-sm">{text.time}</p>
              </div>
            ))}
          </div>
        </section>

        <div className=" border-white border-[1px] w-[full] mb-6"></div>
        <section className="mb-20 ">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((text, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-3"
              >
                <Image src={text.img} alt="Icon" width={450} height={300} />
                <p className="text-white text-sm font-normal">{text.message}</p>
                <p className="text-white text-sm">{text.time}</p>
              </div>
            ))}
          </div>
        </section>

        <div className=" border-white border-[1px] w-[full] mb-6"></div>
        <section className="mb-20 ">
          <div className="flex flex-col md:flex-row justify-between text-white mb-10">
            <h2 className="font-normal text-2xl md:text-3xl">
              Careers at OpenAI
            </h2>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <p className="font-normal text-lg md:text-2xl">
                Developing safe and beneficial AI requires people from a wide
                range of disciplines and backgrounds.
              </p>
              <p className="text-sm underline mt-2    font-normal text-white sm:mt-0  cursor-pointer hover:text-blue-500 visited:text-red-500">View careers</p>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="../Image/career.png"
              alt="Icon"
              className="w-full h-64 md:h-96 lg:h-[30rem] object-cover rounded-lg"
            />
          </div>
        </section>

        <div className=" border-[#333333] border-[1px] w-[full] mb-6"></div>

        <section className="mb-20 ">
          <div className="flex flex-wrap items-center w-full">
            <div className="flex flex-col w-full md:w-[45%] mb-6 md:mb-0">
              <p className="text-white font-normal text-2xl">
                “I encourage my team to keep learning. Ideas in different topics
                or fields can often inspire new ideas and broaden the potential
                solution space.”
              </p>
              <p className="text-white font-normal mt-1">Lilian Weng</p>
              <p className="text-white font-normal">Applied AI at OpenAI</p>
            </div>
            <div className="w-full md:w-[45%] flex justify-center md:justify-end">
              <img
                src="../Image/team.png"
                alt="Icon"
                className="w-full md:w-[45%] h-auto"
              />
            </div>
          </div>
        </section>

        <div className=" border-[#FFFFFF] border-[1px] w-[full] mb-3"></div>

        <section className="mb-40  ">
          <div className="container mx-auto">
            <p className="text-white text-3xl md:text-4xl text-center md:text-left">
              Join us in shaping the future of technology.
            </p>
          </div>

        
          <div className="border-[#FFFFFF] border-[1px] w-full text-center py-4 px-1 h-16 rounded mt-10 mb-28">
            <p className="font-normal text-white sm:mt-0 text-sm underline mt-2 cursor-pointer hover:text-blue-500 visited:text-red-500">View careers</p>
          </div>

          <div className="flex flex-wrap justify-between items-start gap-6">
            <Image
              src={"../Image/logo.svg"}
              alt="Icon"
              width={100}
              height={100}
              className="mb-6 md:mb-24"
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
              <div className="flex flex-col">
                <p>Research</p>
                <p>Overview</p>
                <p>Index</p>
                <p>GPT-4</p>
                <p>DALL.E 3</p>
              </div>

              <div className="flex flex-col">
                <p>API</p>
                <p>Overview</p>
                <p>Data privacy</p>
                <p>Pricing</p>
                <div className="flex items-center gap-2">
                  <p>Docs</p>
                  <Image
                    src={"../Image/ArrowUpRight.svg"}
                    alt="GFY"
                    width={10}
                    height={10}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <p>Research</p>
                <p>Overview</p>
                <p>Index</p>
                <p>GPT-4</p>
                <p>DALL.E 3</p>
              </div>

              <div className="flex flex-col">
                <p>Research</p>
                <p>Overview</p>
                <p>Index</p>
                <p>GPT-4</p>
                <p>DALL.E 3</p>
              </div>
            </div>
          </div>
        </section>
        <div className=" border-[#ffffff] border-[1px] w-[full] mb-3 "></div>

        <footer className="flex flex-col md:flex-row justify-between text-white mb-20 ">
          <div className="flex flex-col space-y-2">
            <p>OpenAI 2015 – 2023</p>
            <p>Terms & policies</p>
            <p>Privacy policy</p>
            <p>Brand guidelines</p>
          </div>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            <p>Twitter</p>
            <p>Youtube</p>
            <p>GitHub</p>
            <p>SoundCloud</p>
            <p>LinkedIn</p>
          </div>
        </footer>
      </div>
    </div>
   
    
  );
}
