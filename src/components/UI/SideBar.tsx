"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react"; // Arrow Icon

interface MenuItem {
  name: string;
  route: string;
}

interface SidebarProps {
  tbList: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ tbList }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleFocus = () => {
      setIsOpen(false);
      setTimeout(() => setIsOpen(true), 100); // Triggers animation on refocus
    };

    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Adjust this value based on your nav bar height
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="relative ">
      <div className="fixed left-0 hidden top-1/2 transform -translate-y-1/2 lg:flex flex-col justify-center items-start">
        <ul className="space-y-2">
          {tbList.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              onClick={() => scrollToSection(item.route)}
            >
              <div className="group flex hover:text-gray-200 items-center gap-2 text-white text-[.8rem] font-semibold px-4 py-3 rounded-[9px] transition-all duration-300 relative cursor-pointer hover:bg-transparent">
                {item.name}
                {/* <span className="absolute right-[-3px] top-[52%] transform -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:text-gray-300"> */}
                <ChevronRight
                  size={20}
                  className="text-[#A9A9A9] group-hover:opacity-100 opacity-0 group-hover:text-gray-300"
                  color="#A9A9A9"
                />
                {/* </span> */}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
