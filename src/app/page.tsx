'use client';

import { About, updates } from './data';
import Image from 'next/image';
import FirstHero from '../components/common/carousel/FirstHero';
import SecondHero from '../components/common/carousel/SecondHero';
import ThirdHero from '../components/common/carousel/ThirdHero';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import Content from '../components/Content';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight, FaSpotify } from 'react-icons/fa';
import { fetchData } from '../../lib/apiClient';
import FourthHero from '@/src/components/common/carousel/FourthHero';

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
  const sliderRef = useRef<Slider>(null);
  const updatesContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const latestNewsContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeftLatest, setCanScrollLeftLatest] = useState(false);
  const [canScrollRightLatest, setCanScrollRightLatest] = useState(false);

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
      console.log('Failed to fetch blog posts:', err);
      setError('Network error. Please check your network connection and try again.');
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 1300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: false,
    fade: true,
  };

  const slides = [
    {
      image: <FirstHero />,
      text: 'Slide 1 Text',
    },
    {
      image: <SecondHero />,
      text: 'Slide 2 Text',
    },
    {
      image: <ThirdHero />,
      text: 'Slide 3 Text',
    },
    {
      image: <FourthHero />,
      text: 'Slide 4 Text',
    },
  ];

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  return (
    <div className="page-container relative min-h-screen w-full bg-vl-cream">
      {/* Column-wide hero; avoid overriding Slick slide widths (breaks the carousel) */}
      <div className="item-container absolute inset-x-0 top-0 z-0 min-h-[37rem] w-full md:min-h-[42rem]">
        <button
          className="absolute left-4 top-[20rem] z-10 rounded-full border border-vl-brown/20 bg-vl-cream-deep/95 text-vl-ink opacity-70 transition-all delay-75 ease-in-out hover:opacity-100 focus:outline-none md:p-2"
          onClick={handlePrevClick}
        >
          <Image
            src={'/icons/button-arrow.svg'}
            alt="button-icon"
            width={30}
            height={30}
            className="rotate-180"
          />
        </button>

        <Slider ref={sliderRef} {...settings} className="w-full">
          {slides.map((item) => (
            <div key={item.text} className="h-full w-full">
              {item.image}
            </div>
          ))}
        </Slider>

        <button
          className="absolute right-4 top-[20rem] z-10 rounded-full border border-vl-brown/20 bg-vl-cream-deep/95 text-vl-ink opacity-70 transition-all delay-75 ease-in-out hover:opacity-100 focus:outline-none md:p-2"
          onClick={handleNextClick}
        >
          <Image src={'/icons/button-arrow.svg'} alt="button-icon" width={30} height={30} />
        </button>
      </div>

      <div className="content-container pt-[42rem]">
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
            <h2 className="text-[1.6rem] font-normal md:text-[1.7rem]">Latest Updates</h2>
            <Link href={'/latest-updates'} className="mt-2 text-sm font-normal underline sm:mt-0">
              See all
            </Link>
          </div>

          {/* Scrollable Section with Arrows */}
          <div className="relative">
            {/* Left Arrow */}
            {/* Left Arrow */}
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
              className="no-scrollbar flex min-w-0 items-center overflow-x-scroll"
            >
              <div className="flex h-full gap-4 md:gap-5 md:w-full">
                {updates.map((text, index) => (
                  <Link href={`/latest-updates?item=${index}`} key={index} scroll={false}>
                    <div className="w-[8.75rem] shrink-0 cursor-pointer items-start overflow-hidden text-left md:w-[11rem]">
                      {/* Same aspect as before (310×300), only scaled down */}
                      <div className="image-container relative aspect-[310/300] w-full overflow-hidden rounded-[10px]">
                        <Image
                          src={text.img}
                          alt="Icon"
                          width={200}
                          height={194}
                          sizes="(max-width: 768px) 140px, 176px"
                          className="h-full w-full object-cover transition-all duration-[.85s] ease-in-out hover:scale-110"
                        />
                      </div>
                      <p className="mt-3 text-[.9rem] text-vl-ink">{text.message}</p>
                      {text.subText && <p className="text-[.9rem] text-vl-ink-muted">{text.subText}</p>}
                      <p className="text-[.7rem] text-vl-ink">{text.time}</p>
                      {text.spotify && (
                        <a
                          href={text.spotifyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative mt-4 inline-flex w-fit cursor-pointer items-center gap-2 overflow-hidden rounded-full border border-vl-brown px-4 py-2 text-[.9rem] font-medium text-vl-brown hover:border-vl-brown-dark"
                        >
                          <span className="absolute inset-0 origin-left scale-x-0 bg-[#1DB954] transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                          <FaSpotify className="relative z-10 text-[1.2rem] transition-all duration-300 group-hover:text-black" />
                          <span className="relative z-10 transition-all duration-300 group-hover:text-black">
                            Listen on Spotify
                          </span>
                        </a>
                      )}
                    </div>
                  </Link>
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

        {/* Latest news  */}
        <section className="relative mb-20 mt-10 min-h-[16rem] px-[1rem] md:mt-20 md:min-h-[20rem] md:px-[2rem]">
          <div className="mb-6 w-full border border-vl-brown/20"></div>
          <div className="mb-10 flex flex-row items-start justify-between text-vl-ink sm:items-center">
            <h2 className="text-[1.6rem] font-normal md:text-[1.7rem]">Latest News</h2>
            <Link href={'/blog'} className="mt-2 text-sm font-normal underline sm:mt-0">
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
                      className="w-[8.75rem] shrink-0 animate-pulse items-start overflow-hidden text-left md:w-[11rem]"
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
                      className="w-[8.75rem] shrink-0 items-start overflow-hidden text-left md:w-[11rem]"
                    >
                      <div className="image-container relative aspect-[310/300] w-full overflow-hidden rounded-[10px]">
                        {post.image ? (
                          <Image
                            src={post.image}
                            alt={post.title}
                            width={200}
                            height={194}
                            sizes="(max-width: 768px) 140px, 176px"
                            className="h-full w-full object-cover transition-all duration-[.85s] ease-in-out hover:scale-110"
                            unoptimized={true} // Add this if you're having issues with external images
                          />
                        ) : (
                          <div className="aspect-[310/300] w-full bg-vl-cream-muted"></div>
                        )}
                      </div>

                      <div className={`py-4`}>
                        <h3 className="mb-2 mt-1 overflow-hidden truncate whitespace-nowrap text-base font-semibold text-vl-ink">
                          {post.title}
                        </h3>

                        <p className="text-sm text-vl-ink-muted">
                          <span className="font-bold text-vl-ink">{post.category}</span> —{' '}
                          {new Date(post.datePublished).toLocaleDateString('en-US', {
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
        <Content />
      </div>
    </div>
  );
}
