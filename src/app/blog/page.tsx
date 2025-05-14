'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { blogPosts } from './components/blogData';
import Link from 'next/link';
import { Grid, List, ChevronDown } from 'lucide-react';
import Sidebar from "@/src/components/UI/SideBar";

const categories = [
  'All',
  'Voltis Labs',
  'Prelura',
  'Spinnersonic',
  'VModel',
  'Productivty',
];

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const filteredPosts = blogPosts
    .filter((post) => activeTab === 'All' || post.category === activeTab)
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });
  const menuItems = [
    { name: "Research", route: "firstSection", Icon: "" },
    { name: "Safety", route: "secondSection", Icon: "" },
    { name: "Voltis Labs", route: "thirdSection", Icon: "" },
    { name: "Sora", route: "firstSection", Icon: "" },
    { name: "News", route: "fifthSection", Icon: "" },
  ];
  return (
    <div className="min-h-screen bg-black mx-auto max-w-[75rem]  px-4 py-12 pt-28 text-white sm:px-6 lg:px-8">
           <Sidebar tbList={menuItems} />

      <h1 className="mb-8 text-3xl font-bold sm:text-4xl">News</h1>

      {/* Controls */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        {/* Categories */}
        <div className="flex flex-wrap gap-4 text-gray-400 sm:gap-6">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`pb-1 text-base sm:text-lg ${
                activeTab === cat
                  ? ' font-bold text-white'
                  : 'hover:text-gray-200'
              }`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort + View */}
        <div className="flex items-center gap-4">
          {/* Sort */}
          {/* <div className="relative text-sm">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as 'newest' | 'oldest')}
              className="bg-black text-white border border-gray-600 px-3 py-1 rounded-md focus:outline-none"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div> */}

          {/* View Toggle */}
          <div className="flex gap-2">
            <button
              onClick={() => setView('grid')}
              className={`rounded p-2 ${view === 'grid' ? ' text-white' : 'text-gray-200'}`}
            >
              <Grid size={16} />
            </button>
            <button
              onClick={() => setView('list')}
              className={`rounded p-2 ${view === 'list' ? ' text-white' : 'text-gray-200'}`}
            >
              <List size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Blog List */}
      <div
        className={
          view === 'grid'
            ? 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
            : 'flex flex-col gap-6'
        }
      >
        {filteredPosts.map((post, i) => (
          <Link key={i} href={`/blog/${post.slug}`}>
            <div
              className={`group overflow-hidden transition-all duration-300 ${
                view === 'list' ? 'flex flex-row' : ''
              }`}
            >
              <img
                src={post.image}
                alt={post.title}
                className={`object-cover rounded-lg transition-transform duration-300 ${
                  view === 'list' ? 'h-40 w-40' : 'aspect-square w-full'
                }`}
              />
              <div className={`${view === 'list' ? 'p-4' : ' py-4'}`}>
                <h3 className="mt-1 mb-4 overflow-hidden truncate whitespace-nowrap text-md font-semibold text-white">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-400">
                  <span className='text-white font-bold'>{post.category}</span> — {post.date}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Newsletter */}
      <motion.div
        className="mt-16 rounded-xl border border-gray-400 bg-transparent p-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <motion.h3 className="mb-4 text-2xl font-bold text-white">Want to stay updated?</motion.h3>
        <motion.p className="mx-auto mb-6 max-w-lg text-gray-400">
          Join our newsletter to get updates on new products, features, and our philosophy of
          human-centered tech.
        </motion.p>
        <motion.div
          className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row"
          whileTap={{ scale: 0.98 }}
        >
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow rounded-lg border border-gray-300 bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <motion.button
            className="rounded-lg bg-black px-6 py-3 font-medium text-white"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 5px 15px rgba(255, 255, 255, 0.2)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
