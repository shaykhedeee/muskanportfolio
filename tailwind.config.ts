import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F7F2E8",
          card: "#FFFDF7",
        },
        brown: {
          DEFAULT: "#4B342B",
          soft: "#6D5144",
          light: "#8D7063",
        },
        olive: {
          DEFAULT: "#66713E",
          deep: "#454D2C",
          light: "#8A9656",
        },
        sunflower: {
          DEFAULT: "#FFC928",
          soft: "#F6D86B",
          deep: "#E5B014",
        },
        stone: {
          DEFAULT: "#D8CDBB",
          light: "#EAE3D6",
          dark: "#B8AB96",
        },
        charcoal: "#1C1A17",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        hand: ["var(--font-hand)", "cursive"],
      },
      maxWidth: {
        "master": "1760px",
      },
      borderRadius: {
        "arch": "200px 200px 0 0",
        "arch-lg": "320px 320px 0 0",
      },
    },
  },
  plugins: [],
};

export default config;
