'use client';
import React from 'react';
import { products } from '../data';

const Page = () => {
  const pinnedOrder = ['notepadpro', 'pinnacletransfer', 'clipstack'];
  const normalizeName = (value: string) => value.toLowerCase().replace(/\s+/g, '');

  const productsWithImages = [...products]
    .map((p: any) => ({
      ...p,
      images: p.images || [],
    }))
    .sort((a: any, b: any) => {
      const aIdx = pinnedOrder.indexOf(normalizeName(a.message));
      const bIdx = pinnedOrder.indexOf(normalizeName(b.message));
      const aRank = aIdx === -1 ? Number.MAX_SAFE_INTEGER : aIdx;
      const bRank = bIdx === -1 ? Number.MAX_SAFE_INTEGER : bIdx;
      return aRank - bRank;
    });

  const fillCover = 'absolute inset-0 h-full w-full object-cover object-center';

  return (
    <div className="mx-auto min-h-[50vh] px-4 pb-12 pt-[5.3rem] md:px-6 xl:w-[75rem]">
      <div className="grid w-full grid-cols-2 justify-items-center gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {productsWithImages.map((product: any) => (
          <a
            key={product.message}
            href={product.link}
            className="group flex w-full max-w-[12rem] cursor-pointer flex-col items-center"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-vl-brown/25 bg-vl-cream-deep shadow-md transition-all duration-200 group-hover:scale-[1.03]">
              <img
                src={product.img}
                alt={product.message}
                className={`${fillCover} transition-transform duration-300 ease-out group-hover:scale-105`}
              />
            </div>
            <h2 className="mt-2 text-center text-sm font-semibold text-vl-ink sm:text-base">{product.message}</h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Page;
