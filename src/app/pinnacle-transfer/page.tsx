"use client";

import React from "react";
import Sidebar from "@/src/components/UI/SideBar";
import TitleSection from "@/src/components/UI/TitleSection";
import ProductBannerSlider from "@/src/components/UI/ProductBannerSlider";
import LearnMoreBtn from "@/src/components/UI/LearnMoreBtn";
import { paragrapghClassName, secondaryTitleClassName, sectionTitleClassName, titleClassName } from "../data";

const ART = "/icons/pinnacle-transfer.svg";
const sliderTiles = [{ img: ART }, { img: ART }, { img: ART }, { img: ART }];

const workflows = [
  {
    title: "Studio-to-studio handoff",
    body: "Move video cuts, layered design files, and audio stems without attachment limits or brittle ad hoc workarounds.",
  },
  {
    title: "Cross-device continuity",
    body: "Transfer large in-progress files between machines when your working setup changes during production.",
  },
  {
    title: "Client delivery flow",
    body: "Send polished assets with a clearer handoff path than scattered links across chat and email threads.",
  },
  {
    title: "On-site receiving",
    body: "Use pairing code or QR flow to connect quickly on the same network and start receiving immediately.",
  },
];

const features = [
  "Dedicated Send and Receive modes for focused transfer steps",
  "6-digit pairing code flow with optional QR scan path",
  "Bonjour/mDNS discovery for same-network receiver resolution",
  "Direct local HTTP transfer between devices",
  "Live transfer progress feedback during send/receive",
  "Configurable save location and quick open-folder flow after receive",
  "No mandatory sign-in for core file transfer workflow",
];

const trustNotes = [
  "Transfers are device-to-device on local network paths.",
  "Core transfer flow does not require routing files through Voltis cloud infrastructure.",
  "Pairing details are short-lived and scoped to the active receive session.",
  "Receiver UX is designed to hide pairing visuals once a sender is linked.",
];

export default function PinnacleTransferPage() {
  const menuItems = [
    { name: "Overview", route: "pinnacle-overview", Icon: "" },
    { name: "The problem", route: "pinnacle-problem", Icon: "" },
    { name: "How it works", route: "pinnacle-how", Icon: "" },
    { name: "Use cases", route: "pinnacle-usecases", Icon: "" },
    { name: "Core features", route: "pinnacle-features", Icon: "" },
    { name: "Why it matters", route: "pinnacle-value", Icon: "" },
    { name: "Get Pinnacle", route: "pinnacle-cta", Icon: "" },
  ];

  return (
    <div className="mx-auto w-full max-w-[85rem] bg-vl-cream pb-20 pt-6 text-vl-ink md:pt-10">
      <Sidebar tbList={menuItems} tone="dark" />

      <section className="hidden max-w-[85rem] md:block">
        <TitleSection
          title="Pinnacle Transfer"
          subTitle="Large-file delivery for teams that ship creative work daily."
          secondaryText="Productivity · Voltis Labs"
          containerStyle="mb-4 hidden md:block"
        />
      </section>

      <section className="mb-[0.2rem] hidden px-[2rem] md:block md:px-[4rem] lg:px-[10rem] xl:px-[16rem]">
        <ProductBannerSlider images={sliderTiles} />
      </section>

      <div className="flex hidden h-full items-center justify-center p-2 md:flex md:p-7">
        <LearnMoreBtn
          text="Get Pinnacle Transfer"
          borderColor="border-vl-brown"
          textColor="text-vl-brown"
          route="/contact-us"
        />
      </div>

      <section className="hero-section mb-7 block px-[1.4rem] md:hidden">
        <ProductBannerSlider images={sliderTiles} />
      </section>

      <div className="mx-auto mb-16 content-flow space-y-12 px-[1.4rem] md:space-y-14 md:px-[4rem] lg:px-[10rem] xl:px-[16rem]">
        <section id="pinnacle-overview" className="mb-8 text-vl-ink">
          <h1 className={sectionTitleClassName}>Move big files without breaking flow</h1>
          <p className={paragrapghClassName}>
            Pinnacle Transfer is a structured send/receive workflow for large files on local networks. Instead of
            patching together attachments, cloud folders, and chat links, you get a purpose-built handoff path with
            pairing, progress visibility, and destination control.
          </p>
          <p className={paragrapghClassName}>
            The app is optimized for high-frequency delivery loops where reliability and clarity matter more than
            bloated feature surfaces.
          </p>
        </section>

        <section id="pinnacle-problem" className="mb-8 text-vl-ink">
          <h2 className={secondaryTitleClassName}>The delivery bottleneck</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-vl-ink">
            <li>Large assets regularly exceed default attachment limits.</li>
            <li>Links get scattered across threads and become hard to track.</li>
            <li>Version confusion slows approvals and revisions.</li>
            <li>Handoffs feel fragile when deadlines are tight.</li>
          </ul>
        </section>

        <section id="pinnacle-how" className="mb-8 text-vl-ink">
          <h2 className={secondaryTitleClassName}>How Pinnacle Transfer works</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-vl-brown/20 bg-vl-cream-deep/70 p-4">
              <h3 className={titleClassName}>Receiver starts session</h3>
              <p className={paragrapghClassName}>Receive screen boots server, generates pairing code, and publishes QR/link.</p>
            </div>
            <div className="rounded-xl border border-vl-brown/20 bg-vl-cream-deep/70 p-4">
              <h3 className={titleClassName}>Sender connects</h3>
              <p className={paragrapghClassName}>Send screen resolves receiver by code/QR and confirms handshake before transfer.</p>
            </div>
            <div className="rounded-xl border border-vl-brown/20 bg-vl-cream-deep/70 p-4">
              <h3 className={titleClassName}>Files stream directly</h3>
              <p className={paragrapghClassName}>Selected files stream over local HTTP with live progress instrumentation.</p>
            </div>
            <div className="rounded-xl border border-vl-brown/20 bg-vl-cream-deep/70 p-4">
              <h3 className={titleClassName}>Publish and open</h3>
              <p className={paragrapghClassName}>Receiver saves to configured location and can open folder immediately after completion.</p>
            </div>
          </div>
        </section>

        <section id="pinnacle-usecases" className="mb-8 text-vl-ink">
          <h2 className={secondaryTitleClassName}>Where teams use it most</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {workflows.map((item) => (
              <div key={item.title} className="rounded-xl border border-vl-brown/20 bg-vl-cream-deep/70 p-4">
                <h3 className={titleClassName}>{item.title}</h3>
                <p className={paragrapghClassName}>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pinnacle-features" className="mb-8 text-vl-ink">
          <h2 className={secondaryTitleClassName}>Core features</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-vl-ink">
            {features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8 text-vl-ink">
          <h2 className={secondaryTitleClassName}>Privacy and trust model</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-vl-ink">
            {trustNotes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="pinnacle-value" className="mb-8 text-vl-ink">
          <h2 className={secondaryTitleClassName}>Why it matters for delivery teams</h2>
          <p className={paragrapghClassName}>
            Better transfer tooling does more than move bytes-it protects momentum. Teams keep decisions aligned,
            feedback loops shorten, and delivery confidence increases when handoffs are predictable.
          </p>
          <p className={paragrapghClassName}>
            Pinnacle Transfer is designed to make that reliability repeatable for every asset cycle, especially when
            deadlines and file sizes keep climbing.
          </p>
        </section>

        <section
          id="pinnacle-cta"
          className="rounded-2xl border border-vl-brown/30 bg-vl-cream-deep/70 p-8 text-center"
        >
          <h2 className={secondaryTitleClassName}>Ship large files with less friction</h2>
          <p className={`${paragrapghClassName} mx-auto mt-4 max-w-2xl`}>
            If your team moves heavy assets daily, Pinnacle Transfer can simplify delivery. Contact us for access,
            walkthroughs, and implementation support.
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
