/** @type {import("prettier").Config} */
export default {
  endOfLine: "lf",
  printWidth: 80,
  tabWidth: 2,
  vueIndentScriptAndStyle: true,
  singleAttributePerLine: true,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
