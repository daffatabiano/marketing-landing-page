import type { Config } from "tailwindcss";

/**
 * Tailwind CSS v4 Configuration
 * Most theme extensions are now defined in app/tailwind.css using @theme directive
 * This file is kept minimal for any required plugins
 */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
};

export default config;
