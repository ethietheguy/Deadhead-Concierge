import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: {
          DEFAULT: "#C8553D",
          dark: "#A8422E",
          light: "#D97560",
        },
        cream: {
          DEFAULT: "#F5F0E6",
          dark: "#EAE2D1",
        },
        navy: {
          DEFAULT: "#1B2A3A",
          dark: "#0F1A26",
          light: "#2E4257",
        },
        warmblack: "#2A2520",
        muted: "#7A7167",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        page: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
