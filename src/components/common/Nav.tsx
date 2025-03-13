"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface NavProps {
  setToggle: (value: boolean) => void;
  toggle: boolean;
}

const Nav = ({ setToggle, toggle }: NavProps) => {
  const links = [
    {
      name: "VModel",
      route: "/vmodel",
      icon: <IoIosArrowDown />,
    },
    {
      name: "Prelura",
      route: "/prelura",
      icon: <IoIosArrowDown />,
    },
    // {
    //   name: "Vell Magazine",
    //   route: "/",
    //   icon: <IoIosArrowDown />,
    // },

    {
      name: "Afrogarm",
      route: "/afrogarm",
    },

    {
      name: "Research",
      route: "/research",
      icon: <IoIosArrowDown />,
    },

    {
      name: "About Us",
      route: "/Aboutus",
      icon: <IoIosArrowDown />,
    },
  ];

  const router = useRouter();
  const pathname = usePathname();

  const navVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const [navBackground, setNavBackground] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".hero-section");
      if (heroSection && window.scrollY > heroSection.clientHeight) {
        setNavBackground("bg-black");
      } else {
        setNavBackground("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`page-container md:static fixed top-0 left-0 z-30 backdrop-blur-sm  md:px-[4rem] px-[1rem] ${navBackground} min-h-[5rem] w-full flex items-center justify-between transition-colors duration-300`}
    >
      <div className="">
        <div
          onClick={() => router.push("/")}
          className="logo-container cursor-pointer"
        >
          <Image
            src={"/icons/voltis.svg"}
            alt="company-logo"
            width={90}
            height={80}
            className="hidden md:block"
          />
          {/* mobile */}
          <Image
            src={"/icons/voltis.svg"}
            alt="company-logo"
            width={85}
            height={85}
            className="md:hidden block"
          />
        </div>
      </div>

      {/* desktop links */}
      <nav className="nav-container lg:flex gap-6 hidden items-center">
        {links.map((item) => (
          <Link
            href={item.route}
            key={item.name}
            className={`${
              item.route === pathname ? "font-bold" : ""
            } card-container hover:text-gray-200 cursor-pointer text-white text-[1rem] flex`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="lg:flex hidden items-center gap-4">
        <button className="outline-none border-none text-[.9rem] text-white">
          Search
        </button>
        <button className="outline-none border-none text-[.9rem] text-white">
          Login
        </button>
      </div>

      <section
        onClick={() => setToggle(true)}
        className="burger-container lg:hidden block"
      >
        <RxHamburgerMenu size={25} color="white" />
      </section>

      {/* mobile nav */}
      <AnimatePresence>
        {toggle && (
          <>
            <motion.div
              className="section-container top-0 absolute md:hidden h-screen bg-black/70 backdrop-blur-lg z-20 left-0 block w-full"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={overlayVariants}
              transition={{ duration: 0.3 }}
              onClick={() => setToggle(false)}
            />
            <motion.nav
              className="nav-container bg-black py-[5rem] h-screen px-[2rem] w-[66%] fixed top-0 left-0 !z-[1000] text-white"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={navVariants}
              transition={{ duration: 0.3 }}
            >
              {links.map((item) => (
                <Link
                  onClick={() => setToggle(false)}
                  href={item.route}
                  key={item.name}
                  className={`${
                    item.route === pathname ? "font-bold" : ""
                  } card-container hover:text-gray-200 mb-[2rem] text-[1.2rem] cursor-pointer !text-white flex`}
                  style={item.route === pathname ? { fontWeight: "bold" } : {}}
                >
                  {item.name}
                </Link>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Nav;
