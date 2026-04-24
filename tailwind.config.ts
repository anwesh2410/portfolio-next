import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-color": "#1A1F2E",
        "border-color": "#FFB000",
        "secondary-color": "#F5F1E8",
        "secondary-color-2": "#D9CBA8",
        "secondary-color-3": "#FFB000",
        "tertiary-color": "#0D1117",
        "tertiary-color-2": "#FFD166",
      },
      fontFamily: {
        Courgette: ["Courgette", "cursive"],
        grotesk: ["ID Grotesk", "sans-serif"],
        idgrotesk: ["ID Grotesk Trial", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
