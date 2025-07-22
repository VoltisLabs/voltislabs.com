'use client';
import React from 'react';
import TitleSection from '@/src/components/UI/TitleSection';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, Dot } from 'lucide-react';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { update, whatWeDo } from '../data';
import Link from 'next/link';

const page = () => {         
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
            secondaryText=""
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
          <Marquee className="marquee" gradient={false} speed={40} pauseOnHover={false} pauseOnClick={false} direction="left">
            {update.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex-shrink-0 bg-[#232323] rounded-[12px] border border-[#333] flex items-center justify-center overflow-hidden mx-2 relative group"
                style={{ width: '200px', height: '200px', maxWidth: '200px', maxHeight: '200px' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Image src={item.img} alt={item.message} width={200} height={200} className="object-cover w-full h-full" />
                {/* Overlay always visible, never scrollable */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center opacity-100 transition-opacity duration-300"
                  style={{ overflow: 'hidden', maxHeight: '100%', scrollbarWidth: 'none' }}>
                  <span className="text-white text-xs sm:text-base font-semibold mb-2 sm:mb-4 px-2 w-full text-center truncate" style={{ whiteSpace: 'nowrap' }}>
                    {item.message}
                  </span>
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

        {/* Why Work With Voltis Labs Section */}
        <motion.div
  className="mt-16 mb-16"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, delay: 0.5 }}
>
  <motion.h2
    className="text-3xl font-bold text-center mb-12"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.6 }}
  >
    Why Work With Voltis Labs?
  </motion.h2>

  {/* Desktop & Tablet Layout */}
  <div className="hidden md:grid md:grid-cols-2 gap-12 max-w-[85%] mx-auto">
    {/* For Clients */}
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.8 }}
    >
      <h3 className="text-xl font-bold text-white mb-4">For Clients</h3>
      <ul className="space-y-3">
        <li className="flex items-start gap-2">
          <Dot className="text-[#90BEFF] mt-1 flex-shrink-0" size={16} />
          <p className="text-white text-sm">Full-stack, agile development team</p>
        </li>
        <li className="flex items-start gap-2">
          <Dot className="text-[#90BEFF] mt-1 flex-shrink-0" size={16} />
          <p className="text-white text-sm">Expertise in launching scalable tech products</p>
        </li>
        <li className="flex items-start gap-2">
          <Dot className="text-[#90BEFF] mt-1 flex-shrink-0" size={16} />
          <p className="text-white text-sm">Deep design focus and branding support</p>
        </li>
        <li className="flex items-start gap-2">
          <Dot className="text-[#90BEFF] mt-1 flex-shrink-0" size={16} />
          <p className="text-white text-sm">We treat your product like it's ours</p>
        </li>
      </ul>
    </motion.div>

    {/* For Collaborators */}
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.9 }}
    >
      <h3 className="text-xl font-bold text-white mb-4">For Collaborators</h3>
      <ul className="space-y-3">
        <li className="flex items-start gap-2">
          <Dot className="text-[#90BEFF] mt-1 flex-shrink-0" size={16} />
          <p className="text-white text-sm">Learn by building with us — every role has ownership</p>
        </li>
        <li className="flex items-start gap-2">
          <Dot className="text-[#90BEFF] mt-1 flex-shrink-0" size={16} />
          <p className="text-white text-sm">Remote, async-friendly culture</p>
        </li>
        <li className="flex items-start gap-2">
          <Dot className="text-[#90BEFF] mt-1 flex-shrink-0" size={16} />
          <p className="text-white text-sm">Work on real products used by thousands</p>
        </li>
        <li className="flex items-start gap-2">
          <Dot className="text-[#90BEFF] mt-1 flex-shrink-0" size={16} />
          <p className="text-white text-sm">Build a portfolio that speaks for itself</p>
        </li>
      </ul>
    </motion.div>
  </div>

  {/* Mobile Layout */}
  <div className="md:hidden space-y-12 max-w-[95%] mx-auto">
    {/* For Clients Mobile */}
    <motion.div
      className="space-y-4 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.8 }}
    >
      <h3 className="text-lg font-bold text-white mb-3">For Clients</h3>
      <ul className="space-y-2 text-left inline-block">
        <li className="flex items-start gap-2">
          <Dot className="text-[#90BEFF] mt-1 flex-shrink-0" size={14} />
          <p className="text-white text-xs">Full-stack, agile development team</p>
        </li>
        <li className="flex items-start gap-2">
          <Dot className="text-[#90BEFF] mt-1 flex-shrink-0" size={14} />
          <p className="text-white text-xs">Expertise in launching scalable tech products</p>
        </li>
        <li className="flex items-start gap-2">
          <Dot className="text-[#90BEFF] mt-1 flex-shrink-0" size={14} />
          <p className="text-white text-xs">Deep design focus and branding support</p>
        </li>
        <li className="flex items-start gap-2">
          <Dot className="text-[#90BEFF] mt-1 flex-shrink-0" size={14} />
          <p className="text-white text-xs">We treat your product like it's ours</p>
        </li>
      </ul>
    </motion.div>

    {/* For Collaborators Mobile */}
    <motion.div
      className="space-y-4 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.9 }}
    >
      <h3 className="text-lg font-bold text-white mb-3">For Collaborators</h3>
      <ul className="space-y-2 text-left inline-block">
        <li className="flex items-start gap-2">
          <Dot className="text-[#90BEFF] mt-1 flex-shrink-0" size={14} />
          <p className="text-white text-xs">Learn by building with us — every role has ownership</p>
        </li>
        <li className="flex items-start gap-2">
          <Dot className="text-[#90BEFF] mt-1 flex-shrink-0" size={14} />
          <p className="text-white text-xs">Remote, async-friendly culture</p>
        </li>
        <li className="flex items-start gap-2">
          <Dot className="text-[#90BEFF] mt-1 flex-shrink-0" size={14} />
          <p className="text-white text-xs">Work on real products used by thousands</p>
        </li>
        <li className="flex items-start gap-2">
          <Dot className="text-[#90BEFF] mt-1 flex-shrink-0" size={14} />
          <p className="text-white text-xs">Build a portfolio that speaks for itself</p>
        </li>
      </ul>
    </motion.div>
  </div>
</motion.div>

<motion.div
  className="mt-20 mb-16"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, delay: 0.6 }}
>
  <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-8">
    Who we work with
  </h2>

  <ul className="space-y-4 max-w-[600px] mx-auto">
    <li className="flex items-start gap-2">
      <Dot className="text-[#90BEFF] mt-1 flex-shrink-0" size={12} />
      <span className="text-[#C0C7D0] text-sm md:text-base font-normal">
        Startups & early-stage founders
      </span>
    </li>
    <li className="flex items-start gap-2">
      <Dot className="text-[#90BEFF] mt-1 flex-shrink-0" size={12} />
      <span className="text-[#C0C7D0] text-sm md:text-base font-normal">
        Designers, devs, and marketers looking for impact
      </span>
    </li>
    <li className="flex items-start gap-2">
      <Dot className="text-[#90BEFF] mt-1 flex-shrink-0" size={12} />
      <span className="text-[#C0C7D0] text-sm md:text-base font-normal">
        Community builders and culture-led brands
      </span>
    </li>
  </ul>
</motion.div>



<motion.div
  className="mt-20 mb-24 text-center"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, delay: 0.7 }}
>
  <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
    Ready to work with us?
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 max-w-[700px] mx-auto">
    {/* For Clients */}
    <div className="text-left md:text-center">
      <h3 className="text-[#90BEFF] text-base font-semibold mb-3">For Clients</h3>
      <p className="text-sm md:text-base text-white font-normal">
        <Link href="/contact" className="text-[#5FA7FF] underline hover:opacity-80 transition">
          Tell us
        </Link>{" "}
        about your project
      </p>
    </div>

    {/* For Collaborators */}
    <div className="text-left md:text-center">
      <h3 className="text-[#90BEFF] text-base font-semibold mb-3">For Collaborators</h3>
      <ul className="space-y-1 text-sm md:text-base text-white font-normal">
        <li>
          <span className="inline-flex items-center gap-2">
            <ArrowRight size={14} className="text-[#90BEFF]" />
            <Link href="/apply" className="text-[#5FA7FF] underline hover:opacity-80 transition">
              Apply
            </Link>{" "}
            or{" "}
            <Link href="/discord" className="text-[#5FA7FF] underline hover:opacity-80 transition">
              Join
            </Link>{" "}
            our Discord
          </span>
        </li>
      </ul>
    </div>
  </div>
</motion.div>


     
      </section>
    </motion.div>
  );
}

export default page