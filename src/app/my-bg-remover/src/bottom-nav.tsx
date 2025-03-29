"use client";
import { useState, useEffect, useRef } from "react";
import { Upload } from "lucide-react";
import { Input } from "./components/ui/input";

export default function BottomNav() {
  const [isVisible, setIsVisible] = useState(false); // Initially hidden
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current) {
        setIsVisible(true); // Show on scroll down
      } else {
        setIsVisible(false); // Hide on scroll up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [file, setFile] = useState<File | null>(null);

  return (
    <nav
      className={`fixed bottom-0 left-0 w-full h-[90px] bg-black shadow-lg border-t py-4 text-center transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
         {/* Upload Button */}
         <div className="mt-2 flex justify-center">
          <label className="cursor-pointer flex items-center bg-white hover:bg-green-800 text-sm text-white py-3 px-4 rounded-lg w-64 justify-center transition duration-300 ease-in-out">
            <Upload className="mr-2 text-black" />
          <span className="text-black"> ADD YOUR IMAGE HERE</span>
            <Input
              type="file"
              className="hidden"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </label>
        </div>

    </nav>
  );
}
