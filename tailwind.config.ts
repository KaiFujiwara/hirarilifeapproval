import type { Config } from "tailwindcss";

export default {
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
      },
      fontFamily: {
        'kaisei': ['var(--font-kaisei-decol)'],
        'young': ['var(--font-young-serif)'],
        'kaisei-young': ['var(--font-young-serif)', 'var(--font-kaisei-decol)'],
        'sans': ['var(--font-geist-sans)'],
        'mono': ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
