import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        vl: {
          cream: "#f4efe6",
          "cream-deep": "#ebe4d8",
          "cream-muted": "#dfd6c8",
          brown: "#5c4033",
          "brown-dark": "#3d2a22",
          "brown-light": "#6f5243",
          ink: "#14100d",
          "ink-muted": "#3d342c",
        },
      },
      fontFamily: {
        comix: ["var(--font-comix-loud)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
