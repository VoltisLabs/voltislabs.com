"use client";

import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
interface NavProps {
  setToggle: (value: boolean) => void;
}

const Nav = ({ setToggle }: NavProps) => {
  const links = [
    {
      name: "VModel",
      route: "/",
    },
    {
      name: "Prelura",
      route: "/",
    },
    {
      name: "Vell Magazine",
      route: "/",
    },

    {
      name: "Research",
      route: "/",
    },

    {
      name: "About Us",
      route: "/",
    },
  ];

  return (
    <div className="page-container border-b-[1px] border-gray-600 md:px-[4rem] px-[1rem] min-h-[6rem] w-full flex items-center justify-between bg-black">
      <div className="nav-inner-container min-w-[47%] flex items-center justify-between">
        <div className="logo-container cursor-pointer mr-[17rem]">
          <Image
            src={"/image/logo3.png"}
            alt="company-logo"
            width={100}
            height={100}
            className="hover:scale-90 transition-all ease-in-out delay-75"
          />
        </div>

        {/* desktop links */}
        <nav className="nav-container lg:flex gap-6 hidden items-center">
          {links.map((item) => (
            <div
              key={item.name}
              className="card-container hover:underline cursor-pointer text-white text-[1rem]"
            >
              {item.name}
            </div>
          ))}
        </nav>
      </div>

      <div className="md:flex hidden items-center">
        <button className="outline-none border-none text-[.9rem] text-white">
          Search
        </button>
        <button className="outline-none border-none text-[.9rem] text-white">
          Login
        </button>
      </div>

      <section
        onClick={() => setToggle(true)}
        className="burger-container md:hidden block"
      >
        <RxHamburgerMenu size={25} color="white" />
      </section>
    </div>
  );
};

export default Nav;
