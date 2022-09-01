/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow", ...defaultTheme.fontFamily.sans],
        display: ["Bungee", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.rose[900],
        secondary: colors.cyan[800],
        gradientStart: colors.orange[400],
        gradientEnd: colors.rose[900],
      },
      dropShadow: {
        block: [
          "3px 3px 0 rgba(255, 255, 255, 1)",
          "-1px -1px 0 rgba(255, 255, 255, 1)",
          " 1px -1px 0 rgba(255, 255, 255, 1)",
          "-1px 1px 0 rgba(255, 255, 255, 1)",
          " 1px 1px 0 rgba(255, 255, 255, 1)",
        ],
        highlight: [
          "-1px -1px 0 rgba(255, 255, 255, 1)",
          " 1px -1px 0 rgba(255, 255, 255, 1)",
          "-1px 1px 0 rgba(255, 255, 255, 1)",
          " 1px 1px 0 rgba(255, 255, 255, 1)",
        ],
      },
    },
  },
  plugins: [],
};
