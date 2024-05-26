import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "var(--brand)",
        background: "var(--background)",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
