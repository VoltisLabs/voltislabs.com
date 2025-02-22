"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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

  return (
    <div className="relative hidden sm:flex">
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col justify-center items-start pl-6">
        <ul className="space-y-4">
          {tbList.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Link
                href={item.route}
                className="group flex items-center gap-2 text-white text-base font-semibold px-4 py-2 rounded-full  hover:shadow-lg transition-all duration-300 relative"
              >
                {item.name}
                {/* Static arrow on hover */}
                <span className="absolute right-[-25px] top-1/2 transform -translate-y-1/2 opacity-0  group-hover:opacity-100 transition-opacity duration-300">
                  <ChevronRight size={20} className="text-white opacity-60" />
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
