import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & policies | Voltis Labs",
  description: "Terms of service and site policies for Voltis Labs.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 pb-20 pt-[6rem] text-vl-ink md:px-6">
      <h1 className="text-2xl font-semibold text-vl-brown-dark md:text-3xl">
        Terms & policies
      </h1>
      <p className="mt-4 text-sm text-vl-ink-muted">
        This page summarizes how you may use this website. For legal questions,
        contact us through the details on our contact page.
      </p>
      <section className="mt-10 space-y-4 text-vl-ink-muted">
        <h2 className="text-lg font-medium text-vl-brown-dark">Use of the site</h2>
        <p>
          By accessing this site you agree to use it lawfully and in a way that
          does not disrupt others&apos; use or compromise security.
        </p>
        <h2 className="pt-4 text-lg font-medium text-vl-brown-dark">Changes</h2>
        <p>
          We may update these terms from time to time. Continued use of the site
          after changes constitutes acceptance of the revised terms.
        </p>
      </section>
    </article>
  );
}
