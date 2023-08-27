/** @format */

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gap: {
        "8": "2rem",
        "10": "4rem",
      },
      padding: {
        "4": "1rem",
        "5": "1.5rem",
        "6": "2rem",
        "7": "2.5rem",
        "8": "3rem",
      },
    },
  },
  plugins: [],
};
export default config;
