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
    if (images.length < 1) return;
    setImageIdx((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const handleNext = () => {
    if (images.length < 1) return;
    setImageIdx((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  const handleThumbClick = (idx: number) => {
    setImageIdx(idx);
  };

  /** Edge-to-edge fill (same visual as raster cards; no letterboxing padding). */
  const fillCover = 'absolute inset-0 h-full w-full object-cover object-center';

  return (
    <div className="mx-auto flex min-h-[50vh] flex-col gap-4 px-4 pb-12 pt-[5.3rem] md:gap-6 md:px-6 xl:w-[75rem] xl:flex-row xl:gap-8">
      {/* Preview Window */}
      <div className="flex w-full flex-col rounded-lg border border-vl-brown/25 bg-vl-cream-deep shadow-xl xl:w-2/3">
        {/* Main image */}
        <div className="group relative h-[300px] w-full overflow-hidden rounded-lg bg-vl-cream sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[650px]">
          {images.length > 0 && (
            <img
              src={images[imageIdx]}
              alt={selectedProduct.message}
              className={fillCover}
            />
          )}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-vl-brown/80 p-2 text-vl-cream opacity-0 transition-all hover:bg-vl-brown group-hover:opacity-100"
              >
                <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-vl-brown/80 p-2 text-vl-cream opacity-0 transition-all hover:bg-vl-brown group-hover:opacity-100"
              >
                <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        <div className="my-3 flex w-full flex-wrap justify-start gap-2 px-2 md:gap-3">
          {images.slice(0, 4).map((img: string, idx: number) => (
            <button
              key={`${idx}-${img}`}
              type="button"
              onClick={() => handleThumbClick(idx)}
              className={`relative flex h-12 w-12 shrink-0 overflow-hidden rounded-lg border-2 transition-all sm:h-14 sm:w-14 md:h-16 md:w-16 ${imageIdx === idx ? 'border-vl-brown' : 'border-transparent'} bg-vl-cream`}
            >
              <img
                src={img}
                alt={`${selectedProduct.message} preview ${idx + 1}`}
                className={fillCover}
              />
              {images.length > 4 && idx === 3 && (
                <span className="absolute inset-0 flex items-center justify-center bg-vl-brown/70 text-xs font-semibold text-vl-cream">
                  +{images.length - 3}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Description and View Button */}
        <div className="flex w-full flex-col px-3 pb-4">
          <h2 className="mb-1 text-base font-bold text-vl-ink sm:text-lg md:text-xl">{selectedProduct.message}</h2>
          <p className="mb-3 whitespace-pre-line text-sm text-vl-ink-muted">{selectedProduct.description}</p>
          <div className="flex justify-end">
            <a
              href={selectedProduct.link}
              className="rounded-lg border border-vl-brown bg-vl-brown px-3 py-2 text-sm font-semibold text-vl-cream transition hover:bg-vl-brown-dark md:px-4"
            >
              View More
            </a>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:w-1/3 xl:grid-cols-2">
        {productsWithImages.map((product: any, idx: number) => (
          <div
            key={product.message}
            onClick={() => handleSelect(idx)}
            className={`group cursor-pointer rounded-lg border border-vl-brown/25 bg-vl-cream-deep shadow-md transition-all duration-200 hover:scale-[1.03] ${selectedIdx === idx ? 'ring-2 ring-vl-brown' : ''}`}
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-t-lg bg-vl-cream">
              <img
                src={product.img}
                alt={product.message}
                className={`${fillCover} transition-transform duration-300 ease-out group-hover:scale-105`}
              />
            </div>
            <div className="p-2">
              <h2 className="mb-1 truncate text-sm font-semibold text-vl-ink sm:text-base">{product.message}</h2>
              <p className="line-clamp-4 text-xs text-vl-ink-muted">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
