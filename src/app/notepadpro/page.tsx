"use client";

import LearnMoreBtn from "@/src/components/UI/LearnMoreBtn";
import Sidebar from "@/src/components/UI/SideBar";
import SliderBackground from "@/src/components/UI/SliderBackground";
import TitleSection from "@/src/components/UI/TitleSection";
import Image from "next/image";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import {
  paragrapghClassName,
  secondaryTitleClassName,
  sectionTitleClassName,
  titleClassName,
} from "../data";

const ART = "/products/notepad-pro/frame-103.svg";

const sliderTiles = [{ img: ART }, { img: ART }, { img: ART }, { img: ART }];

const modeRows = [
  { mode: "Plain", for: "Writing, journaling, quick capture" },
  { mode: "Tasks", for: "To-dos, reminders, timed focus" },
  { mode: "CSV", for: "Budgets, lists, lightweight spreadsheets" },
  { mode: "HTML", for: "Snippets, formatted notes, preview" },
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
    { name: "Why Notepad Pro", route: "secondSection", Icon: "" },
    { name: "Modes", route: "thirdSection", Icon: "" },
    { name: "Core features", route: "fourthSection", Icon: "" },
    { name: "See it in action", route: "fifthSection", Icon: "" },
    { name: "Power & engineering", route: "sixthSection", Icon: "" },
    { name: "Comparison", route: "seventhSection", Icon: "" },
    { name: "Get started", route: "eighthSection", Icon: "" },
    { name: "Download", route: "lastSection", Icon: "" },
  ];

  const [isPlaying, setIsplaying] = useState(false);

  return (
    <div className="mx-auto w-full max-w-[85rem] bg-vl-brown-dark pb-20 pt-6 text-vl-cream md:pt-10">
      <Sidebar tbList={menuItems} />

      <TitleSection
        title="One place for every way you think."
        subTitle="Notes, tasks, tables, and previews-plain text, HTML, CSV, and tasks in one app. Local-first, with sync when you choose it."
        secondaryText="Notepad Pro · Voltis Labs · Desktop"
        containerStyle="mb-[2.8rem] hidden md:block"
      />

      <section className="image-section mb-[0.2rem] hidden px-[2rem] md:block md:px-[4rem] lg:px-[10rem] xl:px-[16rem]">
        <div
          onMouseEnter={() => setIsplaying(true)}
          onMouseLeave={() => setIsplaying(false)}
          onClick={() => setIsplaying(!isPlaying)}
          className="slider-statement relative z-10 cursor-default"
        >
          <Marquee
            className="slider-statement relative z-20 cursor-default bg-[#2a1f1a]"
            speed={50}
            pauseOnHover
            pauseOnClick
            direction="right"
          >
            {sliderTiles.map((tile, index) => (
              <div
                key={index}
                className="relative mr-4 h-[21rem] w-[20rem] overflow-hidden rounded-[10px] border border-white/10 bg-white md:h-[21rem]"
              >
                <Image
                  src={tile.img}
                  alt="Notepad Pro artwork"
                  fill
                  className="object-contain p-6"
                  sizes="320px"
                  unoptimized
                />
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      <div className="hidden h-full justify-center p-2 md:flex md:p-7">
        <LearnMoreBtn
          text="Get Notepad Pro"
          borderColor="border-white"
          textColor="text-white"
          route="/contact-us"
        />
      </div>

      <section className="hero-section mb-9 block md:hidden">
        <SliderBackground
          containerStyle="bg-[#3d2a22] w-full"
          imagesArray={sliderTiles}
          titleText="One place for every way you think."
          route="/contact-us"
          smallBtnText="Get Notepad Pro"
        />
      </section>

      <div className="mx-auto mb-16 max-w-[45rem] px-[1.4rem] md:px-0">
        <div id="firstSection" className="mb-10 mt-1">
          <h1 className={sectionTitleClassName}>A multi-format thinking tool</h1>
          <span className={`${paragrapghClassName} mb-6`}>
            Most tools pick one format and ask you to bend your work around it. Notepad Pro sits closer to the flexibility
            you would expect from a workspace stack-without forcing you through five separate installs to get there.
          </span>
          <span className={paragrapghClassName}>
            Plain capture when you are drafting, task mode when you are executing, CSV when you are counting, HTML when
            you need structure and preview. The landing story is simple:{" "}
            <span className="font-semibold text-[#FFE32F]">stop switching apps. Start thinking in one place.</span>
          </span>
        </div>

        <div id="secondSection" className="mb-12">
          <h1 className={secondaryTitleClassName}>Why Notepad Pro?</h1>
          <p className={`${paragrapghClassName} mt-6 text-center md:text-left`}>
            Your ideas rarely arrive as a single file type-so a serious workspace should not pretend they do. Notepad Pro
            reframes the product as a thinking surface with modes, not as yet another “write notes faster” banner.
          </p>
        </div>

        <div id="thirdSection" className="mb-12">
          <h1 className={titleClassName}>Modes at a glance</h1>
          <div className="mt-4 overflow-x-auto rounded-lg border border-white/15 bg-black/20">
            <table className="w-full min-w-[320px] text-left text-xs md:text-sm">
              <thead>
                <tr className="border-b border-white/15 text-[#FFE32F]">
                  <th className="px-4 py-3 font-semibold">Mode</th>
                  <th className="px-4 py-3 font-semibold">Built for</th>
                </tr>
              </thead>
              <tbody>
                {modeRows.map((row) => (
                  <tr key={row.mode} className="border-b border-white/10 last:border-0">
                    <td className="px-4 py-3 font-semibold text-white">{row.mode}</td>
                    <td className={`${paragrapghClassName} !mb-0 px-4 py-3`}>{row.for}</td>
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
                className="rounded-xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-[#FFE32F]/50"
              >
                <h2 className={`${titleClassName} mb-2 text-[#FFE32F]`}>{card.title}</h2>
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
              <div key={s.title} className="rounded-lg border-l-4 border-[#FFE32F] bg-black/25 px-4 py-3">
                <h3 className={`${titleClassName} mb-2`}>{s.title}</h3>
                <p className={`${paragrapghClassName} !mb-0`}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="sixthSection" className="mb-12">
          <h1 className={titleClassName}>Power under the hood</h1>
          <p className={paragrapghClassName}>
            Built for people who keep large libraries open all day-local storage, selective sync, and tooling that respects
            a serious desktop session.
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-xs text-white/90 md:text-sm">
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
          <div className="mt-6 overflow-x-auto rounded-lg border border-white/15">
            <table className="w-full min-w-[360px] text-left text-[11px] md:text-sm">
              <thead>
                <tr className="bg-black/30 text-[#FFE32F]">
                  <th className="px-3 py-2 font-semibold md:px-4">Capability</th>
                  <th className="px-3 py-2 font-semibold md:px-4">Notepad Pro</th>
                  <th className="px-3 py-2 font-semibold md:px-4">Typical “notes” app</th>
                </tr>
              </thead>
              <tbody className="text-white/90">
                <tr className="border-t border-white/10">
                  <td className="px-3 py-2 md:px-4">Multi-format in one note</td>
                  <td className="px-3 py-2 md:px-4">Yes</td>
                  <td className="px-3 py-2 md:px-4">Usually one format</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-3 py-2 md:px-4">Fully usable offline</td>
                  <td className="px-3 py-2 md:px-4">Yes</td>
                  <td className="px-3 py-2 md:px-4">Often partial</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-3 py-2 md:px-4">Optional / LAN sync</td>
                  <td className="px-3 py-2 md:px-4">Yes</td>
                  <td className="px-3 py-2 md:px-4">Often cloud-only</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-3 py-2 md:px-4">Built-in grid / CSV mode</td>
                  <td className="px-3 py-2 md:px-4">Yes</td>
                  <td className="px-3 py-2 md:px-4">Rare</td>
                </tr>
                <tr className="border-t border-white/10">
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

        <div id="lastSection" className="rounded-2xl border border-[#FFE32F]/40 bg-gradient-to-br from-[#2c211c] to-black/40 p-8 text-center">
          <h1 className={`${secondaryTitleClassName} !mx-0 !max-w-none`}>Start thinking in one workspace</h1>
          <p className={`${paragrapghClassName} mx-auto mt-4 max-w-xl`}>
            If you want early access, installers, or a walkthrough for your team, reach out-we will point you to the right
            build.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <LearnMoreBtn
              text="Contact Voltis Labs"
              borderColor="border-[#FFE32F]"
              textColor="text-[#FFE32F]"
              route="/contact-us"
            />
            <LearnMoreBtn
              text="All products"
              borderColor="border-white"
              textColor="text-white"
              route="/products"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
