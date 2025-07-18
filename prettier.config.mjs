/** @type {import("prettier").Config} */
export default {
  vueIndentScriptAndStyle: true,
  singleAttributePerLine: true,
  semi: true,
  singleQuote: true,
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss',
    'prettier-plugin-sort-imports',
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
