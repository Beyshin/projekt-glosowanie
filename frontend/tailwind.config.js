/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", "Segoe UI", "sans-serif"],
        display: ["Libre Baskerville", "Georgia", "serif"],
      },
      colors: {
        sand: "var(--sand)",
        clay: "var(--clay)",
        ink: "var(--ink)",
        brand: {
          50: "#eef3ff",
          100: "#d8e3ff",
          200: "#b4c8ff",
          300: "#86a6ff",
          400: "#5a82f4",
          500: "#3f67dd",
          600: "#2f53c7",
          700: "#2443a6",
          800: "#213982",
          900: "#1d326e",
        },
      },
    },
  },
  plugins: [],
};
