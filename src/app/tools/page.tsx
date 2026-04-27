"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { products } from "../data";
import { ChevronLeft, ChevronRight } from "lucide-react";

const normalizeName = (value: string) => value.toLowerCase().replace(/\s+/g, '');

const TOOL_SUBTITLES: Record<string, string> = {
  notepadpro: 'Multi-mode notes for writing, tasks, CSV, and HTML in one workspace.',
  clipstack: 'A fast clipboard stack to save, search, and reuse copied text instantly.',
  pinnacletransfer: 'Send large creative files quickly with clean, reliable handoffs.',
};

const ToolsPage = () => {
  const allowed = ['notepadpro', 'clipstack', 'pinnacletransfer'];
  const tools = useMemo(
    () =>
      products
        .filter((p: any) => allowed.includes(normalizeName(p.message)))
        .map((p: any) => ({ ...p, images: p.images || [] }))
        .sort(
          (a: any, b: any) => allowed.indexOf(normalizeName(a.message)) - allowed.indexOf(normalizeName(b.message)),
        ),
    [],
  );

  const [selectedIdx, setSelectedIdx] = useState(0);
  const [imageIdx, setImageIdx] = useState(0);

  useEffect(() => {
    if (tools.length === 0) return;
    if (selectedIdx < 0 || selectedIdx >= tools.length) {
      setSelectedIdx(0);
      setImageIdx(0);
    }
  }, [tools.length, selectedIdx]);

  const safeIdx =
    tools.length === 0 ? 0 : selectedIdx >= 0 && selectedIdx < tools.length ? selectedIdx : 0;
  const selectedTool = tools[safeIdx];
  const images: string[] = selectedTool?.images || [];

  useEffect(() => {
    if (images.length === 0) return;
    if (imageIdx >= images.length) setImageIdx(0);
  }, [images.length, imageIdx, safeIdx]);

  const safeImageIdx = images.length ? Math.min(imageIdx, images.length - 1) : 0;
  const selectedSubtitle = selectedTool ? TOOL_SUBTITLES[normalizeName(selectedTool.message)] : "";

  const handleSelect = (idx: number) => {
    setSelectedIdx(idx);
    setImageIdx(0);
  };

  const handlePrev = () => {
    if (images.length < 1) return;
    setImageIdx((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const handleNext = () => {
    if (images.length < 1) return;
    setImageIdx((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  const fillThumb = "absolute inset-0 h-full w-full object-contain object-center p-1";
  const fillHero = "absolute inset-0 h-full w-full object-contain object-center p-4 md:p-6";

  if (tools.length === 0) {
    return (
      <div className="mx-auto min-h-[50vh] max-w-4xl px-4 pb-12 pt-[6rem] text-vl-ink">
        <h1 className="text-2xl font-bold text-vl-brown-dark">No tools available.</h1>
      </div>
    );
  }

  return (
    <div className="mx-auto flex min-h-[50vh] flex-col gap-4 px-4 pb-12 pt-[5.3rem] md:gap-6 md:px-6 xl:w-[75rem] xl:flex-row xl:gap-8">
      <div className="flex w-full flex-col rounded-lg border border-vl-brown/25 bg-vl-cream-deep shadow-xl xl:w-2/3">
        <div className="group relative h-[300px] w-full overflow-hidden rounded-lg bg-vl-cream sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[650px]">
          {images.length > 0 && images[safeImageIdx] ? (
            <img src={images[safeImageIdx]} alt={selectedTool.message} className={fillHero} />
          ) : (
            <div className="flex h-full w-full items-center justify-center px-6 text-center text-sm text-vl-ink-muted">
              No preview images for this tool yet.
            </div>
          )}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-vl-brown/80 p-2 text-vl-cream opacity-0 transition-all hover:bg-vl-brown group-hover:opacity-100"
              >
                <ChevronLeft className="h-6 w-6 md:h-7 md:w-7" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-vl-brown/80 p-2 text-vl-cream opacity-0 transition-all hover:bg-vl-brown group-hover:opacity-100"
              >
                <ChevronRight className="h-6 w-6 md:h-7 md:w-7" />
              </button>
            </>
          )}
        </div>

        <div className="my-3 flex w-full flex-wrap justify-start gap-2 px-2 md:gap-3">
          {images.slice(0, 4).map((img: string, idx: number) => (
            <button
              key={`${idx}-${img}`}
              type="button"
              onClick={() => setImageIdx(idx)}
              className={`relative flex h-12 w-12 shrink-0 overflow-hidden rounded-lg border-2 transition-all sm:h-14 sm:w-14 md:h-16 md:w-16 ${safeImageIdx === idx ? "border-vl-brown" : "border-transparent"} bg-vl-cream`}
            >
              <img src={img} alt={`${selectedTool.message} preview ${idx + 1}`} className={fillThumb} />
            </button>
          ))}
        </div>

        <div className="flex w-full flex-col px-3 pb-4">
          <h2 className="mb-1 text-base font-bold text-vl-ink sm:text-lg md:text-xl">{selectedTool.message}</h2>
          <p className="mb-2 text-sm font-medium text-vl-ink-muted">{selectedSubtitle}</p>
          <p className="mb-3 line-clamp-5 whitespace-pre-line text-sm text-vl-ink-muted/90">
            {selectedTool.description}
          </p>
          <div className="flex justify-end">
            {selectedTool.link.startsWith("/") ? (
              <Link
                href={selectedTool.link}
                className="rounded-lg border border-vl-brown bg-vl-brown px-3 py-2 text-sm font-semibold text-vl-cream transition hover:bg-vl-brown-dark md:px-4"
              >
                View More
              </Link>
            ) : (
              <a
                href={selectedTool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-vl-brown bg-vl-brown px-3 py-2 text-sm font-semibold text-vl-cream transition hover:bg-vl-brown-dark md:px-4"
              >
                View More
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="grid w-full auto-rows-min grid-cols-2 items-start gap-4 sm:grid-cols-2 md:grid-cols-3 xl:w-1/3 xl:grid-cols-2">
        {tools.map((tool: any, idx: number) => (
          <div
            key={tool.message}
            onClick={() => handleSelect(idx)}
            className={`group h-auto cursor-pointer self-start rounded-lg border border-vl-brown/25 bg-vl-cream-deep shadow-md transition-all duration-200 hover:scale-[1.03] ${safeIdx === idx ? "ring-2 ring-vl-brown" : ""}`}
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-t-lg bg-vl-cream">
              <img
                src={tool.img}
                alt={tool.message}
                className={`${fillThumb} transition-transform duration-300 ease-out group-hover:scale-105`}
              />
            </div>
            <div className="p-2">
              <h2 className="mb-1 truncate text-sm font-semibold text-vl-ink sm:text-base">{tool.message}</h2>
              <p className="text-xs text-vl-ink-muted">{TOOL_SUBTITLES[normalizeName(tool.message)]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsPage;
