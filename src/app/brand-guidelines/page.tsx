import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand guidelines | Voltis Labs",
  description: "Brand and logo usage guidelines for Voltis Labs.",
};

export default function BrandGuidelinesPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 pb-20 pt-[6rem] text-vl-ink md:px-6">
      <h1 className="text-2xl font-semibold text-vl-brown-dark md:text-3xl">
        Brand guidelines
      </h1>
      <p className="mt-4 text-sm text-vl-ink-muted">
        These guidelines help partners and media use Voltis Labs branding
        consistently.
      </p>
      <section className="mt-10 space-y-4 text-vl-ink-muted">
        <h2 className="text-lg font-medium text-vl-brown-dark">Logo</h2>
        <p>
          Use official logo assets from Voltis Labs only. Do not stretch,
          recolor, or alter proportions unless we provide an approved variant.
        </p>
        <h2 className="pt-4 text-lg font-medium text-vl-brown-dark">Name</h2>
        <p>
          Write the company name as &quot;Voltis Labs&quot; in headings and body
          copy unless a legal entity name is required for contracts or filings.
        </p>
        <h2 className="pt-4 text-lg font-medium text-vl-brown-dark">Press & partners</h2>
        <p>
          For co-marketing or press kits, contact us through the site so we can
          share the latest approved assets.
        </p>
      </section>
    </article>
  );
}
