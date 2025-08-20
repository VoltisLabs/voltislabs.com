"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Filter, ListFilter, Tag, TagsIcon } from "lucide-react"; // Import better icons

interface SidebarProps {
  categories: string[];
  activeCategory: string;
  onCategorySelect: (category: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ categories, activeCategory, onCategorySelect }) => {
  const [isOpen, setIsOpen] = useState(false); // For mobile dropdown
  const [isExpanded, setIsExpanded] = useState(false); // For desktop expansion

  useEffect(() => {
    const handleFocus = () => {
      setIsOpen(false);
      setTimeout(() => setIsOpen(true), 100);
    };

    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, []);

  // Handle category selection and collapse the sidebar
  const handleCategorySelect = (category: string) => {
    onCategorySelect(category);
    setIsExpanded(false); // Collapse after selection
  };

  return (
    <div className="relative bg-transparent z-50">
      {/* Desktop Expandable Sidebar */}
      <div 
        className="fixed left-0 hidden top-1/2 transform -translate-y-1/2 lg:flex flex-col justify-center items-start backdrop-blur-md"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <motion.div
          initial={{ width: "48px", opacity: 0.9 }}
          animate={{ 
            width: isExpanded ? "190px" : "48px",
            opacity: 1,
            x: 0
          }}
          transition={{ duration: 0.3 }}
          className="py-4 rounded-r-lg bg-black/60 backdrop-blur-md border-y border-r border-gray-700 overflow-hidden"
        >
          {/* Collapsed View */}
          {!isExpanded && (
            <motion.div 
              className="h-full flex flex-col items-center justify-center gap-3 py-4"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ListFilter size={20} className="text-white mb-1" />
              <div className="text-[10px] uppercase font-bold tracking-wider text-gray-300 rotate-90 mb-2 my-4 text-center">Categories Filter</div>
              <div className="w-6 h-12 flex flex-col gap-1 items-center mt-2">
                {/* Visual representation of filtered categories */}
                <div className={`w-4 h-1 mt-1 rounded-full ${activeCategory === 'All' ? 'bg-white' : 'bg-gray-600'}`}></div>
                {categories.slice(0, 3).map((_, i) => (
                  <div key={i} className="w-4 h-1 rounded-full bg-gray-600"></div>
                ))}
              </div>
            </motion.div>
          )}
          
          {/* Expanded View */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.2, delay: isExpanded ? 0.1 : 0 }}
            className={`${isExpanded ? "block px-1" : "hidden"}`}
          >
            <div className="flex items-center gap-2 mb-3 px-2">
              <ListFilter size={16} className="text-gray-400" />
              <h3 className="text-sm font-bold uppercase text-gray-400 tracking-wider">Categories</h3>
            </div>
            <ul className="space-y-1">
              {categories.map((category, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                  onClick={() => handleCategorySelect(category)}
                  className="w-full"
                >
                  <div 
                    className={`group flex items-center justify-between w-full px-2 py-2 rounded-md cursor-pointer transition-all duration-300 ${
                      activeCategory === category
                        ? "bg-gray-800/80 text-white"
                        : "text-gray-300 hover:bg-gray-800/30 hover:text-white"
                    }`}
                  >
                    <span className={`text-[.9rem] ${activeCategory === category ? "font-medium" : ""}`}>
                      {category}
                    </span>
                    {activeCategory === category ? (
                      <ChevronRight size={16} className="text-white" />
                    ) : (
                      <ChevronRight
                        size={16}
                        className="text-gray-600 opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Mobile View */}
      <div className="lg:hidden fixed top-24 right-4 z-50">
        <motion.button
          className="flex items-center gap-2 rounded-lg bg-black/80 px-4 py-2 text-white shadow-lg border border-gray-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <ListFilter size={16} className="text-gray-300" />
          <span>Categories</span>
          <ChevronRight 
            size={16} 
            className={`transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} 
          />
        </motion.button>
        
        {isOpen && (
          <motion.div
            className="absolute right-0 mt-2 w-56 rounded-lg bg-black/95 py-2 shadow-xl border border-gray-700"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className={`px-4 py-2 cursor-pointer ${
                  activeCategory === category
                    ? "bg-gray-800 text-white"
                    : "text-gray-300 hover:bg-gray-800/50"
                }`}
                onClick={() => {
                  handleCategorySelect(category);
                  setIsOpen(false);
                }}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {category}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;