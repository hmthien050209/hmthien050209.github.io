/** @type {import("prettier").Config} */
export default {
  vueIndentScriptAndStyle: true,
  singleAttributePerLine: true,
  semi: true,
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
