import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import remarkToc from 'remark-toc';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import { fileURLToPath } from 'node:url';

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), sitemap()],
  site: 'https://hmthien050209.github.io/',
  prefetch: true,
  markdown: {
    processor: unified({
      remarkPlugins: [[remarkToc, { heading: 'Contents', ordered: true, tight: false }]],
      rehypePlugins: [rehypeAccessibleEmojis],
    }),
    shikiConfig: {
      theme: 'vitesse-dark',
    },
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
      },
    },
  },
});
