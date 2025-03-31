"use client";
import Image from "next/image";
import { useState } from "react";
import { Input } from "./components/ui/input";
import { Upload } from "lucide-react";
import LearnMoreBtn from "../../../components/UI/LearnMoreBtn";


export default function HeroSection() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="mt-5 relative h-[36rem] bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-white bg-black flex flex-col justify-between overflow-hidden md-2 rounded-lg shadow-2xl sm:px-4 md:px-6 lg:px-12">

      {/* Breadcrumbs */}
      <div className="container sm:px-4 md:px-6 lg:px-12 mx-auto px-4 py-4 text-sm text-white">
        <span className="opacity-80">Home &gt; Studio &gt; Features &gt; Background Remover</span>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col items-center text-center px-6 lg:px-12 mt-8 flex-grow">
        <div className="bg-purple-900 rounded-lg p-6 lg:p-8 shadow-lg max-w-3xl">
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">Free Image Background Remover</h1>
          <p className="text-gray-200">
          Unlock more from your photos by removing the background in seconds. Instantly create clean, background-free images with our online background remover.
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
        <div className="flex flex-wrap gap-4 justify-center text-white mt-3">
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

        <div className="h-full md:w-[50%] md:p-7 p-2 flex text-white justify-center items-end">
        <LearnMoreBtn
          text="Visit Website"
          borderColor="border-white"
          textColor="text-white"
          route="http://bgremover.uk" />
      </div>

      </div>
    </div>
  );
}
