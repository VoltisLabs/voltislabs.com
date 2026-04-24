import Image from "next/image";
import Link from "next/link";

export default function ClipstackPage() {
  return (
    <div className="mx-auto min-h-[50vh] max-w-3xl px-6 pb-16 pt-[6rem] text-vl-ink">
      <div className="mb-8 flex justify-center">
        <Image
          src="/icons/clipstack.svg"
          alt="Clipstack"
          width={280}
          height={280}
          className="rounded-2xl border border-vl-brown/20 bg-vl-brown-dark p-8"
          unoptimized
          priority
        />
      </div>
      <h1 className="mb-2 text-center text-3xl font-bold text-vl-brown-dark">Clipstack</h1>
      <p className="mb-6 text-center text-sm text-vl-ink-muted">Productivity · Voltis Labs</p>
      <div className="space-y-4 text-pretty leading-relaxed text-vl-ink-muted">
        <p>
          Clipstack is a clipboard manager for people who live in copy-and-paste-developers, writers, support leads,
          and anyone juggling URLs, snippets, and boilerplate all day. Stack what you copy, search your history, and
          paste the right item in seconds instead of re-fetching tabs or retyping the same text.
        </p>
        <p>
          It turns a chaotic stream of temporary clips into an organised, recallable library so your context stays with
          you across apps and sessions.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/products"
          className="rounded-lg border border-vl-brown bg-vl-cream-deep px-4 py-2 text-sm font-semibold text-vl-brown-dark transition hover:bg-vl-cream-muted"
        >
          All products
        </Link>
        <Link
          href="/contact-us"
          className="rounded-lg border border-vl-brown bg-vl-brown px-4 py-2 text-sm font-semibold text-vl-cream transition hover:bg-vl-brown-dark"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}
