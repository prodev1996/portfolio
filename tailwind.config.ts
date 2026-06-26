import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#8b5cf6",
        accent: "#ec4899",
        glass: "rgba(255, 255, 255, 0.03)",
        "glass-border": "rgba(255, 255, 255, 0.08)",
      },
      boxShadow: {
        soft: "0 18px 40px rgba(15,23,42,0.25)",
        glass: "inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 24px 80px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
