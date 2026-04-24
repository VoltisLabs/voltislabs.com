"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Footer() {
  const pathname = usePathname();
  return (
    <div
      className={`px-[1rem] pt-10 md:px-[2rem] ${pathname == "/loyalty_bot" ? "bg-[#1a2081]" : "bg-transparent"}`}
    >
      <div className="mb-3 w-full border border-vl-brown/20"></div>

      <footer className="mb-20 flex flex-col justify-between text-vl-ink md:flex-row">
        <div className="flex flex-col space-y-2">
          <Link href="/terms" className="font-medium hover:text-vl-brown-dark">
            <p>Terms & policies</p>
          </Link>
          <Link href="/privacy" className="font-medium hover:text-vl-brown-dark">
            <p>Privacy policy</p>
          </Link>
          <Link href="/brand-guidelines" className="font-medium hover:text-vl-brown-dark">
            <p>Brand guidelines</p>
          </Link>
        </div>
        <div className="mt-4 flex flex-wrap gap-4 md:mt-0">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com"
            className="font-semibold hover:text-vl-brown-dark"
          >
            <p>X</p>
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/voltis-labs"
            className="font-semibold hover:text-vl-brown-dark"
          >
            <p>LinkedIn</p>
          </Link>
        </div>
        <Link className="transition-transform hover:scale-[1.02]" href={"/"}>
          <Image
            src="/icons/vl-logo-brown.svg"
            alt="Voltis Labs"
            width={252}
            height={100}
            unoptimized
            className="mb-6 mt-6 h-10 w-auto max-w-[min(100%,14rem)] object-contain md:mb-24 md:mt-0 md:h-12 md:max-w-[18rem]"
          />
        </Link>
      </footer>
      <p className="mt-10 pb-10 text-center text-sm font-medium text-vl-ink-muted">
        © 2026 Voltis Labs. All rights reserved.
      </p>
    </div>
  );
}
