/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"JetBrains Mono"', "sans-serif"], // Baumans devient la police par défaut
      },
      colors: {
        moonstone: "#12A0B3", // Bleu
        floralWhite: "#FBFBF2", // Blanc cassé
        platinum: "#E5E6E4", // Gris clair
      },
    },
  },
  plugins: [],
};
