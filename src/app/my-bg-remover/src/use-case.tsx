import { FaChevronCircleRight, FaChevronLeft,  FaPlus} from "react-icons/fa";
import Image from "next/image";

const useCases = [
  { title: "Studio for Crafters", image: "/studio1.jpg" },
  { title: "Studio for Educators", image: "/studio3.png" },
  { title: "Studio for Print on Demand", image: "/studio-t-shirt.png" },
  { title: "Studio for Business", image: "/studio2.jpg" },
];

export default function StudioPage() {
  return (
    <div className="flex flex-col items-center text-white">

      {/* Studio Use Cases Section */}
      <section className="relative py-16 px-12 bg-black rounded-4xl w-full max-w-[96rem] text-center">
        <h2 className="text-4xl font-bold">Studio use cases</h2>

        {/* Use Case Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto mt-12 max-w-6xl">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="relative p-10 flex items-center justify-center rounded-2xl overflow-hidden shadow-lg w-[36rem] h-[20rem] bg-gray-900 transition-transform duration-300 hover:scale-105"
            >
              {/* Background Image */}
              <Image
                src={useCase.image}
                alt={useCase.title}
                className="absolute inset-0  h-full object-cover text-gray-600"
                width={600}
                height={350}
                quality={90}
                objectFit="fill"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

              {/* Plus (+) Icon Button */}
              <div className="absolute top-4 right-4 bg-white text-black p-3 rounded-full shadow-md">
                <FaPlus className="w-5 h-5" />
              </div>

              {/* Title Overlay */}
              <h3 className="relative text-2xl font-semibold z-10">{useCase.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Go Beyond Ordinary Section */}
      <section
        className="relative -mt-14 flex items-center justify-center mx-auto w-[75rem] h-[25rem] bg-cover bg-center rounded-2xl shadow-lg"
        style={{ backgroundImage: "url('/bottom-background.png')" }}
      >
       {/* Centered Content */}
    <div className="text-center w-full">
      <h3 className="text-5xl font-bold -mt-20">Go beyond ordinary</h3>
      <p className="mt-4 text-lg">
        Start your design journey today and try it out for free.
      </p>

      <button className="mt-6 bg-white text-black px-8 py-3 rounded-lg text-lg">
        Create for free
      </button>
    </div>
      </section>
    </div>
  );
}
