/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    colors: {
      draculaBackground: "#282a36",
      draculaCurrentline: "#44475a",
      draculaForeground: "#f8f8f2",
      draculaComment: "#6272a4",
      draculaCyan: "#8be9fd",
      draculaGreen: "#50fa7b",
      draculaOrange: "#ffb86c",
      draculaPurple: "#bd93f9",
      draculaRed: "#ff5555",
      draculaYellow: "#f1fa8c",
    },
    extend: {},
  },
  plugins: [],
};
