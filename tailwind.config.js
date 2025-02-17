/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
      },
      colors: {
        moonstone: "#d00931",
        floralWhite: "#F1F2EB",
        white: "#FFF",
        AsGreen: "#09454F",
      },
    },
  },
  plugins: [],
};
