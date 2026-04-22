import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy | Voltis Labs",
  description: "Privacy policy for the Voltis Labs website.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 pb-20 pt-[6rem] text-vl-ink md:px-6">
      <h1 className="text-2xl font-semibold text-vl-brown-dark md:text-3xl">
        Privacy policy
      </h1>
      <p className="mt-4 text-sm text-vl-ink-muted">
        This policy describes information collected through this website and how
        it is used.
      </p>
      <section className="mt-10 space-y-4 text-vl-ink-muted">
        <h2 className="text-lg font-medium text-vl-brown-dark">Analytics</h2>
        <p>
          We may use industry-standard analytics (for example Google Analytics)
          to understand traffic and improve the site. Those tools may set cookies
          or similar technologies according to their own policies.
        </p>
        <h2 className="pt-4 text-lg font-medium text-vl-brown-dark">Contact forms</h2>
        <p>
          If you submit information through a form, we use it only to respond to
          your request or provide the service you asked for, unless we tell you
          otherwise at the point of collection.
        </p>
        <h2 className="pt-4 text-lg font-medium text-vl-brown-dark">Questions</h2>
        <p>
          For privacy-related requests, use the contact options listed on our
          contact page.
        </p>
      </section>
    </article>
  );
}
