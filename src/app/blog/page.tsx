'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { blogPosts } from './components/blogData';
import Link from 'next/link';
import { Grid, List, ChevronDown } from 'lucide-react';

const categories = ['All', 'Voltis Labs'];

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

  return (
    <div className="min-h-screen bg-black px-4 py-12 pt-28 text-white sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold sm:text-4xl">Blog</h1>

      {/* Controls */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        {/* Categories */}
        <div className="flex flex-wrap gap-4 text-gray-400 sm:gap-6">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`pb-1 text-base sm:text-lg ${
                activeTab === cat
                  ? 'border-b-2 border-white font-bold text-white'
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
              className={`p-2 rounded ${view === 'grid' ? 'bg-white text-black' : 'bg-gray-800'}`}
            >
              <Grid size={16} />
            </button>
            <button
              onClick={() => setView('list')}
              className={`p-2 rounded ${view === 'list' ? 'bg-white text-black' : 'bg-gray-800'}`}
            >
              <List size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Blog List */}
      <div className={view === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col gap-6'}>
        {filteredPosts.map((post, i) => (
          <Link key={i} href={`/blog/${post.slug}`}>
            <div
              className={`group overflow-hidden rounded-lg bg-[#111] transition-all duration-300 ${
                view === 'list' ? 'flex flex-row' : ''
              }`}
            >
              <img
                src={post.image}
                alt={post.title}
                className={`${post.contain? 'object-contain': 'object-cover'} transition-transform duration-300 group-hover:scale-105 ${
                  view === 'list' ? 'w-40 h-40' : 'w-full aspect-square'
                }`}
              />
              <div className={`${view === 'list' ? 'p-4' : 'px-4 py-4'}`}>
                <p className="text-xs text-gray-400">
                  {post.category} — {post.date}
                </p>
                <h3  className="mt-1 text-sm  truncate whitespace-nowrap overflow-hidden font-semibold text-white">{post.title}</h3>
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
