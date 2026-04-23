'use client'
import React, { Suspense } from 'react';
import Image from 'next/image';
import { updates } from "../data";
import { FaSpotify } from "react-icons/fa";
import Content from "@/src/components/Content";
import { useSearchParams } from 'next/navigation';

const UpdateItem = ({ img, message, subText, time, description, spotify, spotifyLink }: any) => {
    return (
      <div className="flex flex-col md:flex-row items-start gap-6 py-8 border-b border-vl-brown/20">
        {/* Match home "Latest Updates" rail: fixed card width + same aspect + radius */}
        <div className="w-[8.75rem] shrink-0 md:w-[11rem]">
          <div className="relative aspect-[310/300] w-full min-h-0 overflow-hidden rounded-[10px]">
            {img.endsWith('.svg') ? (
              <img
                src={img}
                alt={message}
                className="h-full w-full min-h-0 object-cover object-center"
              />
            ) : (
              <Image
                src={img}
                alt={message}
                width={200}
                height={194}
                sizes="(max-width: 768px) 140px, 176px"
                className="h-full w-full object-cover"
              />
            )}
          </div>
        </div>
  
        {/* Text Section */}
        <div className="flex w-full min-w-0 flex-col gap-4 md:flex-1">
          <h2 className="text-xl font-bold text-vl-ink">{message}</h2>
          {subText && <h3 className="text-md text-vl-ink-muted">{subText}</h3>}
          <p className="text-sm text-vl-ink-muted/90">{time}</p>
          <p className="text-vl-ink-muted mt-2 leading-relaxed">{description ?? "No description available."}</p>
  
          {/* Spotify Link (if applicable) */}
          {spotify && spotifyLink && (
            <a
               href={spotifyLink} // Ensure this points to a valid Spotify link
               target="_blank"
               rel="noopener noreferrer"
               className="relative inline-flex items-center gap-2 mt-4 py-2 px-4 rounded-full border border-vl-ink/25 hover:border-transparent text-vl-ink text-[.9rem] font-medium overflow-hidden w-fit cursor-pointer group"
             >
               <span className="absolute inset-0 bg-[#1DB954] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
               <FaSpotify className="relative z-10 text-[1.2rem] transition-all duration-300 group-hover:text-black" />
               <span className="relative z-10 transition-all duration-300 group-hover:text-black">
                 Listen on Spotify
               </span>
             </a>
          )}
  
          {/* See More Link */}
          <div className="mt-4 text-right">
            <a
              href="#"
              className="text-vl-brown text-sm font-medium underline-offset-2 hover:text-vl-brown-dark"
            >
              see more...
            </a>
          </div>
        </div>
      </div>
    );
  };

  function LatestUpdatesContent() {
    const searchParams = useSearchParams();
    React.useEffect(() => {
      const itemIdx = searchParams.get('item');
      if (itemIdx) {
        const el = document.getElementById(`update-item-${itemIdx}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        }
      }
    }, [searchParams]);
    return (
      <div className="page-container w-full min-h-screen bg-transparent text-vl-ink">
        <section className="mb-20 md:px-[2rem] px-[1rem]">
          <h1 className="text-3xl mt-20 font-bold text-vl-brown-dark mb-8">Latest Updates</h1>
          {updates.map((update, index) => (
            <div
              id={`update-item-${index}`}
              key={index}
            >
              <UpdateItem
                img={update.img}
                message={update.message}
                subText={update.subText}
                time={update.time}
                description={update.description}
                spotify={update.spotify}
                spotifyLink={update.spotifyLink}
              />
            </div>
          ))}
          <Content/>
        </section>
      </div>
    );
  }

export default function LatestUpdatesPage() {
  return (
    <Suspense fallback={<div className="min-h-[40vh] px-4 py-20 text-center text-vl-ink-muted">Loading…</div>}>
      <LatestUpdatesContent />
    </Suspense>
  );
}