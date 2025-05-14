'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Grid, List } from 'lucide-react';
import Sidebar from '@/src/components/UI/SideBar';
import { fetchData } from '../../../lib/apiClient';

const GET_POSTS_QUERY = `
  query GetPost {
    posts {
      category {
        name
      }
      content {
        html
      }
      createdAt
      slug
      title
      updatedAt
      publishedAt
      publishedBy {
        name
        picture
      }
      featuredImage {
        url
      }
    }
  }
`;

interface Post {
  title: string;
  slug: string;
  date: string;
  image: string;
  category: any;
}

export default function NewsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [activeTab, setActiveTab] = useState('All');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchData({ query: GET_POSTS_QUERY });

        const formatted = data?.data?.posts.map((p: any) => ({
          title: p.title,
          slug: p.slug,
          date: p.publishedAt || p.createdAt,
          image: p.featuredImage?.url || '',
          category:
            Array.isArray(p.category) && p.category.length > 0
              ? p.category[0].name
              : 'Uncategorized',
        }));

        setPosts(formatted);
      } catch (err) {
        console.error('Failed to fetch blog posts:', err);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  const categories = ['All', ...Array.from(new Set(posts.map((p) => p.category))).filter(Boolean)];

  const filteredPosts = posts
    .filter((post) => activeTab === 'All' || post.category === activeTab)
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

  const menuItems = [
    { name: 'Research', route: 'firstSection', Icon: '' },
    { name: 'Safety', route: 'secondSection', Icon: '' },
    { name: 'Voltis Labs', route: 'thirdSection', Icon: '' },
    { name: 'Sora', route: 'firstSection', Icon: '' },
    { name: 'News', route: 'fifthSection', Icon: '' },
  ];

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-white border-t-transparent" />
          <p className="text-sm text-gray-300">Loading news...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto min-h-screen max-w-[75rem] bg-black px-4 py-12 pt-28 text-white sm:px-6 lg:px-8">
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
                activeTab === cat ? 'font-bold text-white' : 'hover:text-gray-200'
              }`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* View Toggle */}
        <div className="flex gap-2">
          <button
            onClick={() => setView('grid')}
            className={`rounded p-2 ${view === 'grid' ? 'text-white' : 'text-gray-200'}`}
          >
            <Grid size={16} />
          </button>
          <button
            onClick={() => setView('list')}
            className={`rounded p-2 ${view === 'list' ? 'text-white' : 'text-gray-200'}`}
          >
            <List size={16} />
          </button>
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
                className={`rounded-lg object-cover transition-transform duration-300 ${
                  view === 'list' ? 'h-40 w-40' : 'aspect-square w-full'
                }`}
              />
              <div className={`${view === 'list' ? 'p-4' : 'py-4'}`}>
                <h3 className="text-md mb-4 mt-1 overflow-hidden truncate whitespace-nowrap font-semibold text-white">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-400">
                  <span className="font-bold text-white">{post.category}</span> —{' '}
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
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
