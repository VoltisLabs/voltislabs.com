'use client';

import { About, updates } from './data';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import Content from '../components/Content';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight, FaSpotify } from 'react-icons/fa';
import { fetchData } from '../../lib/apiClient';

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

export default function Home() {
  const updatesContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const latestNewsContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeftLatest, setCanScrollLeftLatest] = useState(false);
  const [canScrollRightLatest, setCanScrollRightLatest] = useState(false);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  const heroSlides = [
    {
      title: 'We design and build scalable digital products.',
      subtitle: 'Creator platforms. Marketplaces. Apps that scale.',
      cta: { href: '/products', label: 'Explore Our Products' },
    },
    {
      title: 'Voltis Core',
      subtitle:
        'A growing suite of productivity tools designed to help you write, organise, and stay in control.',
      cta: { href: '/tools', label: 'Explore Tools' },
    },
  ];

  const getPosts = useCallback(async () => {
    setLoading(true);
    setError(null); // Clear previous errors
    // isLoadingRef.current = true;

    try {
      const data = await fetchData({
        query: GET_POSTS_QUERY,
        variables: {
          first: 4, // Fetch only 4 posts for the homepage showcase
          skip: 0,
        },
      });

      const raw = data?.data?.posts;
      const list = Array.isArray(raw) ? raw : [];
      const formatted = list.map((p: any) => ({
        title: p.title,
        slug: p.slug,
        date: p.datePublished,
        datePublished: p.datePublished,
        image: p.featuredImage?.url || '',
        category:
          Array.isArray(p.category) && p.category.length > 0 ? p.category[0].name : 'Uncategorized',
      }));

      setPosts(formatted);
      setError(null);
    } catch (err) {
      console.error("Failed to fetch blog posts:", err);
      const msg =
        err instanceof Error
          ? err.message
          : "Could not load latest news. Open the News Blog or try again later.";
      setError(msg);
    } finally {
      setLoading(false);
      // isLoadingRef.current = false;
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  // Function to check scroll position and update arrow visibility
  const checkScrollPosition = () => {
    const container = updatesContainerRef.current;
    if (container) {
      const hasScroll = container.scrollWidth > container.clientWidth;
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        hasScroll && container.scrollLeft + container.clientWidth < container.scrollWidth - 1,
      );
    }
  };

  const checkScrollPositionLatest = () => {
    const container = latestNewsContainerRef.current;
    if (container) {
      const hasScroll = container.scrollWidth > container.clientWidth;
      setCanScrollLeftLatest(container.scrollLeft > 0);
      setCanScrollRightLatest(
        hasScroll && container.scrollLeft + container.clientWidth < container.scrollWidth - 1,
      );
    }
  };

  useEffect(() => {
    const container = latestNewsContainerRef.current;
    if (container) {
      checkScrollPositionLatest(); // Initial check
      container.addEventListener('scroll', checkScrollPositionLatest); // Listen for scroll events
      return () => container.removeEventListener('scroll', checkScrollPositionLatest);
    }
  }, []);

  useEffect(() => {
    const container = updatesContainerRef.current;
    if (container) {
      checkScrollPosition(); // Initial check
      container.addEventListener('scroll', checkScrollPosition); // Listen for scroll events
      return () => container.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, [heroSlides.length]);

  return (
    <div className="page-container relative min-h-screen w-full bg-vl-cream">
      {/* Previous slider intentionally disabled for now.
      <div className="item-container absolute inset-x-0 top-0 z-0 min-h-[37rem] w-full md:min-h-[42rem]">
        ...
      </div>
      */}

      <section className="hero-shell px-[1rem] pb-11 pt-[6.1rem] md:px-[2rem] md:pb-16 md:pt-[6.7rem]">
        <div className="mx-auto flex w-full max-w-5xl flex-col justify-center gap-8 md:min-h-[37vh]">
          <div className="max-w-3xl">
            <div className="hero-stage relative min-h-[15.5rem] md:min-h-[17rem]">
              {heroSlides.map((slide, idx) => (
                <div
                  key={slide.title}
                  className={`hero-slide absolute inset-0 ${activeHeroSlide === idx ? 'is-active' : ''}`}
                  aria-hidden={activeHeroSlide !== idx}
                >
                  <h1 className="hero-reveal hero-reveal-1 text-balance text-4xl font-bold leading-[1.03] text-vl-brown-dark sm:text-5xl md:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="hero-reveal hero-reveal-2 mt-6 max-w-2xl text-lg leading-relaxed text-vl-ink-muted md:text-xl">
                    {slide.subtitle}
                  </p>
                  <div className="hero-reveal hero-reveal-3 mt-10 flex flex-wrap items-center gap-3">
                    <Link
                      href={slide.cta.href}
                      className="inline-flex items-center rounded-full border border-vl-brown bg-vl-brown px-5 py-2.5 text-sm font-semibold text-vl-cream transition hover:bg-vl-brown-dark"
                    >
                      {slide.cta.label}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2">
              {heroSlides.map((slide, idx) => (
                <button
                  key={`dot-${slide.title}`}
                  type="button"
                  onClick={() => setActiveHeroSlide(idx)}
                  aria-label={`Show hero slide ${idx + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${activeHeroSlide === idx ? 'bg-vl-brown scale-110' : 'bg-vl-brown/30 hover:bg-vl-brown/55'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="content-container pt-10">
        <Content showResponsible={false} />
        {/* <section className="overflow-x-scroll no-scrollbar flex md:px-[2rem] px-[1rem] pt-[3.45rem]   w-full min-h-[150px] md:gap-12 gap:4  mb-20">
          {About.map((text, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-1 min-w-[200px] md:gap-3 gap-1  overflow-hidden"
            >
              <p className="text-white md:text-[1.5rem] text-[1.2rem] font-medium">
                {text.title}
              </p>
              <Link
                href={text.route}
                className="text-white underline font-normal text-sm    mt-2 cursor-pointer  sm:mt-0  hover:text-blue-500"
              >
                {text.message}
              </Link>
            </div>
          ))}
        </section> */}

        <section className="relative mb-20 mt-10 min-h-[16rem] px-[1rem] md:mt-20 md:min-h-[20rem] md:px-[2rem]">
          <div className="mb-6 w-full border border-vl-brown/20"></div>
          <div className="mb-10 flex flex-row items-start justify-between text-vl-ink sm:items-center">
            <h2 className="text-[1.6rem] font-semibold tracking-tight text-vl-brown-dark md:text-[1.7rem]">
              Latest Updates
            </h2>
            <Link
              href={"/latest-updates"}
              className="mt-2 text-sm font-semibold text-vl-brown underline decoration-vl-brown/40 underline-offset-4 transition-colors hover:text-vl-brown-dark sm:mt-0"
            >
              See all
            </Link>
          </div>

          {/* Scrollable Section with Arrows */}
          <div className="relative">
            {canScrollLeft && (
              <button
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 transform rounded-full border border-vl-brown/20 bg-vl-cream p-3 text-vl-ink shadow-md hover:bg-vl-cream-deep focus:outline-none"
                onClick={() => {
                  const container = updatesContainerRef.current;
                  container?.scrollBy({ left: -300, behavior: 'smooth' });
                }}
              >
                <FaChevronLeft size={20} />
              </button>
            )}

            {/* Scrollable Content */}
            <div
              id="home-updates-scroll"
              ref={updatesContainerRef}
              className="no-scrollbar flex min-w-0 items-stretch overflow-x-scroll"
            >
              <div className="flex h-full min-h-0 items-stretch gap-4 md:gap-5 md:w-full">
                {updates.map((text, index) => (
                  <div
                    key={index}
                    className="flex w-[9.75rem] shrink-0 flex-col cursor-pointer items-stretch overflow-hidden text-left md:w-[12rem]"
                  >
                    {/* Link must not wrap a nested <a> (Spotify CTA) - invalid HTML and hydration errors. */}
                    <Link
                      href={`/latest-updates?item=${index}`}
                      scroll={false}
                      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-vl-brown/40"
                    >
                      {/* Same aspect as before (310×300), only scaled down */}
                      <div className="image-container relative aspect-[310/300] w-full min-h-0 overflow-hidden rounded-[10px]">
                        {text.img.endsWith('.svg') ? (
                          <img
                            src={text.img}
                            alt={text.message}
                            className="h-full w-full min-h-0 object-cover object-center transition-all duration-[.85s] ease-in-out hover:scale-110"
                          />
                        ) : (
                          <Image
                            src={text.img}
                            alt={text.message}
                            width={200}
                            height={194}
                            sizes="(max-width: 768px) 156px, 192px"
                            className="h-full w-full object-cover transition-all duration-[.85s] ease-in-out hover:scale-110"
                          />
                        )}
                      </div>
                      <p className="mt-3 text-[.9rem] font-semibold text-vl-ink">{text.message}</p>
                      {text.subText && (
                        <p className="text-[.9rem] font-medium text-vl-ink-muted">{text.subText}</p>
                      )}
                      <p className="text-[.7rem] font-medium uppercase tracking-wide text-vl-ink-muted">
                        {text.time}
                      </p>
                    </Link>
                    {text.spotify && text.spotifyLink ? (
                      <a
                        href={text.spotifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative mt-4 inline-flex w-fit cursor-pointer items-center gap-2 overflow-hidden rounded-full border border-vl-brown px-3.5 py-2 text-[.88rem] font-semibold leading-snug text-vl-brown transition-colors hover:border-vl-brown-dark"
                      >
                        <span className="absolute inset-0 origin-left scale-x-0 bg-[#1DB954]/85 transition-transform duration-200 ease-out group-hover:scale-x-100" />
                        <FaSpotify className="relative z-10 text-[1.1rem] transition-colors duration-200 group-hover:text-vl-ink" />
                        <span className="relative z-10 transition-colors duration-200 group-hover:text-vl-ink">
                          Listen on Spotify
                        </span>
                      </a>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            {canScrollRight && (
              <button
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 transform rounded-full border border-vl-brown/20 bg-vl-cream p-3 text-vl-ink shadow-md hover:bg-vl-cream-deep focus:outline-none"
                onClick={() => {
                  const container = updatesContainerRef.current;
                  container?.scrollBy({ left: 300, behavior: 'smooth' });
                }}
              >
                <FaChevronRight size={20} />
              </button>
            )}
          </div>
        </section>

        <Content showProducts={false} />
        {/* Latest news  */}
        <section className="relative mb-20 mt-10 min-h-[16rem] px-[1rem] md:mt-20 md:min-h-[20rem] md:px-[2rem]">
          <div className="mb-6 w-full border border-vl-brown/20"></div>
          <div className="mb-10 flex flex-row items-start justify-between text-vl-ink sm:items-center">
            <h2 className="text-[1.6rem] font-semibold tracking-tight text-vl-brown-dark md:text-[1.7rem]">
              Latest News
            </h2>
            <Link
              href={"/blog"}
              className="mt-2 text-sm font-semibold text-vl-brown underline decoration-vl-brown/40 underline-offset-4 transition-colors hover:text-vl-brown-dark sm:mt-0"
            >
              See all
            </Link>
          </div>

          {/* Scrollable Section with Arrows */}
          <div className="relative">
            {/* Left Arrow */}
            {canScrollLeftLatest && (
              <button
                className="absolute left-2 top-1/2 z-50 -translate-y-1/2 transform rounded-full border border-vl-brown/20 bg-vl-cream p-3 text-vl-ink shadow-md hover:bg-vl-cream-deep focus:outline-none"
                onClick={() => {
                  const container = latestNewsContainerRef.current;
                  container?.scrollBy({ left: -300, behavior: 'smooth' });
                }}
              >
                <FaChevronLeft size={20} />
              </button>
            )}

            {/* Scrollable Content */}
            <div
              id="home-latest-news-scroll"
              ref={latestNewsContainerRef}
              className="no-scrollbar relative z-0 flex min-w-0 items-center overflow-x-scroll"
            >
              {loading ? (
                <div className="flex h-full gap-4 md:gap-5 md:w-full">
                  {[...Array(4)].map((_, index) => (
                    <div
                      key={index}
                      className="w-[9.75rem] shrink-0 animate-pulse items-start overflow-hidden text-left md:w-[12rem]"
                    >
                      <div className="aspect-[310/300] w-full rounded-[10px] bg-vl-cream-muted"></div>
                      <div className="mt-4 h-4 w-3/4 rounded bg-vl-cream-muted"></div>
                      <div className="mt-2 h-4 w-1/2 rounded bg-vl-cream-muted"></div>
                    </div>
                  ))}
                </div>
              ) : error ? (
                <div className="flex h-full w-full items-center justify-center text-vl-ink">
                  <p>{error}</p>
                </div>
              ) : posts.length === 0 ? (
                <div className="flex h-full w-full items-center justify-center text-vl-ink">
                  <p>No posts available</p>
                </div>
              ) : (
                <div className="flex h-full gap-4 md:gap-5 md:w-full">
                  {posts.map((post, i) => (
                    <Link
                      key={`${post.slug}-${i}`}
                      href={`/blog/${post.slug}`}
                      className="w-[9.75rem] shrink-0 items-start overflow-hidden text-left md:w-[12rem]"
                    >
                      <div className="image-container relative aspect-[310/300] w-full overflow-hidden rounded-[10px]">
                        {post.image ? (
                          <Image
                            src={post.image}
                            alt={post.title}
                            width={200}
                            height={194}
                            sizes="(max-width: 768px) 156px, 192px"
                            className="h-full w-full object-cover transition-all duration-[.85s] ease-in-out hover:scale-110"
                            unoptimized={true} // Add this if you're having issues with external images
                          />
                        ) : (
                          <div className="aspect-[310/300] w-full bg-vl-cream-muted"></div>
                        )}
                      </div>

                      <div className={`py-4`}>
                        <h3 className="mb-2 mt-1 overflow-hidden truncate whitespace-nowrap text-base font-bold text-vl-ink">
                          {post.title}
                        </h3>

                        <p className="text-sm font-medium text-vl-ink-muted" suppressHydrationWarning>
                          <span className="font-bold text-vl-ink">{post.category}</span> -{" "}
                          {new Date(post.datePublished).toLocaleDateString('en-US', {
                            timeZone: 'UTC',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Right Arrow */}
            {canScrollRightLatest && posts.length > 0 && (
              <button
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 transform rounded-full border border-vl-brown/20 bg-vl-cream p-3 text-vl-ink shadow-md hover:bg-vl-cream-deep focus:outline-none"
                onClick={() => {
                  const container = latestNewsContainerRef.current;
                  container?.scrollBy({ left: 300, behavior: 'smooth' });
                }}
              >
                <FaChevronRight size={20} />
              </button>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
