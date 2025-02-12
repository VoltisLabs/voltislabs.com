"use client";

import Image from "next/image";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  const links = [
    {
      name: "About Us",
      route: "/",
    },
    {
      name: "Projects",
      route: "/",
    },
    {
      name: "Contacts",
      route: "/",
    },
  ];

  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="page-container shadow-md md:px-[2rem] px-[1rem] min-h-[4rem] fixed top left-0 w-full flex items-center justify-between">
      <div className="logo-container cursor-pointer">
        <Image
          src={"/image/logo.jpeg"}
          alt="company-logo"
          width={70}
          height={70}
          className="hover:scale-90 transition-all ease-in-out delay-75"
        />
      </div>

      {/* desktop links */}
      <nav className="nav-container md:flex gap-3 hidden items-center">
        {links.map((item) => (
          <div
            key={item.name}
            className="card-container hover:underline cursor-pointer text-black text-[.9rem]"
          >
            {item.name}
          </div>
        ))}
      </nav>

      <section
        onClick={() => setToggle(!toggle)}
        className="burger-container md:hidden block"
      >
        <RxHamburgerMenu size={25} color="black" />
      </section>

      {/* mobile links */}

      {toggle && (
        <nav className="nav-container md:px-[2rem] px-[1rem] py-[2rem] md:hidden block absolute top-[100%] min-h-[10rem] left-0 w-full bg-gray-50">
          {links.map((item) => (
            <div
              key={item.name}
              className="card-container mb-[1rem] text-[1rem] text-black"
            >
              {item.name}
            </div>
          ))}
        </nav>
      )}
    </div>
  );
};

export default Nav;
