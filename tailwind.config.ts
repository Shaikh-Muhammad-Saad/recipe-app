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
        background: "var(--background)",
        foreground: "var(--foreground)",

        // theme colors 
        primary: "#f5ebf8",
        secondary: "#FFFFFF",
        tertiary: "#004370",

        "text-primary": "#000000",
        "text-secondary": "#FFFFFF",
        "text-tertiary": "#004370",

      },
    },
  },
  plugins: [],
};
export default config;
