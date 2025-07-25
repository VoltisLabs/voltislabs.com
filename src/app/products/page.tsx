'use client'
import React, { useState } from 'react'
import { products } from '../data'
import { ChevronLeft, ChevronRight } from 'lucide-react';

const page = () => {
    // Add images array fallback for each product
    const productsWithImages = products.map((p: any) => ({
        ...p,
        images: p.images || [],
    }));
    const [selectedIdx, setSelectedIdx] = useState(0);
    const selectedProduct = productsWithImages[selectedIdx];
    const [imageIdx, setImageIdx] = useState(0);
    const images = selectedProduct.images;

    // Handle card click
    const handleSelect = (idx: number) => {
        setSelectedIdx(idx);
        setImageIdx(0);
    };
    // Handle carousel navigation
    const handlePrev = () => {
        setImageIdx(i => (i === 0 ? images.length - 1 : i - 1));
    };
    const handleNext = () => {
        setImageIdx(i => (i === images.length - 1 ? 0 : i + 1));
    };
    // Handle thumbnail click
    const handleThumbClick = (idx: number) => {
        setImageIdx(idx);
    };

    return (
        <div className="pt-[5.3rem] px-4 md:px-6 lg:px-10 xl:px-0 mx-auto xl:w-[75rem] flex flex-col xl:flex-row gap-4 md:gap-6 xl:gap-8">
            {/* Preview Window */}
            <div className="w-full xl:w-2/3 flex flex-col rounded-lg shadow-2xl border border-[#23272F] relative">
                {/* Main image area */}
                <div className="relative w-full h-[650px] rounded-lg flex items-start justify-center group">
                    {images.length > 0 && (
                        <img
                            src={images[imageIdx]}
                            alt={selectedProduct.message}
                            className={`${selectedProduct.message === "Spinnersonic"? "object-contain " : "object-cover" } w-full h-full rounded-xl shadow-lg`}
                        />
                    )}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={handlePrev}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-1.5 md:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 z-10"
                            >
                                <ChevronLeft size={20} className="md:w-7 md:h-7" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-1.5 md:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 z-10"
                            >
                                <ChevronRight size={20} className="md:w-7 md:h-7" />
                            </button>
                        </>
                    )}
                </div>
                
                {/* Thumbnails row */}
                <div className="flex flex-row gap-2 md:gap-3 mb-4 md:mb-6 mt-2 w-full justify-center px-2">
                    {images.slice(0, 4).map((img: string, idx: number) => (
                        <button
                            key={img}
                            onClick={() => handleThumbClick(idx)}
                            className={`w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-14 xl:w-32 xl:h-16 rounded-lg overflow-hidden border-2 ${imageIdx === idx ? 'border-[#90BEFF]' : 'border-transparent'} bg-[#23272F] flex items-center justify-center transition-all relative`}
                        >
                            <img src={img} alt={selectedProduct.message + ' thumb'} className="object-cover w-full h-full" />
                            {images.length > 4 && idx === 3 && (
                                <span className="absolute inset-0 bg-black/60 text-white flex items-center justify-center font-bold text-[10px] sm:text-xs">+{images.length - 3}</span>
                            )}
                        </button>
                    ))}
                </div>
                
                {/* Description and button row - Proper separation */}
                <div className="w-full flex flex-col px-2 pb-4 xl:pb-6">
                    {/* Description content */}
                    <div className="flex-1 mb-4">
                        <h2 className="text-lg md:text-xl font-bold text-white mb-1">{selectedProduct.message}</h2>
                        <p className="text-gray-400 text-xs mb-0 whitespace-pre-line">{selectedProduct.description}</p>
                    </div>
                    
                    {/* Button area - always at bottom right */}
                    <div className="flex justify-end">
                        <a
                            href={selectedProduct.link}
                            className="px-3 md:px-4 py-2 rounded-lg bg-[#23272F] text-[#90BEFF] font-semibold text-sm hover:bg-[#222b3a] transition shadow-lg"
                        >
                            View More
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Cards Grid */}
            <div className="w-full xl:w-1/3 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-2 gap-3 md:gap-4 h-fit xl:self-start">
                {productsWithImages.map((product: any, idx: number) => (
                    <div
                        key={product.message}
                        onClick={() => handleSelect(idx)}
                        style={{ minHeight: '290px', maxHeight: '300px' }}
                        className={`rounded-lg shadow-lg overflow-hidden flex flex-col border border-[#23272F] group cursor-pointer transition-all duration-200 hover:scale-[1.03] ${selectedIdx === idx ? 'ring-2 ring-[#90BEFF]' : ''} min-h-[140px] max-h-[160px] sm:min-h-[150px] sm:max-h-[170px] xl:min-h-[160px] xl:max-h-[180px]`}
                    >
                        <div className="relative w-full aspect-square overflow-hidden">
                            <img
                                src={product.img}
                                alt={product.message}
                                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                
                            />
                        </div>
                        <div className="flex flex-col flex-1 p-1.5 sm:p-2">
                            <h2 className="text-sm sm:text-base font-bold text-white mb-1 truncate">{product.message}</h2>
                            <p className="text-gray-400 text-[10px] sm:text-xs mb-1 line-clamp-5">{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default page