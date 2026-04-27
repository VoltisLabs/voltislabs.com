"use client";

import React from "react";
import Sidebar from "@/src/components/UI/SideBar";
import TitleSection from "@/src/components/UI/TitleSection";
import ProductBannerSlider from "@/src/components/UI/ProductBannerSlider";
import LearnMoreBtn from "@/src/components/UI/LearnMoreBtn";
import { paragrapghClassName, secondaryTitleClassName, sectionTitleClassName, titleClassName } from "../data";

const ART = "/icons/clipstack.svg";
const sliderTiles = [{ img: ART }, { img: ART }, { img: ART }, { img: ART }];

const useCases = [
  {
    title: "Developers",
    body: "Keep shell commands, SQL fragments, payload samples, and log filters one paste away while switching between editor, terminal, and browser.",
  },
  {
    title: "Writers and marketers",
    body: "Collect subject lines, campaign snippets, links, and references without losing earlier drafts when context switching.",
  },
  {
    title: "Support and operations",
    body: "Reuse troubleshooting steps, escalation templates, and recurring responses with less copy-paste friction.",
  },
  {
    title: "Research-heavy workflows",
    body: "Capture links, quotes, and excerpts throughout the day, then quickly retrieve them when assembling docs and reports.",
  },
];

const features = [
  "Live mode for near-real-time shared text updates",
  "Push mode for deliberate send-and-copy handoffs",
  "4-digit room code pairing across your devices",
  "Optional Open LAN mode for auto-pairing on trusted Wi-Fi",
  "mDNS/Bonjour discovery over `_clipsync._tcp`",
  "Lightweight local HTTP sync (`GET /current`, `POST /push`)",
];

const architectureNotes = [
  "Each device runs both client and server roles at the same time.",
  "Live conflict handling is last-writer-wins with monotonic timestamps and origin device ID.",
  "Push stack is intentionally lightweight and memory-backed for speed.",
  "Designed for LAN trust zones (no cloud dependency in core flow).",
];

export default function ClipstackPage() {
  const menuItems = [
    { name: "Overview", route: "clipstack-overview", Icon: "" },
    { name: "Problem", route: "clipstack-problem", Icon: "" },
    { name: "How it works", route: "clipstack-how", Icon: "" },
    { name: "Who it is for", route: "clipstack-users", Icon: "" },
    { name: "Core features", route: "clipstack-features", Icon: "" },
    { name: "Why teams choose it", route: "clipstack-value", Icon: "" },
    { name: "Get Clipstack", route: "clipstack-cta", Icon: "" },
  ];

  return (
    <div className="mx-auto w-full max-w-[85rem] bg-vl-cream pb-20 pt-6 text-vl-ink md:pt-10">
      <Sidebar tbList={menuItems} tone="dark" />

      <section className="hidden max-w-[85rem] md:block">
        <TitleSection
          title="Clipstack"
          subTitle="A clipboard workflow built for people who copy and paste all day."
          secondaryText="Productivity · Voltis Labs"
          containerStyle="mb-4 hidden md:block"
        />
      </section>

      <section className="mb-[0.2rem] hidden px-[2rem] md:block md:px-[4rem] lg:px-[10rem] xl:px-[16rem]">
        <ProductBannerSlider images={sliderTiles} />
      </section>

      <div className="flex hidden h-full items-center justify-center p-2 md:flex md:p-7">
        <LearnMoreBtn
          text="Get Clipstack"
          borderColor="border-vl-brown"
          textColor="text-vl-brown"
          route="/contact-us"
        />
      </div>

      <section className="hero-section mb-7 block px-[1.4rem] md:hidden">
        <ProductBannerSlider images={sliderTiles} />
      </section>

      <div className="mx-auto mb-16 content-flow space-y-12 px-[1.4rem] md:space-y-14 md:px-[4rem] lg:px-[10rem] xl:px-[16rem]">
        <section id="clipstack-overview" className="mb-8 text-vl-ink">
          <h1 className={sectionTitleClassName}>A cleaner way to work with copied content</h1>
          <p className={paragrapghClassName}>
            Clipstack is a cross-device clipboard built for focused text transfer. The app lets your devices on the
            same Wi-Fi discover each other, pair into a shared room, and exchange text without routing through a cloud
            inbox.
          </p>
          <p className={paragrapghClassName}>
            Instead of repeatedly reopening tabs, rewriting boilerplate, or searching old chats for one line, Clipstack
            gives you a reliable transfer layer that matches fast iteration work.
          </p>
        </section>

        <section id="clipstack-problem" className="mb-8 text-vl-ink">
          <h2 className={secondaryTitleClassName}>The problem Clipstack solves</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-vl-ink">
            <li>Clipboard history resets at the worst possible time.</li>
            <li>High-value snippets get buried across chats, docs, and tabs.</li>
            <li>Repetitive copy tasks steal focus from real work.</li>
            <li>Teams lose consistency when everyone improvises text blocks.</li>
          </ul>
        </section>

        <section id="clipstack-how" className="mb-8 text-vl-ink">
          <h2 className={secondaryTitleClassName}>How it works</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-vl-brown/20 bg-vl-cream-deep/70 p-4">
              <h3 className={titleClassName}>Create a shared room</h3>
              <p className={paragrapghClassName}>Use the same 4-digit room code on your devices to pair quickly.</p>
            </div>
            <div className="rounded-xl border border-vl-brown/20 bg-vl-cream-deep/70 p-4">
              <h3 className={titleClassName}>Pick sync behavior</h3>
              <p className={paragrapghClassName}>Use Live mode for immediate updates or Push mode for explicit sends.</p>
            </div>
            <div className="rounded-xl border border-vl-brown/20 bg-vl-cream-deep/70 p-4">
              <h3 className={titleClassName}>Discover peers locally</h3>
              <p className={paragrapghClassName}>Devices advertise via Bonjour/mDNS and connect over local HTTP endpoints.</p>
            </div>
            <div className="rounded-xl border border-vl-brown/20 bg-vl-cream-deep/70 p-4">
              <h3 className={titleClassName}>Copy where you need it</h3>
              <p className={paragrapghClassName}>Receive clips on another device and paste directly into your active app.</p>
            </div>
          </div>
        </section>

        <section id="clipstack-users" className="mb-8 text-vl-ink">
          <h2 className={secondaryTitleClassName}>Who it is for</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {useCases.map((item) => (
              <div key={item.title} className="rounded-xl border border-vl-brown/20 bg-vl-cream-deep/70 p-4">
                <h3 className={titleClassName}>{item.title}</h3>
                <p className={paragrapghClassName}>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="clipstack-features" className="mb-8 text-vl-ink">
          <h2 className={secondaryTitleClassName}>Core features</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-vl-ink">
            {features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8 text-vl-ink">
          <h2 className={secondaryTitleClassName}>Architecture highlights</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-vl-ink">
            {architectureNotes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="clipstack-value" className="mb-8 text-vl-ink">
          <h2 className={secondaryTitleClassName}>Why teams choose Clipstack</h2>
          <p className={paragrapghClassName}>
            Clipstack improves both speed and consistency. Individuals spend less time reconstructing text, and teams
            reduce repetitive friction in support, operations, and shipping workflows.
          </p>
          <p className={paragrapghClassName}>
            Because the core path is local and minimal, it stays fast and dependable for everyday use.
          </p>
        </section>

        <section
          id="clipstack-cta"
          className="rounded-2xl border border-vl-brown/30 bg-vl-cream-deep/70 p-8 text-center"
        >
          <h2 className={secondaryTitleClassName}>Build faster with your own reusable stack</h2>
          <p className={`${paragrapghClassName} mx-auto mt-4 max-w-2xl`}>
            If your team runs on copy-and-paste, Clipstack gives that workflow structure. Reach out for early access or
            product walkthroughs.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <LearnMoreBtn text="Contact Voltis Labs" borderColor="border-vl-brown" textColor="text-vl-brown" route="/contact-us" />
            <LearnMoreBtn text="All products" borderColor="border-vl-brown" textColor="text-vl-brown" route="/products" />
          </div>
        </section>
      </div>
    </div>
  );
}
