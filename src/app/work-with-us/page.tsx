'use client';
import React from 'react';
import TitleSection from '@/src/components/UI/TitleSection';
import Image from 'next/image';
import { products } from '../data';
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
        {/* Four Card Image Grid */}
        <div className="w-full px-4 md:px-16 lg:px-32 xl:px-48 flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl mb-6">
            {products.slice(0, 4).map((item, idx) => (
              <div key={item.id} className="bg-[#232323] rounded-[12px] border border-[#333] h-[170px] md:h-[200px] flex items-center justify-center overflow-hidden min-w-[140px] md:min-w-[180px]">
                {item.img ? (
                  <Image src={item.img} alt={item.message} width={180} height={180} className="object-cover w-full h-full" />
                ) : fallbackCard}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row justify-center gap-4 mb-16">
          <button className="px-4 py-1.5 text-xs border border-[#888] rounded-[4px] bg-transparent hover:bg-[#232323] transition">Partner with us (For Clients) ↗</button>
          <button className="px-4 py-1.5 text-xs border border-[#888] rounded-[4px] bg-transparent hover:bg-[#232323] transition">Join the team (For Talent) ↗</button>
        </div>
        {/* What we do Section */}
        <h2 className="text-3xl font-bold text-center mb-8">What we do</h2>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-5xl mb-6">
            {/* First row of 4 cards */}
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
            {/* Expansion below first row if any of the first 4 is expanded */}
            {expanded !== null && expanded >= 0 && expanded < 4 && (
              <div className="col-span-4 flex justify-center w-full" style={{ gridColumn: '1 / -1' }}>
                <div className="mt-2 p-6 max-w-[540px] w-full text-center">
                  <p className="text-white text-base mb-2">
                    {whatWeDo[expanded].content}
                  </p>
                 <div className='flex items-center gap-1 justify-center'>
                 <Dot color={whatWeDo[expanded].link.color} /> 
                 <p className="text-[#90BEFF] items-center">{whatWeDo[expanded].link.text}</p>
                 </div>
                </div>
              </div>
            )}
            {/* Second row of 2 cards, centered */}
            <div className="col-span-4 flex justify-center gap-6">
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
            </div>
            {/* Expansion below second row if any of the last 2 is expanded */}
            {expanded !== null && expanded >= 4 && expanded < 6 && (
              <div className="col-span-4 flex justify-center w-full" style={{ gridColumn: '1 / -1' }}>
                <div className=" rounded-lg mt-2 p-6 max-w-[540px] w-full text-center text-[">
                  <p className="text-white text-base mb-2">
                    {whatWeDo[expanded].content}
                  </p>
                  <div className='flex items-center gap-1 justify-center'>
                 <Dot color={whatWeDo[expanded].link.color} /> 
                 <p className="text-[#90BEFF] items-center ">  {whatWeDo[expanded].link.text}</p>
                 </div>
                </div>
              </div>
            )}
          </div>
        </div>
     
      </section>
    </div>
  );
}

export default page