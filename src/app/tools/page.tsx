"use client";

import React, { useMemo } from "react";
import { products } from "../data";

const normalizeName = (value: string) => value.toLowerCase().replace(/\s+/g, "");

const PINNED_ORDER = ["notepadpro", "pinnacletransfer", "clipstack"];

const ToolsPage = () => {
  const tools = useMemo(() => {
    const allowed = new Set(PINNED_ORDER);
    return [...products]
      .filter((p: { message: string }) => allowed.has(normalizeName(p.message)))
      .map((p: { message: string; img: string; link: string; images?: string[] }) => ({
        ...p,
        images: p.images || [],
      }))
      .sort(
        (a: { message: string }, b: { message: string }) =>
          PINNED_ORDER.indexOf(normalizeName(a.message)) - PINNED_ORDER.indexOf(normalizeName(b.message)),
      );
  }, []);

  const fillCover = "absolute inset-0 h-full w-full object-cover object-center";

  if (tools.length === 0) {
    return (
      <div className="mx-auto min-h-[50vh] max-w-4xl px-4 pb-12 pt-[6rem] text-vl-ink">
        <h1 className="text-2xl font-bold text-vl-brown-dark">No Voltis Core tools available.</h1>
      </div>
    );
  }

  return (
    <div className="mx-auto min-h-[50vh] px-4 pb-12 pt-[5.3rem] md:px-6 xl:w-[75rem]">
      <section className="mb-10 rounded-2xl border border-vl-brown/20 bg-vl-cream-deep/70 px-5 py-10 md:mb-12 md:px-10 md:py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-vl-brown md:text-sm">Voltis Labs</p>
        <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-vl-brown-dark sm:text-4xl md:text-5xl">
          Voltis Core
        </h1>
        <p className="mt-4 max-w-2xl text-lg font-medium leading-snug text-vl-ink-muted md:text-xl">
          Productivity software built for deep work—notes, clipboard handoffs, and large-file delivery in one family of
          tools.
        </p>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-vl-ink md:text-lg">
          Each app is designed to stay fast and local where it matters, with clear paths to collaboration when you are
          ready. Explore NotepadPro for multi-mode thinking, Clipstack for cross-device clips, and Pinnacle Transfer for
          dependable creative handoffs.
        </p>
      </section>

      <div className="grid w-full grid-cols-2 justify-items-center gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {tools.map((product: { message: string; img: string; link: string }) => (
          <a
            key={product.message}
            href={product.link}
            className="group flex w-full max-w-[12rem] cursor-pointer flex-col items-center"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-vl-brown/25 bg-vl-cream-deep shadow-md transition-all duration-200 group-hover:scale-[1.03]">
              <img
                src={product.img}
                alt={product.message}
                className={`${fillCover} transition-transform duration-300 ease-out group-hover:scale-105`}
              />
            </div>
            <h2 className="mt-2 text-center text-sm font-semibold text-vl-ink sm:text-base">{product.message}</h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ToolsPage;
