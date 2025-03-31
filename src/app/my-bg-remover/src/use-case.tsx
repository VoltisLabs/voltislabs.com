import { FaPlus } from "react-icons/fa";
import Image from "next/image";

const useCases = [
  { title: "Studio for Crafters", image: "/studio1.jpg" },
  { title: "Studio for Educators", image: "/preluraslider3.jpg" },
  { title: "Studio for Print on Demand", image: "/OIP.jpg" },
  { title: "Studio for Business", image: "/studio2.jpg" },
];

export default function StudioPage() {
  return (
    <div className="flex flex-col items-center text-white mt-5">

      {/* Studio Use Cases Section web & mobile optimised */}
      <section className="relative py-12 px-4 sm:px-8 bg-black rounded-4xl w-full max-w-[96rem] text-center">
        <h2 className="text-4xl font-bold">Studio use cases</h2>

        {/* Use Case Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mx-auto mt-10 max-w-6xl">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="relative p-4 sm:p-6 flex items-center justify-center rounded-2xl overflow-hidden shadow-lg w-full sm:w-[34rem] h-[16rem] bg-gray-900 transition-transform duration-300 hover:scale-105"
            >
              {/* Background Image */}
              <Image
                src={useCase.image}
                alt={useCase.title}
                className="absolute inset-0 w-full h-full object-cover"
                width={600}
                height={350}
                quality={90}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

              {/* Plus (+) Icon Button */}
              <div className="absolute top-3 right-3 bg-white text-black p-2 rounded-full shadow-md">
                <FaPlus className="w-4 h-4" />
              </div>

              {/* Title Overlay */}
              <h3 className="relative text-lg sm:text-xl font-semibold z-10">{useCase.title}</h3>
            </div>
          ))}
        </div>
      </section>

    {/* Go Beyond Ordinary Section */}
   <section
  className="relative -mt-6 sm:-mt-12 flex items-center justify-center mx-auto w-[80%] sm:w-full max-w-[65rem] h-[14rem] sm:h-[22rem] rounded-2xl shadow-lg
             bg-no-repeat bg-center bg-[size:200%_auto] md:bg-cover"
  style={{ backgroundImage: "url('/bottom-background.png')" }}
>
  {/* Centered Content */}
  <div className="text-center w-full px-4 sm:px-0">
    <h3 className="text-lg sm:text-4xl font-bold">Go beyond ordinary</h3>
    <p className="mt-2 text-xs sm:text-lg">
      Start your design journey today and try it out for free.
    </p>

    <button className="mt-4 bg-white text-black px-4 sm:px-7 py-2 sm:py-3 rounded-lg text-xs sm:text-lg">
      Create for free
    </button>
  </div>
</section>



    </div>
  );
}
