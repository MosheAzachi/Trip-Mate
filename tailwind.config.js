/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#b9f9f8",
        primary: "#00CA3C",
        secondary: "#84F3F7",
        blue: "#0083FF",
      },
      animation: {
        spin720: "spin720 2s linear infinite",
      },
      keyframes: {
        spin720: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(720deg)" },
        },
      },
      scale: {
        102: "1.02", // Add scale(1.02)
      },
    },
  },
  plugins: [],
};
