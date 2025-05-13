import Link from 'next/link';
import React from 'react';

export default function FirstSection() {
  return (
    <section className="mt-[15rem] flex items-center justify-center px-4 py-6 text-white md:px-10">
      <div className="max-w-[800px] space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-4xl font-bold uppercase text-transparent md:text-7xl">
          Productivity Toolkit
        </h1>

        <p className="text-2xl font-semibold">Smart Tools for Fast Image & Video Editing</p>
        <p className="">
          Speed up your workflow with our all-in-one suite — remove backgrounds, compress images,
          convert media formats, add watermarks, and more. No installs. Just productivity in your
          browser.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5">
          <a
            href="https://productivetoolkit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden rounded-3xl border border-purple-800 bg-gray-900 px-5 py-3 font-semibold text-white shadow-[0_0_10px_rgba(139,92,246,0.4)] transition duration-300 hover:shadow-[0_0_12px_3px_rgba(139,92,246,0.6),0_0_20px_4px_rgba(59,130,246,0.4)]"
          >
            <span className="relative z-10">Image background removal</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 blur-sm"></span>
          </a>

          <a
            href="https://productivetoolkit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden rounded-3xl border border-purple-800 bg-gray-900 px-5 py-3 font-semibold text-white shadow-[0_0_10px_rgba(139,92,246,0.4)] transition duration-300 hover:shadow-[0_0_12px_3px_rgba(139,92,246,0.6),0_0_20px_4px_rgba(59,130,246,0.4)]"
          >
            <span className="relative z-10">Image Converter</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 blur-sm"></span>
          </a>
        </div>

        <button className="relative overflow-hidden rounded-3xl bg-purple-500 px-5 py-3 font-semibold text-white shadow-[0_0_10px_rgba(168,85,247,0.6)] transition duration-300 hover:shadow-[0_0_15px_4px_rgba(168,85,247,0.8)]">
          <span className="relative z-10">Start Free Trial</span>
          <span className="absolute inset-0 bg-purple-500 opacity-25 blur-sm"></span>
        </button>
      </div>
    </section>
  );
}
