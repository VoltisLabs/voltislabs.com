'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Grid, List, Calendar, ChevronDown, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import Sidebar from '@/src/components/UI/SideBar';
import { fetchData } from '../../../lib/apiClient';

// Updated GraphQL query with pagination variables
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
  
  // New state for date filters
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [specificDate, setSpecificDate] = useState<string>('');
  const [dateSearchInput, setDateSearchInput] = useState<string>('');
  const [invalidDateEntered, setInvalidDateEntered] = useState<boolean>(false);

  // Pagination states
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(9); // Number of posts per page
  const [hasMorePosts, setHasMorePosts] = useState<boolean>(true); // To check if there are more posts

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      try {
        const skip = (currentPage - 1) * postsPerPage;
        
        const data = await fetchData({ 
          query: GET_POSTS_QUERY,
          variables: {
            first: postsPerPage,
            skip: skip
          }
        });

        const formatted = data?.data?.posts.map((p: any) => ({
          title: p.title,
          slug: p.slug,
          date: p.datePublished,
          datePublished: p.datePublished,
          image: p.featuredImage?.url || '',
          category:
            Array.isArray(p.category) && p.category.length > 0
              ? p.category[0].name
              : 'Uncategorized',
        }));

        setPosts(formatted);
        
        // If we get fewer posts than requested, we know we're at the end
        setHasMorePosts(formatted.length === postsPerPage);
      } catch (err) {
        console.error('Failed to fetch blog posts:', err);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, [currentPage, postsPerPage]);

  // Helper functions for date filtering
  const getUniqueYears = () => {
    const years = posts
      .map(post => new Date(post.datePublished).getFullYear().toString())
      .filter(Boolean);
    return Array.from(new Set(years)).sort((a, b) => b.localeCompare(a)); // Sort descending (newest first)
  };

  const getMonthsInYear = (year: string) => {
    // Get all months that have posts in the selected year
    const monthsInYear = posts
      .filter(post => new Date(post.datePublished).getFullYear().toString() === year)
      .map(post => {
        const date = new Date(post.datePublished);
        return { 
          value: date.getMonth().toString(), 
          label: date.toLocaleString('default', { month: 'long' }) 
        };
      });
    
    // Remove duplicates and sort by month number
    const uniqueMonths = Array.from(
      new Map(monthsInYear.map(item => [item.value, item])).values()
    ).sort((a, b) => parseInt(a.value) - parseInt(b.value));
    
    return uniqueMonths;
  };

  const getFormattedAvailableDates = () => {
    if (!selectedYear || !selectedMonth) return [];
    
    // Get all available dates for the selected year and month
    return posts
      .filter(post => {
        const date = new Date(post.datePublished);
        return date.getFullYear().toString() === selectedYear && 
               date.getMonth().toString() === selectedMonth;
      })
      .map(post => {
        const date = new Date(post.datePublished);
        // Format as "February 16, 2025"
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      })
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort();
  };

  const categories = ['All', ...Array.from(new Set(posts.map((p) => p.category))).filter(Boolean)];

  const filteredPosts = posts
    .filter((post) => activeTab === 'All' || post.category === activeTab)
    .filter((post) => {
      // If user has entered an invalid date, return no posts
      if (invalidDateEntered) {
        return false;
      }
      
      // Apply year filter if selected
      if (selectedYear) {
        const postDate = new Date(post.datePublished);
        const postYear = postDate.getFullYear().toString();
        
        if (postYear !== selectedYear) return false;
        
        // Apply month filter if selected
        if (selectedMonth) {
          const postMonth = postDate.getMonth().toString();
          
          if (postMonth !== selectedMonth) return false;
          
          // Apply specific date filter if provided
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
    setSelectedMonth(null); // Reset month when year changes
    setSpecificDate(''); // Reset date when year changes
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedMonth(value || null);
    setSpecificDate(''); // Reset day when month changes
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;
  setDateSearchInput(value);
  
  if (!value) {
    setSpecificDate('');
    setInvalidDateEntered(false);
    return;
  }
  
  // Always check immediately upon first character input
  const valueLower = value.toLowerCase();
  
  // Format 1: "February 16, 2025" or "February 16 2025"
  const formatMonthDayYear = /([a-zA-Z]+)[\s,]+(\d{1,2})[\s,]*(\d{4})/i;
  
  // Format 2: "14-MAY-2020" or "14 MAY 2020" or "14/MAY/2020"
  const formatDayMonthYear = /(\d{1,2})[\s-/]+([a-zA-Z]{3,})[\s-/]+(\d{4})/i;
  
  // Format 3: "April 2025" - Month and year only
  const formatMonthYear = /([a-zA-Z]+)[\s,]*(\d{4})/i;
  
  // Format 4: "April" - Just month name
  const formatMonthOnly = /^([a-zA-Z]+)$/i;
  
  const matchFormat1 = value.match(formatMonthDayYear);
  const matchFormat2 = value.match(formatDayMonthYear);
  const matchFormat3 = value.match(formatMonthYear);
  const matchFormat4 = value.match(formatMonthOnly);
  
  // Full month names array for lookup
  const monthNames = [
    "january", "february", "march", "april", "may", "june", 
    "july", "august", "september", "october", "november", "december"
  ];
  
  if (matchFormat1) {
    // Handle "February 16, 2025" format
    const monthName = matchFormat1[1].toLowerCase();
    const day = parseInt(matchFormat1[2]);
    const year = matchFormat1[3];
    
    const monthIndex = monthNames.findIndex(m => 
      monthName.startsWith(m.substring(0, 3))
    );
    
    if (monthIndex !== -1 && day >= 1 && day <= 31) {
      // Check if this date exists in our posts
      const potentialMatches = posts.filter(post => {
        const postDate = new Date(post.datePublished);
        return postDate.getDate() === day && 
                postDate.getMonth() === monthIndex &&
                postDate.getFullYear().toString() === year;
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
    // Handle "14-MAY-2020" format
    const day = parseInt(matchFormat2[1]);
    const monthName = matchFormat2[2].toLowerCase();
    const year = matchFormat2[3];
    
    // Convert abbreviated month name to month number (0-11)
    const abbreviatedMonths = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    const monthIndex = abbreviatedMonths.findIndex(m => monthName.startsWith(m));
    
    if (monthIndex !== -1 && day >= 1 && day <= 31) {
      // Check if this date exists in our posts
      const potentialMatches = posts.filter(post => {
        const postDate = new Date(post.datePublished);
        return postDate.getDate() === day && 
                postDate.getMonth() === monthIndex &&
                postDate.getFullYear().toString() === year;
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
    // Handle "April 2025" format - month and year only
    const monthName = matchFormat3[1].toLowerCase();
    const year = matchFormat3[2];
    
    const monthIndex = monthNames.findIndex(m => 
      monthName.startsWith(m.substring(0, 3))
    );
    
    if (monthIndex !== -1) {
      // Check if there are posts from this month and year
      const potentialMatches = posts.filter(post => {
        const postDate = new Date(post.datePublished);
        return postDate.getMonth() === monthIndex &&
                postDate.getFullYear().toString() === year;
      });
      
      if (potentialMatches.length > 0) {
        setSelectedYear(year);
        setSelectedMonth(monthIndex.toString());
        setSpecificDate(''); // No specific day
        setInvalidDateEntered(false);
      } else {
        setInvalidDateEntered(true);
      }
    } else {
      setInvalidDateEntered(true);
    }
  } else if (matchFormat4) {
    // Handle just a month name like "April"
    const monthName = matchFormat4[1].toLowerCase();
    
    const monthIndex = monthNames.findIndex(m => 
      monthName.startsWith(m)
    );
    
    if (monthIndex !== -1) {
      // Check if there are any posts from this month (in any year)
      const potentialMatches = posts.filter(post => {
        const postDate = new Date(post.datePublished);
        return postDate.getMonth() === monthIndex;
      });
      
      if (potentialMatches.length > 0) {
        // If we find posts, set only the month filter
        // Keep the year if already selected, otherwise don't filter by year
        setSelectedMonth(monthIndex.toString());
        setSpecificDate(''); // No specific day
        setInvalidDateEntered(false);
      } else {
        setInvalidDateEntered(true);
      }
    } else {
      // Check if the partial month name matches the beginning of any month
      const partialMonthMatch = monthNames.some(m => m.startsWith(valueLower));
      
      if (partialMonthMatch) {
        // If it's a partial match for a month name, don't mark as invalid yet
        setInvalidDateEntered(false);
      } else {
        // If it doesn't match the beginning of any month name, mark as invalid
        setInvalidDateEntered(true);
      }
    }
  } else {
    // Check for simple day input
    const dayMatch = value.match(/^\d{1,2}$/);
    if (dayMatch) {
      const day = parseInt(value);
      if (day >= 1 && day <= 31) {
        // Only set the day if it exists in the current month/year selection
        const dayExists = posts.some(post => {
          const postDate = new Date(post.datePublished);
          return postDate.getDate() === day && 
                (selectedMonth === null || postDate.getMonth().toString() === selectedMonth) &&
                (selectedYear === null || postDate.getFullYear().toString() === selectedYear);
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
      // For any other input that doesn't match our formats, check if it might be the start of a month name
      const isStartOfMonthName = monthNames.some(month => month.startsWith(valueLower));
      
      if (isStartOfMonthName) {
        setInvalidDateEntered(false);
      } else {
        // If not, mark as invalid immediately
        setInvalidDateEntered(true);
      }
    }
  }
};

  // Pagination handlers
  const handleNextPage = async () => {
    if (!hasMorePosts) return;
    setCurrentPage(prev => prev + 1);
    // Loading will be handled by useEffect
  };

  const handlePrevPage = () => {
    if (currentPage <= 1) return;
    setCurrentPage(prev => prev - 1);
    // Loading will be handled by useEffect
  };

  // Loading state
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
      {/* <Sidebar tbList={menuItems} /> */}

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
              } bg-black pl-4 pr-10 py-2 text-white placeholder-gray-500 focus:border-gray-400 focus:outline-none`}
              value={dateSearchInput}
              onChange={handleDateChange}
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
              <Search size={16} />
            </div>
            {invalidDateEntered && (
              <div className="mt-1 text-sm text-red-500">
                No posts found for this date
              </div>
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

      {/* Post count and pagination info */}
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm text-gray-400">
          Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
          {currentPage > 1 && ` (Page ${currentPage})`}
        </div>
        
        {/* Pagination controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevPage}
            disabled={currentPage <= 1}
            className={`flex items-center gap-1 rounded-lg border border-gray-700 px-3 py-1 text-sm transition-colors ${
              currentPage <= 1
                ? 'cursor-not-allowed opacity-50'
                : 'hover:border-gray-400 hover:text-white'
            }`}
          >
            <ChevronLeft size={16} /> Previous
          </button>
          
          <button
            onClick={handleNextPage}
            disabled={!hasMorePosts || filteredPosts.length < postsPerPage}
            className={`flex items-center gap-1 rounded-lg border border-gray-700 px-3 py-1 text-sm transition-colors ${
              !hasMorePosts || filteredPosts.length < postsPerPage
                ? 'cursor-not-allowed opacity-50'
                : 'hover:border-gray-400 hover:text-white'
            }`}
          >
            Next <ChevronRight size={16} />
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
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, i) => (
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
                repeatType: "reverse",
                repeatDelay: 1
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

      {/* Pagination controls (bottom) */}
      {filteredPosts.length > 0 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          <button
            onClick={handlePrevPage}
            disabled={currentPage <= 1}
            className={`flex items-center gap-1 rounded-lg border border-gray-700 px-3 py-2 text-sm transition-colors ${
              currentPage <= 1
                ? 'cursor-not-allowed opacity-50'
                : 'hover:border-gray-400 hover:text-white'
            }`}
          >
            <ChevronLeft size={16} /> Previous
          </button>
          
          <div className="mx-2 text-sm text-gray-400">
            Page {currentPage}
          </div>
          
          <button
            onClick={handleNextPage}
            disabled={!hasMorePosts || filteredPosts.length < postsPerPage}
            className={`flex items-center gap-1 rounded-lg border border-gray-700 px-3 py-2 text-sm transition-colors ${
              !hasMorePosts || filteredPosts.length < postsPerPage
                ? 'cursor-not-allowed opacity-50'
                : 'hover:border-gray-400 hover:text-white'
            }`}
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
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