import { ArrowRight } from "lucide-react";
import React from "react";

const LinkButton = ({
  title,
  surface = "dark",
}: {
  title: string;
  surface?: "dark" | "light";
}) => {
  const light = surface === "light";
  return (
    <div>
      <div
        className={`absolute bottom-0 left-0 ml-5 flex items-center gap-1 rounded border px-2 md:ml-8 md:-bottom-10 xl:bottom-0 ${
          light
            ? "border-vl-brown/40 text-vl-ink hover:bg-vl-cream-muted/80"
            : "border-white text-white hover:bg-[#0D1117]"
        }`}
      >
        <button type="submit" className="rounded-lg px-2 py-2 text-lg font-bold shadow-lg transition">
          {title}
        </button>
        <ArrowRight />
      </div>
    </div>
  );
};

export default LinkButton;