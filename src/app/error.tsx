"use client";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-6 py-16 text-vl-ink">
      <h2 className="text-xl font-semibold">Something went wrong</h2>
      <p className="max-w-md text-center text-vl-ink-muted">{error.message}</p>
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-full border border-vl-brown bg-vl-brown px-6 py-2 text-sm font-medium text-vl-cream hover:bg-vl-brown-dark"
      >
        Try again
      </button>
    </div>
  );
}
