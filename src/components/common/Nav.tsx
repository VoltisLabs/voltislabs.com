import { useEffect, useState } from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface NavProps {
  setToggle: (value: boolean) => void;
  toggle: boolean;
}

const Nav = ({ setToggle, toggle }: NavProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const links = [
    {
      category: "Fashion",
      items: [
        { name: "Prelura", route: "/prelura" },
        { name: "Outfeatz", route: "/outfeatz" },
        { name: "Afrogarm", route: "/afrogarm" },
      ],
    },
    {
      category: "Games",
      items: [
        { name: "Game Home", route: "https://voltislabsgames.com/" },
        { name: "Spinnersonic", route: "/spinner" },
        { name: "Spellcheck", route: "/spellcheck" },
      ],
    },
    {
      category: "Lifestyle",
      items: [
        {
          name: "PONY", route: "https://myponyapp.com/"
        }
      ]
    },
    {
      category: "Social Media",
      items: [{ name: "VModel", route: "/vmodel" }],
    },
    {
      category: "Company",
      items: [{ name: "Work with us", route: "/work-with-us" }],
    },
    {
      category: "Productivity",
      items: [
        { name: "Toolkit", route: "/bg" },
        { name: "Loyalty Bot", route: "/loyalty_bot" },
      ],
    },
  ];

  useEffect(() => {
    if (toggle) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [toggle]);

  return (
    <div className="fixed bg-[#0D1117] text-sm top-0 left-0 z-40 backdrop-blur-sm bg-black min-h-[5rem] w-full flex items-center justify-between px-6 md:px-16">
      {/* Logo */}
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Link href="/">
          <Image src="/icons/voltis.svg" alt="logo" width={90} height={80} className="hidden md:block" />
          <Image src="/icons/voltis.svg" alt="logo" width={85} height={85} className="md:hidden block" />
        </Link>
      </motion.div>

      {/* Centered Navigation */}
      <nav className="hidden lg:flex flex-row items-center gap-8 absolute left-1/2 transform -translate-x-1/2 text-nowrap pl-10 xl:pl-0">
        <a href="/" className="text-white text-[1rem] font-medium pb-1 hover:text-gray-400">
          Home
        </a>
        <div
          className="group inline-block relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <Link href="/products">
            <button className="text-white text-[1rem] font-medium pb-1 hover:text-gray-400 flex items-center gap-1">
              Products
            </button>
          </Link>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                className="absolute top-full left-0 right-0 text-white p-4 flex flex-col items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="bg-[#0D1117] text-sm p-4 w-fit rounded-lg border border-gray-700 whitespace-nowrap">
                  <div className="flex flex-row gap-6 justify-center">
                    {links.map((category) => (
                      <div key={category.category} className="relative flex flex-col items-center">
                        <div className="text-gray-600 text-base font-bold cursor-pointer hover:text-white">
                          {category.category}
                        </div>
                        <div className="mt-2">
                          <ul className="flex flex-col gap-2">
                            {category.items.map((item) => (
                                <li key={item.name}>
                              <a
                                href={item.route}
                                className="text-sm text-white transition-colors duration-200 hover:text-gray-400"
                                target={item.route.startsWith("http") ? "_blank" : undefined}
                                rel={item.route.startsWith("http") ? "noopener noreferrer" : undefined}
                              >
                                {item.name}
                              </a>
                            </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <a href="/academy" className="text-white text-[1rem] font-medium pb-1 hover:text-gray-400">
          VL Academy
        </a>
        <a href="/work-with-us" className="text-white text-[1rem] font-medium pb-1 hover:text-gray-400">
          Work with us
        </a>
        <a href="/partners" className="text-white text-[1rem] font-medium pb-1 hover:text-gray-400">
          Partners
        </a>
        <a href="/Aboutus" className="text-white text-[1rem] font-medium pb-1 hover:text-gray-400">
          About Us
        </a>
        <a href="/blog" className="text-white text-[1rem] font-medium pb-1 hover:text-gray-400">
          News Blog
        </a>
        <a href="/contact-us" className="text-white text-[1rem] font-medium pb-1 hover:text-gray-400">
          Contact Us
        </a>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center space-x-3 sm:space-x-5 md:space-x-6">
        <a href="/" className="text-white text-[1rem] font-medium pb-1 hover:text-gray-400">
          Home
        </a>
        <a href="/products" className="text-white text-sm">
          Products
        </a>

        <button className="text-white text-1xl" onClick={() => setToggle(!toggle)}>
          <RxHamburgerMenu size={25} />
        </button>
      </div>

      <AnimatePresence>
        {toggle && (
          <>
            {/* Sidebar Navigation */}
            <motion.nav
              className="fixed top-0 left-0 h-screen w-[60%] sm:w-[50%] bg-[#0D1117] text-white py-20 px-6 z-50 flex flex-col"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="absolute top-5">
                <Image src="/icons/voltis.svg" alt="logo" width={75} height={75} className="md:hidden block" />
              </span>
              <button className="absolute top-5 right-6 text-white text-2xl" onClick={() => setToggle(false)}>
                ✕
              </button>

              <div className="flex-grow max-h-[35rem] py-5 no-scrollbar overflow-y-auto">
                {links.map((category) => (
                  <div key={category.category} className="mb-6">
                    <h3 className="text-gray-600 font-bold text-lg mb-4">{category.category}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item) => (
                       <li key={item.name}>
    <a
      href={item.route}
      className="block hover:text-gray-200"
      onClick={() => setToggle(false)}
      target={item.route.startsWith("http") ? "_blank" : undefined}
      rel={item.route.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {item.name}
    </a>
  </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="flex flex-col space-y-2">
                  <a onClick={() => setToggle(false)} href="/academy" className="text-white text-[1rem] font-medium pb-1 hover:text-gray-400">
                    VL Academy
                  </a>
                  <a onClick={() => setToggle(false)} href="/partners" className="text-white text-[1rem] font-medium pb-1 hover:text-gray-400">
                    Partners
                  </a>
                  <a onClick={() => setToggle(false)} href="/blog" className="text-white text-[1rem] font-medium pb-1 hover:text-gray-400">
                    News Blog
                  </a>
                  <a onClick={() => setToggle(false)} href="/contact-us" className="text-white text-[1rem] font-medium pb-1 hover:text-gray-400">
                    Contact Us
                  </a>
                </div>
              </div>

              <div className="absolute bottom-0 pl-6 left-0 w-full bg-[#0D1117] py-4 border-t border-gray-700">
                <p className="text-white text-sm">
                  © 2025 Voltis Labs. <br /> All rights reserved.
                </p>
              </div>
            </motion.nav>

            {/* Blurred backdrop covering remaining 40% / 50% */}
            <motion.div
              className="fixed top-0 right-0 h-screen w-[40%] sm:w-[50%] bg-black/30 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setToggle(false)}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Nav;
