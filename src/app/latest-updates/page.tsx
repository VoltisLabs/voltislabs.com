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
        <div className="flex w-full min-w-0 flex-col gap-3 md:flex-1">
          <h2 className="text-xl font-bold text-vl-ink">{message}</h2>
          {subText && <h3 className="text-md text-vl-ink-muted">{subText}</h3>}

          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
            <p className="text-sm font-medium text-vl-ink-muted/90">{time}</p>
            {spotify && spotifyLink ? (
              <a
                href={spotifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex shrink-0 cursor-pointer items-center gap-2 overflow-hidden rounded-full border border-vl-ink/25 px-3.5 py-1.5 text-[0.9rem] font-medium text-vl-ink transition-colors hover:border-transparent group"
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-[#1DB954] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                <FaSpotify className="relative z-10 text-[1.1rem] transition-colors duration-300 group-hover:text-black" />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                  Listen on Spotify
                </span>
              </a>
            ) : null}
          </div>

          <p className="leading-relaxed text-vl-ink-muted">
            {description ?? "No description available."}{" "}
            <a
              href="#"
              className="whitespace-nowrap text-sm font-medium text-vl-brown underline-offset-2 hover:text-vl-brown-dark"
            >
              see more...
            </a>
          </p>
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