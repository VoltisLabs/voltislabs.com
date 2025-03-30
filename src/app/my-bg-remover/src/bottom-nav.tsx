"use client";
import { useState, useEffect, useRef } from "react";
import { Upload } from "lucide-react";
import { Input } from "./components/ui/input";

export default function BottomNav() {
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY > lastScrollY.current); // Show when scrolling down
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [file, setFile] = useState<File | null>(null);

  return (
    <nav
      className={`fixed bottom-0 left-0 w-full h-[80px] bg-black shadow-lg border-t py-3 text-center transition-transform duration-200 ease-out ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {/* Upload Button */}
      <div className="mt-2 flex justify-center px-4 sm:px-6">
        <label className="cursor-pointer flex items-center bg-white hover:bg-gray-200 text-sm text-black py-3 px-4 rounded-lg w-[90%] max-w-[400px] justify-center transition-all duration-300 ease-in-out">
          <Upload className="mr-2 text-black" />
          <span className="font-medium">ADD YOUR IMAGE HERE</span>
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
