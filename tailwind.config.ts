import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Navbar/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/HomeContent/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        content: ["Ubuntu", "sans-serif"],
      },
      colors: {
        'custom-blue': "#06b6d4",
        'custom-blue2': '#0084E6A1',
        'custom-red': "#D72400DA",
        'custom-grey': "#868E8B",
      },
    },
  },
  variants: {},
  plugins: [],
};

export default config;
