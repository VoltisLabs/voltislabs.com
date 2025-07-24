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
        <div className="pt-[5.3rem] px-4 md:px-10 xl:px-0 mx-auto w-[75rem] flex flex-row gap-8">
        {/* Preview Window (Left) */}
        <div className="w-2/3 flex flex-col rounded-lg shadow-2xl border border-[#23272F] relative">
            {/* Main image area - FIXED: Changed from items-center justify-center to items-start justify-center */}
            <div className="relative w-full h-[300px] rounded-lg flex items-start justify-center group">
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
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 z-10"
                            >
                                <ChevronLeft size={28} />
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 z-10"
                            >
                                <ChevronRight size={28} />
                            </button>
                        </>
                    )}
                </div>
                {/* Thumbnails row */}
                <div className="flex flex-row gap-3 mb-6 mt-2 w-full justify-center">
                    {images.slice(0, 4).map((img: string, idx: number) => (
                        <button
                            key={img}
                            onClick={() => handleThumbClick(idx)}
                            className={`w-32 h-16 rounded-lg overflow-hidden border-2 ${imageIdx === idx ? 'border-[#90BEFF]' : 'border-transparent'} bg-[#23272F] flex items-center justify-center transition-all`}
                        >
                            <img src={img} alt={selectedProduct.message + ' thumb'} className="object-cover w-full h-full" />
                            {images.length > 4 && idx === 3 && (
                                <span className="absolute inset-0 bg-black/60 text-white flex items-center justify-center font-bold text-xs">+{images.length - 3} more</span>
                            )}
                        </button>
                    ))}
                </div>
                {/* Description and button row */}
                <div className="w-full flex flex-row items-center justify-between gap-4 px-2 relative">
                    <div className="flex-1">
                        <h2 className="text-xl font-bold text-white mb-1">{selectedProduct.message}</h2>
                        <p className="text-gray-400 text-xs mb-0 whitespace-pre-line truncate line-clamp-6">{selectedProduct.description}</p>
                    </div>
                    <a
                        href={selectedProduct.link}
                        className="absolute -bottom-10 right-4 px-4 py-2 rounded-lg bg-[#23272F] text-[#90BEFF] font-semibold text-sm hover:bg-[#222b3a] transition shadow-lg"
                    >
                        View More
                    </a>
                </div>
            </div>
            {/* Cards Grid (Right) */}
            <div className="w-1/3 grid grid-cols-2 gap-4 h-fit self-start">
                {productsWithImages.map((product: any, idx: number) => (
                    <div
                        key={product.message}
                        className={` rounded-lg shadow-lg overflow-hidden flex flex-col border border-[#23272F] group cursor-pointer transition-all duration-200 hover:scale-[1.03] ${selectedIdx === idx ? 'ring-2 ring-[#90BEFF]' : ''}`}
                        onClick={() => handleSelect(idx)}
                        style={{ minHeight: '160px', maxHeight: '180px' }}
                    >
                        <div className="relative w-full aspect-square overflow-hidden">
                            <img
                                src={product.img}
                                alt={product.message}
                                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-col flex-1 p-2">
                            <h2 className="text-base font-bold text-white mb-1 truncate">{product.message}</h2>
                            <p className="text-gray-400 text-xs mb-1 line-clamp-2">{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default page