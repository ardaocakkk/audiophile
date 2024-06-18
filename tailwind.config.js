/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkOrange: "#D87D4A",
        customBlack : "#101010",
        customGray : "#F1F1F1",
        customWhite : "#FAFAFA",
        lightOrange : "#FBAF85"
      }
    },
  },
  plugins: [],
};
