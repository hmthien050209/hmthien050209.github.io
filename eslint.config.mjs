import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginVue from 'eslint-plugin-vue';
import eslintJs from '@eslint/js';

export default [
  ...eslintPluginVue.configs['flat/recommended'],
  eslintJs.configs['recommended'],
  ...eslintPluginAstro.configs['jsx-a11y-strict'],
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  },
  {
    files: ['*.{js,ts,mjs,mts,cjs,html,css,astro}'],
    ignores: ['**/dist/*', '**/.astro/*'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
];
