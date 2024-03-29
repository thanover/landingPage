/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg"],
  theme: {
    extend: {
      fontFamily: {
        SourceCodePro: ["Source Code Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
