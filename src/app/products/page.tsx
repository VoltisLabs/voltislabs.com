'use client';
import React, { useState } from 'react';
import { products } from '../data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Page = () => {
  const productsWithImages = products.map((p: any) => ({
    ...p,
    images: p.images || [],
  }));

  const [selectedIdx, setSelectedIdx] = useState(0);
  const [imageIdx, setImageIdx] = useState(0);

  const selectedProduct = productsWithImages[selectedIdx];
  const images = selectedProduct.images;

  const handleSelect = (idx: number) => {
    setSelectedIdx(idx);
    setImageIdx(0);
  };

  const handlePrev = () => {
    setImageIdx(i => (i === 0 ? images.length - 1 : i - 1));
  };

  const handleNext = () => {
    setImageIdx(i => (i === images.length - 1 ? 0 : i + 1));
  };

  const handleThumbClick = (idx: number) => {
    setImageIdx(idx);
  };

  return (
    <div className="pt-[5.3rem] px-4 md:px-6 xl:px-0 mx-auto xl:w-[75rem] flex flex-col xl:flex-row gap-4 md:gap-6 xl:gap-8">
      {/* Preview Window */}
      <div className="w-full xl:w-2/3 flex flex-col rounded-lg shadow-2xl border border-[#23272F]">
        {/* Main image */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[650px] rounded-lg flex items-center justify-center group">
          {images.length > 0 && (
            <img
              src={images[imageIdx]}
              alt={selectedProduct.message}
              className={`${selectedProduct.message === 'Spinnersonic' ? 'object-contain' : 'object-cover'} w-full h-full rounded-xl`}
            />
          )}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all z-10"
              >
                <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all z-10"
              >
                <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-2 my-3">
          {images.slice(0, 4).map((img: string, idx: number) => (
            <button
              key={img}
              onClick={() => handleThumbClick(idx)}
              className={`w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-14 xl:w-32 xl:h-16 rounded-lg overflow-hidden border-2 ${imageIdx === idx ? 'border-[#90BEFF]' : 'border-transparent'} bg-[#23272F] flex items-center justify-center transition-all relative`}
            >
              <img src={img} alt={`Thumbnail ${idx}`} className="object-cover w-full h-full" />
              {images.length > 4 && idx === 3 && (
                <span className="absolute inset-0 bg-black/60 text-white flex items-center justify-center text-xs font-semibold">
                  +{images.length - 3}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Description and View Button */}
        <div className="w-full flex flex-col px-3 pb-4">
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1">{selectedProduct.message}</h2>
          <p className="text-gray-400 text-sm whitespace-pre-line mb-3">{selectedProduct.description}</p>
          <div className="flex justify-end">
            <a
              href={selectedProduct.link}
              className="px-3 md:px-4 py-2 rounded-lg bg-[#23272F] text-[#90BEFF] font-semibold text-sm hover:bg-[#222b3a] transition"
            >
              View More
            </a>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="w-full xl:w-1/3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-2 gap-4">
        {productsWithImages.map((product: any, idx: number) => (
          <div
            key={product.message}
            onClick={() => handleSelect(idx)}
            className={`rounded-lg shadow-md border border-[#23272F] group cursor-pointer hover:scale-[1.03] transition-all duration-200 ${selectedIdx === idx ? 'ring-2 ring-[#90BEFF]' : ''}`}
          >
            <div className="relative w-full aspect-square overflow-hidden">
              <img
                src={product.img}
                alt={product.message}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-2">
              <h2 className="text-sm sm:text-base font-semibold text-white truncate mb-1">{product.message}</h2>
              <p className="text-gray-400 text-xs line-clamp-4">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
