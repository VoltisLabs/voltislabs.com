"use client";

import LearnMoreBtn from "@/src/components/UI/LearnMoreBtn";
import ProductBannerSlider from "@/src/components/UI/ProductBannerSlider";
import Sidebar from "@/src/components/UI/SideBar";
import { NotepadProPhoneCarousel } from "@/src/components/notepadpro/NotepadProPhoneCarousel";
import TitleSection from "@/src/components/UI/TitleSection";
import React from "react";
import {
  paragrapghClassName,
  secondaryTitleClassName,
  sectionTitleClassName,
  titleClassName,
} from "../data";

const FALLBACK_SLIDE = "/products/notepad-pro/frame-103.svg";
const sliderTiles = [
  { img: "/products/notepad-pro/frame-104-1.png" },
  { img: "/products/notepad-pro/frame-101-1.png" },
  { img: "/products/notepad-pro/frame-107-1.png" },
  { img: "/products/notepad-pro/frame-105-1.png" },
  { img: "/products/notepad-pro/frame-113-1.png" },
  { img: "/products/notepad-pro/frame-114-1.png" },
];
/** Same hero slider component as the top of the page; two frames only. */
const secondarySliderTiles = [
  { img: "/products/notepad-pro/frame-107-1.png" },
  { img: "/products/notepad-pro/frame-105-1.png" },
];
const storeBadges = [
  { img: "/products/notepad-pro/store-app-store-black.svg", alt: "Download on the App Store" },
  { img: "/products/notepad-pro/store-google-play-black.svg", alt: "Get it on Google Play" },
  { img: "/products/notepad-pro/store-microsoft-black.svg", alt: "Get it from Microsoft" },
];
const modeRows = [
  { mode: "Plain", for: "Writing, journaling, quick capture" },
  { mode: "Checklist", for: "To-dos, reminders, and trackable task flow" },
  { mode: "CSV", for: "Budgets, lists, lightweight spreadsheets" },
  { mode: "HTML", for: "Snippets, formatted notes, preview" },
  { mode: "Voice", for: "Record and keep voice notes alongside written context" },
  { mode: "Images", for: "Attach and review visual references inside a note" },
  { mode: "Math", for: "Capture calculations and formula-driven thinking" },
] as const;

const featureCards = [
  {
    title: "Multi-mode notes",
    body: "Switch formats inside one note instead of juggling separate apps for text, tasks, tables, and preview.",
  },
  {
    title: "Local-first speed",
    body: "Your machine does the heavy lifting-responsive editing, no spinners, and a workflow that keeps up when you are offline.",
  },
  {
    title: "Sync on your terms",
    body: "Optional LAN sessions and server sync when you want them-not a forced cloud lock-in.",
  },
  {
    title: "Spreadsheet mode",
    body: "A structured grid when you need columns and rows, without exporting to a separate spreadsheet tool for every small plan.",
  },
  {
    title: "Task reminders",
    body: "Timers and notifications built for people who live inside one workspace all day.",
  },
  {
    title: "Desktop-first UI",
    body: "Sidebar, embedded editor, and controls tuned for a full keyboard-and-mouse session-not a phone port.",
  },
] as const;

const scenarios = [
  {
    title: "Plan your day",
    body: "Tasks mode with timers so priorities stay visible and timeboxed.",
  },
  {
    title: "Track a budget",
    body: "CSV-style rows for numbers that change often-without leaving the note you are already in.",
  },
  {
    title: "Shape an idea",
    body: "Rich editing when you need emphasis, structure, and readable long-form notes.",
  },
  {
    title: "Preview HTML",
    body: "Source plus preview for snippets, markup, and anything you want to sanity-check before you paste it elsewhere.",
  },
] as const;

const powerBullets = [
  "Local storage without mandatory accounts",
  "LAN sync sessions for nearby machines",
  "Live updates over the network when sync is enabled",
  "Optional backend hooks (for example GraphQL) when you wire them in",
  "Offline-first behaviour for core editing",
  "Bulk actions, multi-select, and pin workflows for heavy libraries",
] as const;

export default function NotepadProPage() {
  const menuItems = [
    { name: "Overview", route: "firstSection", Icon: "" },
    { name: "Why NotepadPro", route: "secondSection", Icon: "" },
    { name: "Modes", route: "thirdSection", Icon: "" },
    { name: "Core features", route: "fourthSection", Icon: "" },
    { name: "See it in action", route: "fifthSection", Icon: "" },
    { name: "Spotlight", route: "spotlightSliderSection", Icon: "" },
    { name: "Mobile", route: "mobileSection", Icon: "" },
    { name: "Power & engineering", route: "sixthSection", Icon: "" },
    { name: "Comparison", route: "seventhSection", Icon: "" },
    { name: "Get started", route: "eighthSection", Icon: "" },
    { name: "Download", route: "lastSection", Icon: "" },
  ];

  return (
    <div className="mx-auto w-full max-w-[85rem] bg-vl-cream pb-20 pt-6 text-vl-ink md:pt-10">
      <Sidebar tbList={menuItems} tone="dark" />

      <TitleSection
        title="One place for every way you think."
        subTitle="Notes, tasks, tables, and previews-plain text, HTML, CSV, and tasks in one app. Local-first, with sync when you choose it."
        secondaryText="NotepadPro · Voltis Labs · Desktop"
        containerStyle="mb-[2.8rem] hidden md:block"
      />

      <section className="image-section mb-[0.2rem] hidden px-[2rem] md:block md:px-[4rem] lg:px-[10rem] xl:px-[16rem]">
        <ProductBannerSlider images={sliderTiles} fallbackImage={FALLBACK_SLIDE} />
      </section>

      <section className="hero-section mb-9 block px-[1.4rem] md:hidden">
        <ProductBannerSlider images={sliderTiles} fallbackImage={FALLBACK_SLIDE} />
      </section>

      <section className="mb-8 mt-5 px-[1.4rem] md:mt-7 md:px-[4rem] lg:px-[10rem] xl:px-[16rem]">
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {storeBadges.map((badge) => (
            <img
              key={badge.img}
              src={badge.img}
              alt={badge.alt}
              className="h-10 w-auto sm:h-11 md:h-12"
            />
          ))}
        </div>
      </section>

      <div className="mx-auto mb-16 content-flow space-y-12 px-[1.4rem] md:space-y-14 md:px-[4rem] lg:px-[10rem] xl:px-[16rem]">
        <div id="firstSection" className="mb-10 mt-1">
          <h1 className={sectionTitleClassName}>A multi-format thinking tool</h1>
          <span className={`${paragrapghClassName} mb-6`}>
            Most tools pick one format and ask you to bend your work around it. NotepadPro sits closer to the flexibility
            you would expect from a workspace stack-without forcing you through five separate installs to get there.
          </span>
          <span className={paragrapghClassName}>
            Plain capture when you are drafting, task mode when you are executing, CSV when you are counting, HTML when
            you need structure and preview. The landing story is simple:{" "}
            <span className="font-medium text-vl-brown">stop switching apps. Start thinking in one place.</span>
          </span>
        </div>

        <div id="secondSection" className="mb-12">
          <h1 className={secondaryTitleClassName}>Why NotepadPro?</h1>
          <p className={`${paragrapghClassName} mt-6 text-center md:text-left`}>
            Your ideas rarely arrive as a single file type-so a serious workspace should not pretend they do. NotepadPro
            reframes the product as a thinking surface with modes, not as yet another “write notes faster” banner.
          </p>
        </div>

        <div id="thirdSection" className="mb-12">
          <h1 className={titleClassName}>Modes at a glance</h1>
          <div className="mt-4 overflow-x-auto rounded-lg border border-vl-brown/25 bg-transparent">
            <table className="w-full min-w-[320px] text-left text-xs md:text-sm">
              <thead>
                <tr className="border-b border-vl-brown/25 text-vl-brown-dark">
                  <th className="px-4 py-3 font-semibold">Mode</th>
                  <th className="border-l border-vl-brown/25 px-4 py-3 font-semibold">Built for</th>
                </tr>
              </thead>
              <tbody>
                {modeRows.map((row) => (
                  <tr key={row.mode} className="border-b border-vl-brown/20 last:border-0">
                    <td className="px-4 py-3 font-semibold text-vl-brown-dark">{row.mode}</td>
                    <td className={`${paragrapghClassName} !mb-0 border-l border-vl-brown/20 px-4 py-3`}>
                      {row.for}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div id="fourthSection" className="mb-12">
          <h1 className={secondaryTitleClassName}>Core features</h1>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {featureCards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-vl-brown/20 bg-vl-cream-deep/70 p-4 transition hover:border-vl-brown/45"
              >
                <h2 className={`${titleClassName} mb-2 text-vl-brown-dark`}>{card.title}</h2>
                <p className={`${paragrapghClassName} !mb-0`}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="fifthSection" className="mb-12">
          <h1 className={secondaryTitleClassName}>See it in action</h1>
          <p className={`${paragrapghClassName} mt-4`}>
            Short scenarios beat long feature grids. Here is how people actually use the modes together.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {scenarios.map((s) => (
              <div key={s.title} className="rounded-lg border-l-4 border-vl-brown bg-vl-cream-deep/70 px-4 py-3">
                <h3 className={`${titleClassName} mb-2`}>{s.title}</h3>
                <p className={`${paragrapghClassName} !mb-0`}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="spotlightSliderSection" className="mb-12 scroll-mt-24">
          <h1 className={secondaryTitleClassName}>Spotlight</h1>
          <p className={`${paragrapghClassName} mt-4 text-center md:text-left`}>
            Two more product views in the same full-width carousel as the hero above.
          </p>
          <section className="image-section mb-[0.2rem] mt-6 hidden px-[2rem] md:block md:px-[4rem] lg:px-[10rem] xl:px-[16rem]">
            <ProductBannerSlider images={secondarySliderTiles} fallbackImage={FALLBACK_SLIDE} />
          </section>
          <section className="hero-section mb-0 mt-6 block px-[1.4rem] md:hidden">
            <ProductBannerSlider images={secondarySliderTiles} fallbackImage={FALLBACK_SLIDE} />
          </section>
        </div>

        <div
          id="mobileSection"
          className="mb-12 scroll-mt-24 rounded-2xl border border-vl-brown/20 bg-vl-cream-deep/40 px-5 py-10 md:px-8 md:py-12"
        >
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(240px,320px)] lg:items-center lg:gap-14 xl:grid-cols-[minmax(0,1fr)_minmax(260px,340px)]">
            <div className="text-center lg:text-left">
              <h1 className={secondaryTitleClassName}>Take it on mobile</h1>
              <p className={`${paragrapghClassName} mx-auto mt-4 max-w-xl lg:mx-0`}>
                NotepadPro is not only a desktop session—the same multi-mode workspace runs on your phone and tablet, so
                you can capture, edit tasks, and skim notes when you are away from your desk. Install from the App Store,
                Google Play, or the Microsoft Store and pick up where you left off.
              </p>
              <p className={`${paragrapghClassName} mx-auto mt-3 max-w-xl lg:mx-0`}>
                The carousel shows a few mobile screens; use the arrows or wait for the next frame to explore the flow.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start md:gap-4">
                {storeBadges.map((badge) => (
                  <img
                    key={`mobile-${badge.img}`}
                    src={badge.img}
                    alt={badge.alt}
                    className="h-10 w-auto sm:h-11 md:h-12"
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <NotepadProPhoneCarousel />
            </div>
          </div>
        </div>

        <div id="sixthSection" className="mb-12">
          <h1 className={titleClassName}>Power under the hood</h1>
          <p className={paragrapghClassName}>
            Built for people who keep large libraries open all day-local storage, selective sync, and tooling that respects
            a serious desktop session.
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-xs text-vl-ink md:text-sm">
            {powerBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div id="seventhSection" className="mb-12">
          <h1 className={secondaryTitleClassName}>How it compares</h1>
          <p className={`${paragrapghClassName} mt-4`}>
            No competitor names required-the pattern is what matters: one workspace that respects offline work, optional
            sync, and multiple formats without duct-taping four SaaS tabs together.
          </p>
          <div className="mt-6 overflow-x-auto rounded-lg border border-vl-brown/25">
            <table className="w-full min-w-[360px] text-left text-[11px] md:text-sm">
              <thead>
                <tr className="border-b border-vl-brown/25 text-vl-brown-dark">
                  <th className="px-3 py-2 font-semibold md:px-4">Capability</th>
                  <th className="px-3 py-2 font-semibold md:px-4">NotepadPro</th>
                  <th className="px-3 py-2 font-semibold md:px-4">Typical “notes” app</th>
                </tr>
              </thead>
              <tbody className="text-vl-ink">
                <tr className="border-t border-vl-brown/20">
                  <td className="px-3 py-2 md:px-4">Multi-format in one note</td>
                  <td className="px-3 py-2 md:px-4">Yes</td>
                  <td className="px-3 py-2 md:px-4">Usually one format</td>
                </tr>
                <tr className="border-t border-vl-brown/20">
                  <td className="px-3 py-2 md:px-4">Fully usable offline</td>
                  <td className="px-3 py-2 md:px-4">Yes</td>
                  <td className="px-3 py-2 md:px-4">Often partial</td>
                </tr>
                <tr className="border-t border-vl-brown/20">
                  <td className="px-3 py-2 md:px-4">Optional / LAN sync</td>
                  <td className="px-3 py-2 md:px-4">Yes</td>
                  <td className="px-3 py-2 md:px-4">Often cloud-only</td>
                </tr>
                <tr className="border-t border-vl-brown/20">
                  <td className="px-3 py-2 md:px-4">Built-in grid / CSV mode</td>
                  <td className="px-3 py-2 md:px-4">Yes</td>
                  <td className="px-3 py-2 md:px-4">Rare</td>
                </tr>
                <tr className="border-t border-vl-brown/20">
                  <td className="px-3 py-2 md:px-4">Task timers in-workspace</td>
                  <td className="px-3 py-2 md:px-4">Yes</td>
                  <td className="px-3 py-2 md:px-4">Uncommon</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="eighthSection" className="mb-12">
          <h1 className={titleClassName}>Minimal setup</h1>
          <ol className="mt-4 list-inside list-decimal space-y-3 text-xs md:text-sm">
            <li>Download the build for your platform.</li>
            <li>Open a note and pick the mode that matches the job-not the other way around.</li>
            <li>Turn on sync only when you want LAN or server backup; otherwise stay local.</li>
          </ol>
        </div>

        <div id="lastSection" className="rounded-2xl border border-vl-brown/30 bg-vl-cream-deep/70 p-8 text-center">
          <h1 className={`${secondaryTitleClassName} !mx-0 !max-w-none`}>Start thinking in one workspace</h1>
          <p className={`${paragrapghClassName} mx-auto mt-4 max-w-xl`}>
            If you want early access, installers, or a walkthrough for your team, reach out-we will point you to the right
            build.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <LearnMoreBtn
              text="Contact Voltis Labs"
              borderColor="border-vl-brown"
              textColor="text-vl-brown"
              route="/contact-us"
            />
            <LearnMoreBtn
              text="All products"
              borderColor="border-vl-brown"
              textColor="text-vl-brown"
              route="/products"
            />
          </div>
        </div>
      </div>
    </div>
  );
}




