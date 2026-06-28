import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";

const display = Bricolage_Grotesque({ subsets: ["latin", "latin-ext"], display: "swap", variable: "--font-display-src" });
const sans = Hanken_Grotesk({ subsets: ["latin", "latin-ext"], display: "swap", variable: "--font-sans-src" });
const mono = JetBrains_Mono({ subsets: ["latin", "latin-ext"], display: "swap", variable: "--font-mono-src", preload: false });

export const fontVars = `${display.variable} ${sans.variable} ${mono.variable}`;
