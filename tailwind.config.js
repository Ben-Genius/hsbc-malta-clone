// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hsbc: [
          "HSBC Univers Next",
          "HSBC Neue Helvetica",
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
      },
      colors: {
        hsbcRed: "#DB0011",
        hsbcRedHover: "#b8000e",
        hsbcBlack: "#000000",
        hsbcGrey100: "#f7f7f7",
        hsbcGrey200: "#eeeeee",
        hsbcGrey300: "#e6e6e6",
        hsbcGrey400: "#cccccc",
        hsbcGrey500: "#9b9b9b",
        hsbcGrey700: "#4d4d4d",
      },
      maxWidth: {
        hsbc: "1200px", // HSBC sites sit ~1140–1200; this matches the screenshot proportions
      },
      boxShadow: {
        hsbc: "0 6px 18px rgba(0,0,0,.06)",
      },
    },
  },
  plugins: [],
};
