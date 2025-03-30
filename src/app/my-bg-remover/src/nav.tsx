"use client";
import React, { useState } from "react";
import { FiSearch, FiChevronDown, FiFile } from "react-icons/fi";

export const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (

    <nav className="px-6 py-2 border-b bg-black"
    >
      {/* Top Section: Logo, Search Bar, My Projects, Create a Design */}
      <div className="flex items-center justify-between pb-2">

        {/* Left Section - Logo */}
        <div className="flex items-center space-x-1">
          <span className="text-2xl font-bold text-white">BG Remover</span>
          <span className="text-purple-500">⭐</span>
        </div>

        {/* Search Bar (Centered) */}
        <div className="flex-1 max-w-5xl mx-auto relative">
          <FiSearch className="text-white absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />

          <input
            type="text"
            placeholder=" Search Templates"
            className="w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none placeholder-white"
          />
        </div>

        {/* Right Section - My Projects + Create a Design */}
        <div className="flex flex-row items-center gap-6">

          <button className="flex items-center gap-2 text-white">
            <FiFile />
            My Projects
          </button>

          <div className="flex flex-col items-center">
            {/* Create a Design Button */}
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md font-medium">
              Create a design
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-t border-gray-300 mb-5" />

      {/* Bottom Section: Navigation Links */}
<div className="flex justify-between items-center w-full">
  {/* Left-aligned navigation links */}
  <div className="flex space-x-6">
    <span className="text-white cursor-pointer">Templates</span>

    {/* Features Dropdown */}
    <div
      className="relative"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <span className="flex items-center gap-1 text-white cursor-pointer">
        Features <FiChevronDown className="text-white" />
      </span>
      {isDropdownOpen && (
        <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md p-2">
          <a href="#" className="block px-4 py-2 text-white hover:bg-gray-100">
            Background Remover
          </a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            AI Editor
          </a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Magic Resize
          </a>
        </div>
      )}
    </div>
  </div>

  {/* Browse Assets (Pushed to the right) */}
  <a href="#" className="text-white text-sm font-semibold font-medium">
    Browse assets →
  </a>
</div>
</nav>
  );
};
