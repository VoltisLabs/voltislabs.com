import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Footer() {
  const pathname = usePathname();
  console.log({ pathname });
  return (
    <div
      className={`px-[1rem] pt-10 md:px-[2rem] ${pathname == '/loyalty_bot' ? 'bg-[#1a2081]' : 'bg-transparent'}`}
    >
      {/* <section className="mb-40">
        <div className="container mx-auto">
          <p className="text-white text-3xl md:text-4xl text-center md:text-left">
            Join us in shaping the future of technology.
          </p>
        </div>

        <div className="border-[#FFFFFF] border-[1px] w-full text-center py-4 px-1 h-16 rounded mt-10 mb-10">
          <Link href="/careers">
            <p className="font-normal text-white sm:mt-0 text-sm mt-2 cursor-pointer hover:text-blue-500 visited:text-red-500">
              View careers
            </p>
          </Link>
        </div>
      </section> */}
      <div className="mb-3 w-full border-[1px] border-[#ffffff]"></div>

      <footer className="mb-20 flex flex-col justify-between text-white md:flex-row">
        <div className="flex flex-col space-y-2">
          <Link href="/terms">
            <p>Terms & policies</p>
          </Link>
          <Link href="/privacy">
            <p>Privacy policy</p>
          </Link>
          <Link href="/brand-guidelines">
            <p>Brand guidelines</p>
          </Link>
        </div>
        <div className="mt-4 flex flex-wrap gap-4 md:mt-0">
          <Link target="_blank" rel="noopener noreferrer" href="https://x.com">
            <p>X</p>
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/voltis-labs"
          >
            <p>LinkedIn</p>
          </Link>
        </div>
        <Link className='hover:scale-[20px]' href={'/'}>
          <Image
            src={'/image/logo3.png'}
            alt="Icon"
            width={100}
            height={100}
            className="mb-6 mt-6 md:mb-24 md:mt-0"
          />
        </Link>
      </footer>
      <p className="mt-10 pb-10 text-center text-white">
        © 2025 Voltis Labs. All rights reserved.
      </p>
    </div>
  );
}
