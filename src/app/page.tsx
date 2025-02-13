import { IoIosSearch } from "react-icons/io";
export default function Home() {
  return (
    <div className="page-container bg-black w-full min-h-screen">
      <section className="hero-section md:px-[4rem] min-h-[25rem] flex items-end justify-end px-[1rem] pt-[6rem]">
        <div className="input-container bg-[#1F1F1F] flex items-center rounded-full md:w-[70%] w-[90%] mb-[8rem] mx-auto h-[4rem]">
          <div className="icon-container flex items-center justify-center w-[4rem]">
            <IoIosSearch size={30} color="gray" />
          </div>

          <input
            type="text"
            className="outline-none text-gray-100 text-[16px] md:placeholder:text-[1.15rem] placeholder:text-[.98rem] border-none bg-transparent w-[80%]"
            placeholder="Search Popular  Influencers..."
          />
        </div>
      </section>
    </div>
  );
}
