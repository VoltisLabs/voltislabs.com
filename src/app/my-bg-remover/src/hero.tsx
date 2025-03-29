"use client";
import Image from "next/image";
import { useState } from "react";
import { Input } from "./components/ui/input";
import { Upload } from "lucide-react";

export default function HeroSection() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="mt-7 relative h-[32rem] bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-white bg-black flex flex-col justify-between overflow-hidden">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-4 text-sm text-white">
        <span className="opacity-80">Home &gt; Studio &gt; Features &gt; Background Remover</span>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col items-center text-center px-6 lg:px-12 mt-8 flex-grow">
        <div className="bg-purple-900 rounded-lg p-6 lg:p-8 shadow-lg max-w-3xl">
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">Free Image Background Remover</h1>
          <p className="text-gray-200">
            Get more out of your photos by making them background-free. Easily remove the background
            from any image with the free online background remover tool.
          </p>

          {/* Upload Button */}
          <div className="mt-6 flex justify-center">
            <label className="cursor-pointer flex items-center bg-green-700 hover:bg-green-800 text-sm text-white py-3 px-4 rounded-lg w-64 justify-center transition duration-300 ease-in-out">
              <Upload className="mr-2" />
              ADD YOUR IMAGE HERE
              <Input
                type="file"
                className="hidden"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
            </label>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="flex flex-wrap gap-4 justify-center text-white mt-6">
          <div className="flex items-center gap-2">
            <span>🖼️</span> Remove Background from Image
          </div>
          <span className="opacity-70">|</span>
          <div className="flex items-center gap-2">
            <span>⚡</span> Accurate, Free, Automatic & Online
          </div>
          <span className="opacity-70">|</span>
          <div className="flex items-center gap-2">
            <span>⏳</span> Done in 5 seconds
          </div>
        </div>
      </div>
    </div>
  );
}
