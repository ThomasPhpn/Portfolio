/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", "sans-serif"], // Baumans devient la police par défaut
      },
      colors: {
        moonstone: "#12A0B3", // Bleu
        floralWhite: "#F1F2EB", // Blanc cassé
        white: "#FFF", // Blanc
      },
    },
  },
  plugins: [],
};
