import Image from "next/image";
import Link from "next/link";

export default function PinnacleTransferPage() {
  return (
    <div className="mx-auto min-h-[50vh] max-w-3xl px-6 pb-16 pt-[6rem] text-vl-ink">
      <div className="mb-8 flex justify-center">
        <Image
          src="/icons/pinnacle-transfer.svg"
          alt="Pinnacle Transfer"
          width={280}
          height={280}
          className="rounded-2xl border border-vl-brown/20 bg-vl-cream-muted p-8"
          unoptimized
          priority
        />
      </div>
      <h1 className="mb-2 text-center text-3xl font-bold text-vl-brown-dark">Pinnacle Transfer</h1>
      <p className="mb-6 text-center text-sm text-vl-ink-muted">Productivity · Voltis Labs</p>
      <div className="space-y-4 text-pretty leading-relaxed text-vl-ink-muted">
        <p>
          Pinnacle Transfer is built for teams who move large files daily—design exports, video cuts, audio stems,
          and campaign assets—without fighting attachment limits or scattered drive links. It keeps transfers fast
          and intentional so collaborators spend less time waiting and more time shipping.
        </p>
        <p>
          Whether you are handing off to a remote editor or syncing work between machines, Pinnacle Transfer focuses
          on a smooth, dependable handoff experience that fits naturally into a creative workflow.
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
