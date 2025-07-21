'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Grid,
  List,
  Calendar,
  ChevronDown,
  Search,
  ChevronUp,
  Loader2,
  AlertCircle,
  RotateCcw,
} from 'lucide-react';
import { fetchData } from '../../../lib/apiClient';

// Updated GraphQL query - keeping skip for proper infinite scrolling
const GET_POSTS_QUERY = `
  query GetPost($first: Int!, $skip: Int!) {
    posts(first: $first, skip: $skip, orderBy: datePublished_DESC) {
      category {
        name
      }
      content {
        html
      }
      slug
      title
      datePublished
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
  datePublished: string;
}

export default function NewsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [activeTab, setActiveTab] = useState('All');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  // Error states
  const [error, setError] = useState<string | null>(null);
  const [loadMoreError, setLoadMoreError] = useState<string | null>(null);
  const [retrying, setRetrying] = useState(false);

  // New state for date filters
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [specificDate, setSpecificDate] = useState<string>('');
  const [dateSearchInput, setDateSearchInput] = useState<string>('');
  const [invalidDateEntered, setInvalidDateEntered] = useState<boolean>(false);

  // Infinite scroll states
  const [totalPostsLoaded, setTotalPostsLoaded] = useState<number>(0);
  const [postsPerPage] = useState<number>(3);
  const [hasMorePosts, setHasMorePosts] = useState<boolean>(true);

  // Back to top button states
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Refs for infinite scroll
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const isLoadingRef = useRef<boolean>(false);

  // Scroll event handler for back to top button
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolling(true);

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Set new timeout to detect when scrolling stops
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);

      // Show back to top button if scrolled down more than 300px and not currently scrolling
      setShowBackToTop(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const loadMorePosts = useCallback(async () => {
    // Prevent multiple simultaneous calls
    if (isLoadingRef.current || !hasMorePosts || loadingMore) {
      return;
    }

    isLoadingRef.current = true;
    setLoadingMore(true);
    setLoadMoreError(null); // Clear previous errors

    try {
      const data = await fetchData({
        query: GET_POSTS_QUERY,
        variables: {
          first: postsPerPage,
          skip: totalPostsLoaded,
        },
      });

      const formatted = data?.data?.posts.map((p: any) => ({
        title: p.title,
        slug: p.slug,
        date: p.datePublished,
        datePublished: p.datePublished,
        image: p.featuredImage?.url || '',
        category:
          Array.isArray(p.category) && p.category.length > 0 ? p.category[0].name : 'Uncategorized',
      }));

      if (formatted && formatted.length > 0) {
        // Append new posts to existing posts
        setPosts((prevPosts) => [...prevPosts, ...formatted]);
        setTotalPostsLoaded((prev) => prev + formatted.length);

        // If we get fewer posts than requested, we know we're at the end
        if (formatted.length < postsPerPage) {
          setHasMorePosts(false);
        }
      } else {
        // No more posts available
        setHasMorePosts(false);
      }
    } catch (err) {
      console.log('Failed to fetch more blog posts:', err);
      setLoadMoreError('Failed to load more posts. Please check your network connection.');
    } finally {
      setLoadingMore(false);
      isLoadingRef.current = false;
    }
  }, [postsPerPage, totalPostsLoaded, hasMorePosts, loadingMore]);

  const getPosts = useCallback(async () => {
    setLoading(true);
    setError(null); // Clear previous errors
    isLoadingRef.current = true;

    try {
      const data = await fetchData({
        query: GET_POSTS_QUERY,
        variables: {
          first: postsPerPage,
          skip: 0,
        },
      });

      const formatted = data?.data?.posts.map((p: any) => ({
        title: p.title,
        slug: p.slug,
        date: p.datePublished,
        datePublished: p.datePublished,
        image: p.featuredImage?.url || '',
        category:
          Array.isArray(p.category) && p.category.length > 0 ? p.category[0].name : 'Uncategorized',
      }));

      if (formatted) {
        setPosts(formatted);
        setTotalPostsLoaded(formatted.length);

        // If we get fewer posts than requested, we know we're at the end
        setHasMorePosts(formatted.length === postsPerPage);
        setError(null); // Clear error on success
      }
    } catch (err) {
      console.log('Failed to fetch blog posts:', err);
      setError('Please check your network connection and try again.');
    } finally {
      setLoading(false);
      isLoadingRef.current = false;
    }
  }, [postsPerPage]);

  // Retry function for initial load
  const handleRetry = async () => {
    setRetrying(true);
    await getPosts();
    setRetrying(false);
  };

  // Retry function for load more
  const handleLoadMoreRetry = async () => {
    setLoadMoreError(null);
    await loadMorePosts();
  };

  // Initial load
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  // Set up intersection observer for infinite scroll
  useEffect(() => {
    if (!sentinelRef.current || loading || error) return;

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && hasMorePosts && !isLoadingRef.current) {
        loadMorePosts();
      }
    };

    // Disconnect existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(handleObserver, {
      threshold: 0.1,
      rootMargin: '100px',
    });

    observerRef.current.observe(sentinelRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loading, hasMorePosts, loadMorePosts, error]);

  // Helper functions for date filtering
  const getUniqueYears = () => {
    const years = posts
      .map((post) => new Date(post.datePublished).getFullYear().toString())
      .filter(Boolean);
    return Array.from(new Set(years)).sort((a, b) => b.localeCompare(a));
  };

  const getMonthsInYear = (year: string) => {
    const monthsInYear = posts
      .filter((post) => new Date(post.datePublished).getFullYear().toString() === year)
      .map((post) => {
        const date = new Date(post.datePublished);
        return {
          value: date.getMonth().toString(),
          label: date.toLocaleString('default', { month: 'long' }),
        };
      });

    const uniqueMonths = Array.from(
      new Map(monthsInYear.map((item) => [item.value, item])).values(),
    ).sort((a, b) => parseInt(a.value) - parseInt(b.value));

    return uniqueMonths;
  };

  const categories = ['All', ...Array.from(new Set(posts.map((p) => p.category))).filter(Boolean)];

  const filteredPosts = posts
    .filter((post) => activeTab === 'All' || post.category === activeTab)
    .filter((post) => {
      if (invalidDateEntered) {
        return false;
      }

      if (selectedYear) {
        const postDate = new Date(post.datePublished);
        const postYear = postDate.getFullYear().toString();

        if (postYear !== selectedYear) return false;

        if (selectedMonth) {
          const postMonth = postDate.getMonth().toString();

          if (postMonth !== selectedMonth) return false;

          if (specificDate && specificDate.trim() !== '') {
            const postDay = postDate.getDate().toString().padStart(2, '0');
            if (postDay !== specificDate) return false;
          }
        }
      }

      return true;
    })
    .sort((a, b) => {
      const dateA = new Date(a.datePublished).getTime();
      const dateB = new Date(b.datePublished).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

  const menuItems = [
    { name: 'Research', route: 'firstSection', Icon: '' },
    { name: 'Safety', route: 'secondSection', Icon: '' },
    { name: 'Voltis Labs', route: 'thirdSection', Icon: '' },
    { name: 'Sora', route: 'firstSection', Icon: '' },
    { name: 'News', route: 'fifthSection', Icon: '' },
  ];

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedYear(value || null);
    setSelectedMonth(null);
    setSpecificDate('');
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedMonth(value || null);
    setSpecificDate('');
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDateSearchInput(value);

    if (!value) {
      setSpecificDate('');
      setInvalidDateEntered(false);
      return;
    }

    const valueLower = value.toLowerCase();

    const formatMonthDayYear = /([a-zA-Z]+)[\s,]+(\d{1,2})[\s,]*(\d{4})/i;
    const formatDayMonthYear = /(\d{1,2})[\s-/]+([a-zA-Z]{3,})[\s-/]+(\d{4})/i;
    const formatMonthYear = /([a-zA-Z]+)[\s,]*(\d{4})/i;
    const formatMonthOnly = /^([a-zA-Z]+)$/i;

    const matchFormat1 = value.match(formatMonthDayYear);
    const matchFormat2 = value.match(formatDayMonthYear);
    const matchFormat3 = value.match(formatMonthYear);
    const matchFormat4 = value.match(formatMonthOnly);

    const monthNames = [
      'january',
      'february',
      'march',
      'april',
      'may',
      'june',
      'july',
      'august',
      'september',
      'october',
      'november',
      'december',
    ];

    if (matchFormat1) {
      const monthName = matchFormat1[1].toLowerCase();
      const day = parseInt(matchFormat1[2]);
      const year = matchFormat1[3];

      const monthIndex = monthNames.findIndex((m) => monthName.startsWith(m.substring(0, 3)));

      if (monthIndex !== -1 && day >= 1 && day <= 31) {
        const potentialMatches = posts.filter((post) => {
          const postDate = new Date(post.datePublished);
          return (
            postDate.getDate() === day &&
            postDate.getMonth() === monthIndex &&
            postDate.getFullYear().toString() === year
          );
        });

        if (potentialMatches.length > 0) {
          setSelectedYear(year);
          setSelectedMonth(monthIndex.toString());
          setSpecificDate(day.toString().padStart(2, '0'));
          setInvalidDateEntered(false);
        } else {
          setInvalidDateEntered(true);
        }
      } else {
        setInvalidDateEntered(true);
      }
    } else if (matchFormat2) {
      const day = parseInt(matchFormat2[1]);
      const monthName = matchFormat2[2].toLowerCase();
      const year = matchFormat2[3];

      const abbreviatedMonths = [
        'jan',
        'feb',
        'mar',
        'apr',
        'may',
        'jun',
        'jul',
        'aug',
        'sep',
        'oct',
        'nov',
        'dec',
      ];
      const monthIndex = abbreviatedMonths.findIndex((m) => monthName.startsWith(m));

      if (monthIndex !== -1 && day >= 1 && day <= 31) {
        const potentialMatches = posts.filter((post) => {
          const postDate = new Date(post.datePublished);
          return (
            postDate.getDate() === day &&
            postDate.getMonth() === monthIndex &&
            postDate.getFullYear().toString() === year
          );
        });

        if (potentialMatches.length > 0) {
          setSelectedYear(year);
          setSelectedMonth(monthIndex.toString());
          setSpecificDate(day.toString().padStart(2, '0'));
          setInvalidDateEntered(false);
        } else {
          setInvalidDateEntered(true);
        }
      } else {
        setInvalidDateEntered(true);
      }
    } else if (matchFormat3) {
      const monthName = matchFormat3[1].toLowerCase();
      const year = matchFormat3[2];

      const monthIndex = monthNames.findIndex((m) => monthName.startsWith(m.substring(0, 3)));

      if (monthIndex !== -1) {
        const potentialMatches = posts.filter((post) => {
          const postDate = new Date(post.datePublished);
          return postDate.getMonth() === monthIndex && postDate.getFullYear().toString() === year;
        });

        if (potentialMatches.length > 0) {
          setSelectedYear(year);
          setSelectedMonth(monthIndex.toString());
          setSpecificDate('');
          setInvalidDateEntered(false);
        } else {
          setInvalidDateEntered(true);
        }
      } else {
        setInvalidDateEntered(true);
      }
    } else if (matchFormat4) {
      const monthName = matchFormat4[1].toLowerCase();

      const monthIndex = monthNames.findIndex((m) => monthName.startsWith(m));

      if (monthIndex !== -1) {
        const potentialMatches = posts.filter((post) => {
          const postDate = new Date(post.datePublished);
          return postDate.getMonth() === monthIndex;
        });

        if (potentialMatches.length > 0) {
          setSelectedMonth(monthIndex.toString());
          setSpecificDate('');
          setInvalidDateEntered(false);
        } else {
          setInvalidDateEntered(true);
        }
      } else {
        const partialMonthMatch = monthNames.some((m) => m.startsWith(valueLower));

        if (partialMonthMatch) {
          setInvalidDateEntered(false);
        } else {
          setInvalidDateEntered(true);
        }
      }
    } else {
      const dayMatch = value.match(/^\d{1,2}$/);
      if (dayMatch) {
        const day = parseInt(value);
        if (day >= 1 && day <= 31) {
          const dayExists = posts.some((post) => {
            const postDate = new Date(post.datePublished);
            return (
              postDate.getDate() === day &&
              (selectedMonth === null || postDate.getMonth().toString() === selectedMonth) &&
              (selectedYear === null || postDate.getFullYear().toString() === selectedYear)
            );
          });

          if (dayExists) {
            setSpecificDate(day.toString().padStart(2, '0'));
            setInvalidDateEntered(false);
          } else {
            setInvalidDateEntered(true);
          }
        } else {
          setInvalidDateEntered(true);
        }
      } else {
        const isStartOfMonthName = monthNames.some((month) => month.startsWith(valueLower));

        if (isStartOfMonthName) {
          setInvalidDateEntered(false);
        } else {
          setInvalidDateEntered(true);
        }
      }
    }
  };

  // Loading Skeleton Component for infinite scroll
  const LoadingSkeleton = () => (
    <div
      className={`${view === 'grid' ? 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3' : 'flex flex-col gap-6'}`}
    >
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className={`animate-pulse overflow-hidden ${view === 'list' ? 'flex flex-row' : ''}`}
        >
          <div
            className={`rounded-lg bg-gray-900 ${view === 'list' ? 'h-40 w-40' : 'aspect-square w-full'}`}
          />
          <div className={`${view === 'list' ? 'flex-1 p-4' : 'py-4'}`}>
            <div className="mb-2 h-4 rounded bg-gray-900" />
            <div className="h-3 w-2/3 rounded bg-gray-900" />
          </div>
        </div>
      ))}
    </div>
  );

  // Error Component
  const ErrorComponent = () => (
    <motion.div
      className="flex items-center justify-center bg-black text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto flex max-w-md flex-col items-center gap-6 px-4 text-center">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 2,
          }}
        >
          <AlertCircle size={64} className="text-red-500" />
        </motion.div>

        <div>
          <h2 className="mb-2 text-2xl font-bold text-white">Network Error</h2>
          <p className="leading-relaxed text-gray-400">
            {error || 'Please check your network connection and try again'}
          </p>
        </div>

        <motion.button
          onClick={handleRetry}
          disabled={retrying}
          className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-black transition-all hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
          whileHover={{ scale: retrying ? 1 : 1.05 }}
          whileTap={{ scale: retrying ? 1 : 0.95 }}
        >
          {retrying ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Retrying...</span>
            </>
          ) : (
            <>
              <RotateCcw className="h-4 w-4" />
              <span>Retry</span>
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  );

  return (
    <div className="mx-auto min-h-screen max-w-[75rem] bg-black px-4 py-12 pt-28 text-white sm:px-6 lg:px-8">
      {/* <Sidebar tbList={menuItems} /> */}

      {/* Back to top button */}
      <AnimatePresence>
        {showBackToTop && !isScrolling && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-gray-700 bg-black/90 backdrop-blur-sm transition-colors hover:bg-gray-800"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp className="h-5 w-5 text-white" />
          </motion.button>
        )}
      </AnimatePresence>

      <h1 className="mb-8 text-3xl font-bold sm:text-4xl">News</h1>

      {/* Year and month drop down displayed side by side */}
      <div className="mb-6 flex flex-wrap items-center gap-4">
        {/* Year DropDown filter */}
        <div className="relative">
          <select
            className="appearance-none rounded-lg border border-gray-700 bg-black px-4 py-2 pr-8 text-white focus:border-gray-400 focus:outline-none"
            value={selectedYear || ''}
            onChange={handleYearChange}
          >
            <option value="">All Years</option>
            {getUniqueYears().map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
            <ChevronDown size={16} />
          </div>
        </div>

        {/* Month dropdown filter */}
        {selectedYear && (
          <div className="relative">
            <select
              className="appearance-none rounded-lg border border-gray-700 bg-black px-4 py-2 pr-8 text-white focus:border-gray-400 focus:outline-none"
              value={selectedMonth || ''}
              onChange={handleMonthChange}
            >
              <option value="">All Months</option>
              {getMonthsInYear(selectedYear).map((month) => (
                <option key={month.value} value={month.value}>
                  {month.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
              <ChevronDown size={16} />
            </div>
          </div>
        )}

        {/* Day search input */}
        {selectedYear && selectedMonth && (
          <div className="relative flex-grow md:max-w-xs">
            <input
              type="text"
              placeholder="Search by date (e.g., February, April 2025, February 16, 2025)"
              className={`w-full rounded-lg border ${
                invalidDateEntered ? 'border-red-500' : 'border-gray-700'
              } bg-black py-2 pl-4 pr-10 text-white placeholder-gray-500 focus:border-gray-400 focus:outline-none`}
              value={dateSearchInput}
              onChange={handleDateChange}
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
              <Search size={16} />
            </div>
            {invalidDateEntered && (
              <div className="mt-1 text-sm text-red-500">No posts found for this date</div>
            )}
          </div>
        )}

        {/* Clear filters button */}
        {(selectedYear || selectedMonth || specificDate) && (
          <button
            onClick={() => {
              setSelectedYear(null);
              setSelectedMonth(null);
              setSpecificDate('');
              setDateSearchInput('');
              setInvalidDateEntered(false);
            }}
            className="rounded-lg border border-gray-700 bg-transparent px-3 py-2 text-sm text-gray-400 hover:border-gray-400 hover:text-white"
          >
            Clear Filters
          </button>
        )}
      </div>

      {/* Controls */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        {/* Categories */}
        <div className="">
          {loading ? (
            <div className="flex flex-row gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="mb-2 h-4 w-16 rounded bg-gray-900" />
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-4 text-gray-400 sm:gap-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`pb-1 text-sm ${
                    activeTab === cat ? 'font-bold text-white' : 'hover:text-gray-200'
                  }`}
                  onClick={() => setActiveTab(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
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

      {/* Post count */}
      <div className="mb-4 text-sm text-gray-400">
        Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
        {totalPostsLoaded > 0 && ` (${totalPostsLoaded} total loaded)`}
      </div>

      {/* Blog List */}
      {error && !loading && posts.length === 0 ? (
        <ErrorComponent />
      ) : (
        <div>
          {loading ? (
            <LoadingSkeleton />
          ) : (
            <div
              className={
                view === 'grid'
                  ? 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
                  : 'flex flex-col gap-6'
              }
            >
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post, i) => (
                  <Link key={`${post.slug}-${i}`} href={`/blog/${post.slug}`}>
                    <div
                      className={`group overflow-hidden transition-all duration-300 hover:scale-105 ${
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
                          {new Date(post.datePublished).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <motion.div
                  className="col-span-full rounded-xl border border-gray-700 bg-black/50 py-12 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      repeatDelay: 1,
                    }}
                  >
                    <Calendar size={48} className="mx-auto mb-4 text-gray-400" />
                  </motion.div>
                  <motion.h3
                    className="mb-2 text-xl font-bold text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    No posts found
                  </motion.h3>
                  <motion.p
                    className="mx-auto max-w-md text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    Try adjusting your date filters or category selection to find more content.
                  </motion.p>
                </motion.div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Load More Error */}
      {loadMoreError && (
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4">
            <div className="flex flex-col items-center gap-3">
              <AlertCircle className="h-5 w-5 text-red-400" />
              <p className="text-sm text-red-400">{loadMoreError}</p>
              <button
                onClick={handleLoadMoreRetry}
                className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-600"
              >
                <RotateCcw className="h-4 w-4" />
                Retry
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Infinite scroll sentinel element */}
      {hasMorePosts && !loadMoreError && (
        <div ref={sentinelRef} className="mt-8">
          <AnimatePresence>
            {loadingMore && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {/* Skeleton loading cards */}
                <LoadingSkeleton />

                {/* Loading indicator */}
                <motion.div
                  className="mt-6 flex items-center justify-center"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                >
                  <div className="flex flex-col items-center gap-3 rounded-xl border border-gray-700 bg-black/50 px-8 py-4">
                    <div className="flex items-center gap-3">
                      <Loader2 className="h-5 w-5 animate-spin text-white" />
                      <span className="text-sm font-medium text-white">Loading more posts...</span>
                    </div>
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 animate-pulse rounded-full bg-gray-400" />
                      <div
                        className="h-2 w-2 animate-pulse rounded-full bg-gray-400"
                        style={{ animationDelay: '0.2s' }}
                      />
                      <div
                        className="h-2 w-2 animate-pulse rounded-full bg-gray-400"
                        style={{ animationDelay: '0.4s' }}
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* End of posts indicator */}
      {!hasMorePosts && posts.length > 0 && (
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gray-700" />
            <p className="px-4 text-sm text-gray-400">You've reached the end of all posts</p>
            <div className="h-px flex-1 bg-gray-700" />
          </div>
        </motion.div>
      )}

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
