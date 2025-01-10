/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", "sans-serif"], // Baumans devient la police par défaut
      },
      colors: {
        moonstone: "#d00931", // Bleu
        floralWhite: "#F1F2EB", // Blanc cassé
        white: "#FFF", // Blanc
        AsGreen: "#09454F",
      },
    },
  },
  plugins: [],
};
