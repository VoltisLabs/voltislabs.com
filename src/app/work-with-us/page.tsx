'use client';
import React from 'react';
import TitleSection from '@/src/components/UI/TitleSection';
import Image from 'next/image';
import { products } from '../data';
// import { updates } from '../data';
import { useState } from 'react';
import { Dot } from 'lucide-react';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

const fallbackCard = (
  <div className="flex flex-col items-center justify-center w-full h-full bg-[#232323] rounded-lg border border-[#333] text-gray-500">
    <span className="text-2xl font-bold">No Image</span>
  </div>
);

export const updates = [
  {
    id: 0,
    img: '/image/prelura-icon.jpg',
    message: 'Prelura',
    time: 'Nov 18, 2024',
    link: '/prelura',
    description: `Prelura is a secondhand fashion marketplace designed for style-conscious, sustainability-minded shoppers. It offers a seamless platform to buy and sell preloved clothing and accessories with ease. From everyday essentials to designer pieces, users can list items, grade their condition, create profiles, and manage their wardrobes in a way that feels modern, intuitive, and community-driven.`,
  },
  {
    id: 1,
    img: '/image/vmodel-icon.png',
    message: 'Vmodel',
    time: 'Feb 03, 2021',
    link: '/vmodel',
    description:
      "VModel is a digital platform designed to connect creators with paid opportunities in a streamlined, visually-driven environment. Blending the functionality of a freelance marketplace with the aesthetic of a social network, VModel empowers creatives—models, photographers, stylists, videographers, and more—to showcase their work, apply for jobs, and offer services all in one place. Through sleek portfolios, verified profiles, and a personalised feed, users can build their reputation and attract brands or clients looking for talent.\n \n Built with simplicity and impact in mind, VModel eliminates the friction between creativity and commerce. The platform encourages authenticity, creativity, and community—supporting both independent creatives and brands seeking fresh, skilled collaborators. Whether you're booking a photoshoot, offering a niche service, or building your creative business, VModel is designed to help you turn your craft into opportunity.",
  },
  {
    id: 3,
    img: '/image/Frame.jpg',
    message: 'Afrogarm',
    time: 'Dec 13, 2019',
    link: '/afrogram',
    description: `Afrogarm is a marketplace for African fashion, connecting talented designers with a global audience. Focused on showcasing authentic, high-quality garments and accessories, the platform celebrates the richness of African style through curated storefronts, vibrant visuals, and smooth shopping experiences. Afrogarm empowers local creators and gives buyers around the world direct access to the continent’s most exciting fashion talent.`,
  },
  {
    id: 4,
    img: '/image/spinner.png',
    message: 'Spinnersonic',
    time: 'Mar 18, 2025',
    link: '/spinner',
    description: `Spinnersonic is a high-energy fidget spinner game built for mobile and web. With multiple game modes—including multiplayer races, leaderboard challenges, and relaxed free play—it offers a fresh, dynamic take on casual gaming. Players can race, customise spinners, track spin miles, and even compete in reverse-style races where being slow is the way to win.`,
  },
  {
    id: 5,
    img: '/image/outfeatz.png',
    message: 'Outfeatz',
    time: 'Mar 20, 2025',
    link: '/outfeatz',
    description: `Outfeatz is a creative styling tool that turns outfit photos into clean, background-free cut-outs. Users can upload pictures, remove the background instantly, and build customised digital galleries of their looks. With the ability to tag brands, create themed collections, and organise their wardrobe visually, Outfeatz empowers users to curate their fashion in a way that’s personal, expressive, and digitally organised.`,
  },
  {
    id: 6,
    img: '/image/loyalty_bot.jpg',
    message: 'Loyalty bot',
    time: 'Mar 10, 2025',
    link: '/loyalty_bot',
    description:
      "Loyalty Bot is a productivity-focused Discord bot built to help remote teams stay accountable and on time. Designed for digital workspaces that use Discord as their primary hub, Loyalty Bot tracks break times, monitors lateness, and applies custom consequences such as salary deductions or logged infractions. \n\n Loyalty Bot acts as a quiet but firm supervisor, keeping your team aligned without constant manual checks. It integrates smoothly into your team's daily workflow, offering a subtle but effective layer of structure to how your team collaborates.",
  },
];

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
    const [expanded, setExpanded] = useState<number | null>(null);

    return (
      <motion.div
        className="mx-auto max-w-[85rem] bg-black text-white p-4 md:p-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
      {/* <Sidebar tbList={menuItems} /> */}
      <section className="mt-8 max-w-[85rem]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <TitleSection
            title="Lets build whats next - together."
            subTitle="Innovation starts here. Join us at Voltis Labs is where great ideas gets made real."
            secondaryText="Published on Monday 17th February, 2025"
            containerStyle="mb-8"
          />
        </motion.div>
        {/* Product Images Marquee (replaces carousel) */}
        <motion.div
          className="w-full px-1 sm:px-4 md:px-16 lg:px-32 xl:px-48 flex justify-center mb-6 sm:mb-8 relative overflow-y-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Marquee gradient={false} speed={40} pauseOnHover={false} pauseOnClick={false} direction="left">
            {updates.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex-shrink-0 bg-[#232323] rounded-[12px] border border-[#333] flex items-center justify-center overflow-hidden mx-2 relative group"
                style={{ width: '200px', height: '200px', maxWidth: '200px', maxHeight: '200px' }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Image src={item.img} alt={item.message} width={200} height={200} className="object-cover w-full h-full" />
                {/* Overlay with product name on hover */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs sm:text-base font-semibold mb-2 sm:mb-4 px-2 w-full text-center animate-slide-up">{item.message}</span>
                </div>
              </motion.div>
            ))}
          </Marquee>
        </motion.div>
        <motion.div
          className="flex flex-row justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <button className="px-4 py-1.5 text-xs border border-[#888] rounded-[4px] bg-transparent hover:bg-[#232323] transition">Partner with us (For Clients) ↗</button>
          <button className="px-4 py-1.5 text-xs border border-[#888] rounded-[4px] bg-transparent hover:bg-[#232323] transition">Join the team (For Talent) ↗</button>
        </motion.div>
        {/* What we do Section */}
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          What we do
        </motion.h2>
        {/* Desktop (xl): 4 up, 2 down, expansion below row */}
        <div className="xl:block hidden w-full">
          {/* First row: 4 cards */}
          <div className="grid grid-cols-4 gap-6 max-w-[75%] mx-auto mb-4">
            {whatWeDo.slice(0, 4).map((item, idx) => (
              <motion.button
                key={item.title}
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                className={`border border-[#66708533] rounded-[8px] px-4 py-8 text-white text-center text-[30px] font-bold transition-all duration-200 font-medium text-base md:text-lg bg-transparent hover:border-[#90BEFF] ${expanded === idx ? 'border-3 border-[#90BEFF]' : ''}`}
                style={{ minHeight: '120px', minWidth: '220px', maxWidth:'220px' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                whileHover={{ scale: 1.04 }}
              >
                {item.title}
              </motion.button>
            ))}
          </div>
          {/* Expansion below first row if any of 0-3 is expanded */}
          <AnimatePresence mode="wait">
          {expanded !== null && expanded >= 0 && expanded < 4 && (
            <motion.div
              key={expanded}
              className="grid grid-cols-4 gap-6 max-w-[75%] mx-auto mb-4"
              style={{ gridColumn: '1 / -1' }}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.5, type: 'spring' }}
            >
              <div className="col-span-4 flex justify-center w-full">
                <motion.div
                  className="mt-2 p-6 max-w-[540px] w-full text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.5 }}
                >
                  <motion.p
                    className="text-white text-base mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                  >
                    {whatWeDo[expanded].content}
                  </motion.p>
                  <motion.div
                    className='flex items-center gap-1 justify-center'
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35, duration: 0.5 }}
                  >
                    <Dot color={whatWeDo[expanded].link.color} />
                    <p className="text-[#90BEFF] items-center">{whatWeDo[expanded].link.text}</p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
          </AnimatePresence>
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
          <AnimatePresence mode="wait">
          {expanded !== null && expanded >= 4 && expanded < 6 && (
            <motion.div
              key={expanded}
              className="grid grid-cols-4 gap-6 max-w-[75%] mx-auto mb-4"
              style={{ gridColumn: '1 / -1' }}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.5, type: 'spring' }}
            >
              <div className="col-span-4 flex justify-center w-full">
                <motion.div
                  className="mt-2 p-6 max-w-[540px] w-full text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.5 }}
                >
                  <motion.p
                    className="text-white text-base mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                  >
                    {whatWeDo[expanded].content}
                  </motion.p>
                  <motion.div
                    className='flex items-center gap-1 justify-center'
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35, duration: 0.5 }}
                  >
                    <Dot color={whatWeDo[expanded].link.color} />
                    <p className="text-[#90BEFF] items-center">{whatWeDo[expanded].link.text}</p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
          </AnimatePresence>
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
          <AnimatePresence mode="wait">
          {expanded !== null && expanded >= 0 && expanded < 3 && (
            <motion.div
              key={expanded}
              className="flex justify-center w-full mb-4"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.5, type: 'spring' }}
            >
              <motion.div
                className="mt-2 p-4 max-w-[540px] w-full text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
              >
                <motion.p
                  className="text-white text-base mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                >
                  {whatWeDo[expanded].content}
                </motion.p>
                <motion.div
                  className='flex items-center gap-1 justify-center'
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                >
                  <Dot color={whatWeDo[expanded].link.color} />
                  <p className="text-[#90BEFF] items-center">{whatWeDo[expanded].link.text}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
          </AnimatePresence>
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
          <AnimatePresence mode="wait">
          {expanded !== null && expanded >= 3 && expanded < 6 && (
            <motion.div
              key={expanded}
              className="flex justify-center w-full mb-4"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.5, type: 'spring' }}
            >
              <motion.div
                className="mt-2 p-4 max-w-[540px] w-full text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
              >
                <motion.p
                  className="text-white text-base mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                >
                  {whatWeDo[expanded].content}
                </motion.p>
                <motion.div
                  className='flex items-center gap-1 justify-center'
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                >
                  <Dot color={whatWeDo[expanded].link.color} />
                  <p className="text-[#90BEFF] items-center">{whatWeDo[expanded].link.text}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
          </AnimatePresence>
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
    </motion.div>
  );
}

export default page