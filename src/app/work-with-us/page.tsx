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
import CardButton from '@/src/components/UI/CardButton';

function WorkWithUsPage() {
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
          <Link href="/work-with-us/partner-with-us" passHref legacyBehavior className='cursor-pointer'>
            <p className="px-4 py-1.5 cursor-pointer text-xs border border-[#888] rounded-[4px] bg-transparent hover:bg-[#232323] transition">Partner with us (For Clients) ↗</p>
          </Link>
          {/* <Link href="/work-with-us/join-team" passHref legacyBehavior className='cursor-pointer'>
            <p className="px-4 cursor-pointer py-1.5 text-xs border border-[#888] rounded-[4px] bg-transparent hover:bg-[#232323] transition">Join the team (For Talent) ↗</p>
          </Link> */}
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
        {/* Desktop (xl): 4 up, 4 down, expansion below row */}
        <div className="xl:block hidden w-full">
          {/* First row: 4 cards */}
          <div className="grid grid-cols-4 gap-6 max-w-[75%] mx-auto mb-4">
            {whatWeDo.slice(0, 4).map((item, idx) => (
              <CardButton
                key={item.title}
                title={item.title}
                expanded={expanded === idx}
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                animationProps={{
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.5, delay: 0.1 * idx },
                }}
              />
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
          {/* Second row: 4 cards */}
          <div className="grid grid-cols-4 gap-6 max-w-[75%] mx-auto mb-6">
            {whatWeDo.slice(4, 8).map((item, idx) => (
              <CardButton
                key={item.title}
                title={item.title}
                expanded={expanded === idx + 4}
                onClick={() => setExpanded(expanded === idx + 4 ? null : idx + 4)}
              />
            ))}
          </div>
          {/* Expansion below second row if any of 4-7 is expanded */}
          <AnimatePresence mode="wait">
          {expanded !== null && expanded >= 4 && expanded < 8 && (
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
        {/* Tablet (md to xl): 3 up, 3 middle, 2 down (centered) */}
        <div className="md:block xl:hidden hidden w-full">
          {/* First row: 3 cards */}
          <div className="grid grid-cols-3 gap-4 max-w-[90%] mx-auto mb-4">
            {whatWeDo.slice(0, 3).map((item, idx) => (
              <CardButton
                key={item.title}
                title={item.title}
                expanded={expanded === idx}
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                className="text-lg"
              />
            ))}
          </div>
          {/* Second row: 3 cards */}
          <div className="grid grid-cols-3 gap-4 max-w-[90%] mx-auto mb-4">
            {whatWeDo.slice(3, 6).map((item, idx) => (
              <CardButton
                key={item.title}
                title={item.title}
                expanded={expanded === idx + 3}
                onClick={() => setExpanded(expanded === idx + 3 ? null : idx + 3)}
                className="text-lg"
              />
            ))}
          </div>
          {/* Third row: 2 cards, centered */}
          <div className="grid grid-cols-3 gap-4 max-w-[90%] mx-auto mb-4">
            <div className="col-span-1"></div>
            {whatWeDo.slice(6, 8).map((item, idx) => (
              <CardButton
                key={item.title}
                title={item.title}
                expanded={expanded === idx + 6}
                onClick={() => setExpanded(expanded === idx + 6 ? null : idx + 6)}
                className="text-lg"
              />
            ))}
            <div className="col-span-1"></div>
          </div>
        </div>
        {/* Mobile (below md): 2 per row, 4 rows */}
        <div className="w-full flex justify-center md:hidden">
          <div className="grid grid-cols-2 gap-3 w-full max-w-[98%] mb-4">
            {whatWeDo.slice(0, 8).map((item, idx) => (
              <React.Fragment key={item.title}>
                <CardButton
                  title={item.title}
                  expanded={expanded === idx}
                  onClick={() => setExpanded(expanded === idx ? null : idx)}
                  className="text-base px-2 py-6"
                  animationProps={{ style: { minHeight: '80px', minWidth: '80px', maxWidth: '180px' } }}
                />
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

export default WorkWithUsPage;