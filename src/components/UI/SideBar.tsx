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
  tone?: "light" | "dark";
}

const Sidebar: React.FC<SidebarProps> = ({ tbList, tone = "dark" }) => {
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
    <div className="relative bg-transparent z-50">
      <div className="fixed left-0 hidden top-1/2 transform -translate-y-1/2 lg:flex flex-col justify-center items-start backdrop-blur-md">
        <ul className="space-y-2">
          {tbList.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              onClick={() => scrollToSection(item.route)}
            >
              <div
                className={`group flex items-center gap-2 text-[.8rem] font-semibold px-4 py-3 rounded-[9px] transition-all duration-300 relative cursor-pointer hover:bg-transparent ${
                  tone === "dark"
                    ? "text-vl-brown-dark hover:text-vl-brown"
                    : "text-white hover:text-gray-200"
                }`}
              >
                {item.name}
                {/* <span className="absolute right-[-3px] top-[52%] transform -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:text-gray-300"> */}
                <ChevronRight
                  size={20}
                  className={`group-hover:opacity-100 opacity-0 ${
                    tone === "dark" ? "text-vl-brown/70 group-hover:text-vl-brown" : "text-[#A9A9A9] group-hover:text-gray-300"
                  }`}
                  color={tone === "dark" ? "#6f5243" : "#A9A9A9"}
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
