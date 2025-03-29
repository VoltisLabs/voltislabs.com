import { useState } from "react";
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
      category: "Fun and Casual",
      items: [{ name: "Spinnersonic", route: "/spinner" }],
    },
    {
      category: "Social Media",
      items: [{ name: "VModel", route: "/vmodel" }],
    },
    {
      category: "Productivity",
      items: [{ name: "BG Remover", route: "/bg" }],
    },
    {
      category: "Entertainment",
      items: [{ name: "AMG records", route: "/amg" }],
    },
  ];

  return (
    <div className="fixed bg-[#0D1117] text-sm top-0 left-0 z-30 backdrop-blur-sm bg-black min-h-[5rem] w-full flex items-center justify-between px-6 md:px-16">
      
      {/* Logo */}
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Link href="/">
          <Image src="/icons/voltis.svg" alt="logo" width={90} height={80} className="hidden md:block" />
          <Image src="/icons/voltis.svg" alt="logo" width={85} height={85} className="md:hidden block" />
        </Link>
      </motion.div>

      {/* Centered Navigation */}
      <nav className="hidden lg:flex flex-row items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
        
        {/* Products Dropdown */}
        <div
          className="group inline-block relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button className="text-white text-[1rem] font-medium pb-1 hover:text-gray-400 flex items-center gap-1">
            Products
          </button>

          {/* Dropdown */}
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
                  {/* Categories & Items */}
                  <div className="flex flex-row gap-6 justify-center">
                    {links.map((category) => (
                      <div key={category.category} className="relative flex flex-col items-center">
                        <div className="text-white text-base font-bold cursor-pointer hover:text-gray-400">
                          {category.category}
                        </div>
                        <div className="mt-2">
                          <ul className="flex flex-col gap-2">
                            {category.items.map((item) => (
                              <li key={item.name}>
                                <a href={item.route} className="text-sm text-white transition-colors duration-200 hover:text-gray-400">
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

        {/* About Us */}
        <a href="/Aboutus" className="text-white text-[1rem] font-medium pb-1 hover:text-gray-400">
          About Us
        </a>
      </nav>
      
      {/* Mobile Navigation */}
<div className="lg:hidden flex items-center space-x-6">
  {/* Always visible links */}
  <a href="/products" className="text-white text-lg text-sm" onClick={(e) => {
    e.preventDefault(); // Prevent default link behavior
    setToggle(true); // Open hamburger menu
  }}>
    Products
  </a>

  <a href="/Aboutus" className="text-white text-lg text-sm">
    About Us
  </a>

  {/* Hamburger Icon (Mobile) */}
  <button className="text-white text-1xl" onClick={() => setToggle(!toggle)}>
    <RxHamburgerMenu size={25} />
  </button>
</div>

<AnimatePresence>
  {toggle && (
    <>
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-lg z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => setToggle(false)} // Close menu when clicking outside
      />

      {/* Sidebar Navigation */}
      <motion.nav
        className="fixed top-0 left-0 h-screen w-[60%] sm:w-[50%] bg-[#0D1117] text-white py-20 px-6 z-50 flex flex-col justify-between"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button className="absolute top-5 right-6 text-white text-2xl" onClick={() => setToggle(false)}>
          ✕
        </button>

        {/* Navigation Links */}
        <div className="mt-12">
          {links.map((category) => (
            <div key={category.category} className="mb-6">
              <h3 className="font-bold text-lg mb-4">{category.category}</h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.route}
                      className="block hover:text-gray-200"
                      onClick={() => setToggle(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer */}
        <hr className="border-t border-gray-700 my-6" />
        <p className="text-center pb-10 text-white mt-10 text-sm">
          © 2025 Voltis Labs. <br /> All rights reserved.
        </p>
      </motion.nav>
    </>
  )}
</AnimatePresence>

    </div>
  );
};

export default Nav;
