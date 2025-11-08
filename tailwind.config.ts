import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#edf6ff",
          100: "#d6ebff",
          200: "#b0d8ff",
          300: "#7bbcff",
          400: "#439aff",
          500: "#177dff",
          600: "#005af5",
          700: "#0047cc",
          800: "#0138a3",
          900: "#063488"
        }
      },
      fontFamily: {
        display: ["var(--font-inter)"],
        body: ["var(--font-inter)"]
      }
    }
  },
  plugins: []
};

export default config;
