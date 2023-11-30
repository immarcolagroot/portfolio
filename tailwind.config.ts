import type { Config } from "tailwindcss";

import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary-500": "#8A42DB",
      "primary-400": "#9955E8",
      secondary: "#7DFFAF",
      "surface-background": "#171023",
      "surface-primary": "#2C243B",
      "surface-secondary": "#413A4F",
      "surface-tertiary": "#4E4563",
      "text-primary": "#F5F6F6",
      "text-secondary": "#CDD0D4",
      ...colors,
    },
    screens: {
      mobile: { max: "767px" },
      tablet: { min: "768px", max: "1023px" },
      desktop: { min: "1024px" },
    },
  },
  plugins: [],
};
export default config;
