'use client';
import React from 'react';
import TitleSection from '@/src/components/UI/TitleSection';
import Image from 'next/image';
import { products } from '../data';
import { updates } from '../data';
import { useState } from 'react';
import { Dot } from 'lucide-react';

const fallbackCard = (
  <div className="flex flex-col items-center justify-center w-full h-full bg-[#232323] rounded-lg border border-[#333] text-gray-500">
    <span className="text-2xl font-bold">No Image</span>
  </div>
);

const whatWeDo = [
  {
    title: 'Product Ideation & Branding',
    content: `We turn ambitious ideas into validated product concepts. From naming and brand identity to user journeys and go-to-market strategy, we help you launch with clarity and impact - not guesswork.`,
    link: { text: 'From sketch to startup-ready in weeks.', url: '#', color: '#90BEFF' },
  },
  {
    title: 'App & Web Development',
    content: `We design and build modern, scalable, and user-centric digital experiences across platforms. Our dev teams work in Swift, Flutter, React, and Django to create apps that look great and perform flawlessly - whether it's an MVP or a full-stack platform.`,
    link: { text: 'Clean code. Seamless UX. Built for growth.', url: '#', color: '#90BEFF' },
  },
  {
    title: 'Game Design & Development',
    content: `Gaming is in our DNA. With projects like Spinnersonic, we design thrilling, stylised game experiences from concept art to Unity-powered prototypes — complete with custom assets, achievements, reward systems, and UI/UX for both kids and adults.`,
    link: { text: 'Games that don’t just entertain — they stick.', url: '#', color: '#90BEFF' },
  },
  {
    title: 'Creator & Community Tools',
    content: `We build platforms that empower creators, freelancers, and community leaders — like VModel and Outfeatz. From marketplace logic to social discovery, we know what makes online communities thrive and scale.`,
    link: { text: 'Designed for creators, tested by real users.', url: '#', color: '#90BEFF' },
  },
  {
    title: 'Remote Team Culture & Tooling',
    content: `As a remote-first company, we build for remote teams — because we are one. Tools like Loyalty Bot came from our own needs for accountability, focus, and culture-building across global time zones.`,
    link: { text: 'Built by a remote team, for remote teams.', url: '#', color: '#90BEFF' },
  },
  {
    title: 'Creator & Community Tools',
    content: `We build platforms that empower creators, freelancers, and community leaders — like VModel and Outfeatz. From marketplace logic to social discovery, we know what makes online communities thrive and scale.`,
    link: { text: 'Designed for creators, tested by real users.', url: '#', color: '#90BEFF' },
  },
];

const page = () => {
    const menuItems = [
        { name: 'Home', route: 'about-home' },
        { name: 'About Us', route: 'about' },
        { name: 'Our Mission', route: 'mission' },
        { name: 'Looking Ahead', route: 'looking-ahead' },
      ];           
    const [expanded, setExpanded] = useState<number | null>(0);

    return (
      <div className="mx-auto max-w-[85rem] bg-black text-white p-4 md:p-0">
      {/* <Sidebar tbList={menuItems} /> */}
      <section className="mt-8 max-w-[85rem]">
        <TitleSection
          title="Lets build whats next - together."
          subTitle="Innovation starts here. Join us at Voltis Labs is where great ideas gets made real."
          secondaryText="Published on Monday 17th February, 2025"
          containerStyle="mb-8"
        />
        {/* Product Images Carousel (images from updates, 4 at a time with arrows) */}
        {(() => {
          const [startIdx, setStartIdx] = useState(0);
          const visible = updates.slice(startIdx, startIdx + 4);
          const canScrollLeft = startIdx > 0;
          const canScrollRight = startIdx + 4 < updates.length;
          return (
            <div className="w-full px-1 sm:px-4 md:px-16 lg:px-32 xl:px-48 flex justify-center mb-6 sm:mb-8 relative">
              {canScrollLeft && (
                <button
                  className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 p-2 sm:p-3 text-black shadow-md hover:bg-white focus:outline-none"
                  onClick={() => setStartIdx(startIdx - 1)}
                  aria-label="Scroll left"
                >
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
                </button>
              )}
              <div className="flex gap-2 sm:gap-4 w-full max-w-5xl justify-center overflow-x-auto no-scrollbar py-2">
                {visible.map((item, idx) => (
                  <div
                    key={idx + startIdx}
                    className="flex-shrink-0 bg-[#232323] rounded-[12px] border border-[#333] flex items-center justify-center overflow-hidden mx-auto relative group"
                  >
                    <div className="hidden sm:block w-full h-full" style={{ width: '200px', height: '200px', maxWidth: '200px', maxHeight: '200px' }}>
                      <Image src={item.img} alt={item.message} width={200} height={200} className="object-cover w-full h-full" />
                    </div>
                    <div className="block sm:hidden w-full h-full" style={{ width: '120px', height: '120px', maxWidth: '120px', maxHeight: '120px' }}>
                      <Image src={item.img} alt={item.message} width={120} height={120} className="object-cover w-full h-full" />
                    </div>
                    {/* Overlay with product name on hover */}
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-xs sm:text-base font-semibold mb-2 sm:mb-4 px-2 w-full text-center animate-slide-up group-hover:animate-slide-up">{item.message}</span>
                    </div>
                  </div>
                ))}
              </div>
              {canScrollRight && (
                <button
                  className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 p-2 sm:p-3 text-black shadow-md hover:bg-white focus:outline-none"
                  onClick={() => setStartIdx(startIdx + 1)}
                  aria-label="Scroll right"
                >
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                </button>
              )}
            </div>
          );
        })()}
        <div className="flex flex-row justify-center gap-4 mb-16">
          <button className="px-4 py-1.5 text-xs border border-[#888] rounded-[4px] bg-transparent hover:bg-[#232323] transition">Partner with us (For Clients) ↗</button>
          <button className="px-4 py-1.5 text-xs border border-[#888] rounded-[4px] bg-transparent hover:bg-[#232323] transition">Join the team (For Talent) ↗</button>
        </div>
        {/* What we do Section */}
        <h2 className="text-3xl font-bold text-center mb-8">What we do</h2>
        {/* Desktop (xl): 4 up, 2 down, expansion below row */}
        <div className="xl:block hidden w-full">
          {/* First row: 4 cards */}
          <div className="grid grid-cols-4 gap-6 max-w-[75%] mx-auto mb-4">
            {whatWeDo.slice(0, 4).map((item, idx) => (
              <button
                key={item.title}
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                className={`border border-[#66708533] rounded-[8px] px-4 py-8 text-white text-center text-[30px] font-bold transition-all duration-200 font-medium text-base md:text-lg bg-transparent hover:border-[#90BEFF] ${expanded === idx ? 'border-3 border-[#90BEFF]' : ''}`}
                style={{ minHeight: '120px', minWidth: '220px', maxWidth:'220px' }}
              >
                {item.title}
              </button>
            ))}
          </div>
          {/* Expansion below first row if any of 0-3 is expanded */}
          {expanded !== null && expanded >= 0 && expanded < 4 && (
            <div className="grid grid-cols-4 gap-6 max-w-[75%] mx-auto mb-4" style={{ gridColumn: '1 / -1' }}>
              <div className="col-span-4 flex justify-center w-full">
                <div className="mt-2 p-6 max-w-[540px] w-full text-center">
                  <p className="text-white text-base mb-2">{whatWeDo[expanded].content}</p>
                  <div className='flex items-center gap-1 justify-center'>
                    <Dot color={whatWeDo[expanded].link.color} />
                    <p className="text-[#90BEFF] items-center">{whatWeDo[expanded].link.text}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Second row: 2 cards, centered */}
          <div className="grid grid-cols-4 gap-6 max-w-[75%] mx-auto mb-6">
            <div className="col-span-1"></div>
            {whatWeDo.slice(4, 6).map((item, idx) => (
              <button
                key={item.title}
                onClick={() => setExpanded(expanded === idx + 4 ? null : idx + 4)}
                className={`border border-[#66708533] rounded-[8px] px-4 py-8 text-white text-center text-[30px] font-bold transition-all duration-200 font-medium text-base md:text-lg bg-transparent hover:border-[#90BEFF] ${expanded === idx + 4 ? 'border-3 border-[#90BEFF]' : ''}`}
                style={{ minHeight: '120px', minWidth: '220px', maxWidth:'220px' }}
              >
                {item.title}
              </button>
            ))}
            <div className="col-span-1"></div>
          </div>
          {/* Expansion below second row if 4 or 5 is expanded */}
          {expanded !== null && expanded >= 4 && expanded < 6 && (
            <div className="grid grid-cols-4 gap-6 max-w-[75%] mx-auto mb-4" style={{ gridColumn: '1 / -1' }}>
              <div className="col-span-4 flex justify-center w-full">
                <div className="mt-2 p-6 max-w-[540px] w-full text-center">
                  <p className="text-white text-base mb-2">{whatWeDo[expanded].content}</p>
                  <div className='flex items-center gap-1 justify-center'>
                    <Dot color={whatWeDo[expanded].link.color} />
                    <p className="text-[#90BEFF] items-center">{whatWeDo[expanded].link.text}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Tablet (md to xl): 3 per row, 2 rows, expansion below row */}
        <div className="md:block xl:hidden hidden w-full">
          {/* First row */}
          <div className="grid grid-cols-3 gap-4 max-w-[90%] mx-auto mb-4">
            {whatWeDo.slice(0, 3).map((item, idx) => (
              <button
                key={item.title}
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                className={`border border-[#66708533] rounded-[8px] px-4 py-8 text-white text-center text-lg font-bold transition-all duration-200 font-medium bg-transparent hover:border-[#90BEFF] ${expanded === idx ? 'border-3 border-[#90BEFF]' : ''}`}
                style={{ minHeight: '100px', minWidth: '120px', maxWidth:'220px' }}
              >
                {item.title}
              </button>
            ))}
          </div>
          {/* Expansion below first row if any of first 3 is expanded */}
          {expanded !== null && expanded >= 0 && expanded < 3 && (
            <div className="flex justify-center w-full mb-4">
              <div className="mt-2 p-4 max-w-[540px] w-full text-center">
                <p className="text-white text-base mb-2">{whatWeDo[expanded].content}</p>
                <div className='flex items-center gap-1 justify-center'>
                  <Dot color={whatWeDo[expanded].link.color} />
                  <p className="text-[#90BEFF] items-center">{whatWeDo[expanded].link.text}</p>
                </div>
              </div>
            </div>
          )}
          {/* Second row */}
          <div className="grid grid-cols-3 gap-4 max-w-[90%] mx-auto mb-4">
            {whatWeDo.slice(3, 6).map((item, idx) => (
              <button
                key={item.title}
                onClick={() => setExpanded(expanded === idx + 3 ? null : idx + 3)}
                className={`border border-[#66708533] rounded-[8px] px-4 py-8 text-white text-center text-lg font-bold transition-all duration-200 font-medium bg-transparent hover:border-[#90BEFF] ${expanded === idx + 3 ? 'border-3 border-[#90BEFF]' : ''}`}
                style={{ minHeight: '100px', minWidth: '120px', maxWidth:'220px' }}
              >
                {item.title}
              </button>
            ))}
          </div>
          {/* Expansion below second row if any of last 3 is expanded */}
          {expanded !== null && expanded >= 3 && expanded < 6 && (
            <div className="flex justify-center w-full mb-4">
              <div className="mt-2 p-4 max-w-[540px] w-full text-center">
                <p className="text-white text-base mb-2">{whatWeDo[expanded].content}</p>
                <div className='flex items-center gap-1 justify-center'>
                  <Dot color={whatWeDo[expanded].link.color} />
                  <p className="text-[#90BEFF] items-center">{whatWeDo[expanded].link.text}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Mobile (below md): 2 per row, 3 rows, expansion below pair */}
        <div className="w-full flex justify-center md:hidden">
          <div className="grid grid-cols-2 gap-3 w-full max-w-[98%] mb-4">
            {whatWeDo.slice(0, 6).map((item, idx) => (
              <React.Fragment key={item.title}>
                <button
                  onClick={() => setExpanded(expanded === idx ? null : idx)}
                  className={`border border-[#66708533] rounded-[8px] px-2 py-6 text-white text-center text-base font-bold transition-all duration-200 font-medium bg-transparent hover:border-[#90BEFF] ${expanded === idx ? 'border-3 border-[#90BEFF]' : ''}`}
                  style={{ minHeight: '80px', minWidth: '80px', maxWidth:'180px' }}
                >
                  {item.title}
                </button>
                {/* Expansion below the pair (row) if idx is odd and either in the pair is expanded */}
                {(idx % 2 === 1 && (expanded === idx || expanded === idx - 1)) && (
                  <div className="col-span-2 flex justify-center w-full">
                    <div className="mt-2 p-3 max-w-[340px] w-full text-center">
                      <p className="text-white text-sm mb-2">{whatWeDo[expanded].content}</p>
                      <div className='flex items-center gap-1 justify-center'>
                        <Dot color={whatWeDo[expanded].link.color} />
                        <p className="text-[#90BEFF] items-center text-xs">{whatWeDo[expanded].link.text}</p>
                      </div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
     
      </section>
    </div>
  );
}

export default page