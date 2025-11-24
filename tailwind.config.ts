import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",
        accent: "#22c55e",
      },
      boxShadow: {
        soft: "0 18px 40px rgba(15,23,42,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
