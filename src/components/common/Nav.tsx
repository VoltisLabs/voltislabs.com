import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";

interface NavProps {
  setToggle: (value: boolean) => void;
  toggle: boolean;
}

const Nav = ({ setToggle, toggle }: NavProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const links = [
    {
      category: "Fashion",
      image: "/images/fashion.jpg",
      items: [
        { name: "Prelura", route: "https://prelura.com" },
        { name: "Outfeatz", route: "https://outfeatz.com" },
        { name: "Afrogarm", route: "https://afrogarm.com" },
      ],
    },
    {
      category: "Fun and Casual",
      image: "/images/fun-casual.jpg",
      items: [{ name: "Spinnersonic", route: "https://spinnersonic.com" }],
    },
    {
      category: "Social Media",
      image: "/images/social.jpg",
      items: [{ name: "VModel", route: "https://vmodel.com" }],
    },
    {
      category: "Productivity",
      image: "/images/productivity.jpg",
      items: [{ name: "BG Remover", route: "https://bg-remover.com" }],
    },
  ];

  return (
    <div className="fixed top-0 left-0 z-30 backdrop-blur-sm bg-black min-h-[5rem] w-full flex items-center justify-between px-4 md:px-16 transition-colors duration-300">
      {/* Logo */}
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <a href="https://voltis.com">
          <Image src="/icons/voltis.svg" alt="logo" width={90} height={80} className="hidden md:block" />
          <Image src="/icons/voltis.svg" alt="logo" width={85} height={85} className="md:hidden block" />
        </a>
      </motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-8 items-center">
        {links.map((category) => (
          <div
            key={category.category}
            className="relative group"
            onMouseEnter={() => setActiveCategory(category.category)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <a href="#" className="text-white text-[1rem] font-medium hover:text-gray-200">
              {category.category}
            </a>

            {activeCategory === category.category && (
              <motion.div
                className="absolute top-full left-0 bg-black text-white p-4 shadow-lg rounded-lg w-[24rem] flex gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                {/* <Image
                  src={category.image}
                  alt={category.category}
                  width={100}
                  height={100}
                  className="rounded-lg w-[6rem] h-[6rem] object-cover"
                /> */}
                <ul className="space-y-2 flex-1">
                  {category.items.map((item) => (
                    <li key={item.name}>
                      <a href={item.route} target="_blank" rel="noopener noreferrer" className="block hover:text-gray-200">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        ))}
      </nav>

      {/* Action Buttons */}
      <div className="hidden lg:flex items-center gap-4">
        <a href="https://voltis.com/search" className="text-white text-sm">
          Search
        </a>
        <a href="https://voltis.com/login" className="text-white text-sm">
          Login
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div onClick={() => setToggle(true)} className="lg:hidden cursor-pointer">
        <RxHamburgerMenu size={25} color="white" />
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {toggle && (
          <>
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-lg z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setToggle(false)}
            />
            <motion.nav
              className="fixed top-0 left-0 h-screen w-[70%] bg-black text-white py-20 px-6 z-50"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {links.map((category) => (
                <div key={category.category} className="mb-6">
                  <h3 className="font-bold text-lg mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.route}
                          target="_blank"
                          rel="noopener noreferrer"
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
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Nav;
