import { Bungee } from "next/font/google";

/** Display font for spinner UI (replaces missing local `ComixLoud.ttf` in repo). */
export const comixLoud = Bungee({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-comix-loud",
});
