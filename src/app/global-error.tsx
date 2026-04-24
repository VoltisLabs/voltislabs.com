"use client";

export default function GlobalError({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        className="min-h-screen bg-vl-cream text-vl-ink antialiased"
        style={{ backgroundColor: "#f4efe6", color: "#14100d" }}
      >
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6">
          <h2 className="text-xl font-semibold">Something went wrong</h2>
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-full border border-vl-brown bg-vl-brown px-6 py-2 text-sm font-medium text-vl-cream hover:bg-vl-brown-dark"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
