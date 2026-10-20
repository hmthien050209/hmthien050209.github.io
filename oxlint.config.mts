import { defineConfig } from 'oxlint';

export default defineConfig({
  options: {
    typeAware: true,
  },

  ignorePatterns: ['**/dist/*', '**/.astro/*'],

  plugins: ['typescript', 'import', 'unicorn', 'jsx-a11y', 'oxc'],

  jsPlugins: ['eslint-plugin-astro', 'eslint-plugin-solid'],
});
