import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import remarkToc from 'remark-toc';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), sitemap()],
  site: 'https://hmthien050209.github.io/',
  prefetch: true,
  markdown: {
    remarkPlugins: [
      [remarkToc, { heading: 'Contents', ordered: true, tight: false }],
    ],
    rehypePlugins: [rehypeAccessibleEmojis],
    shikiConfig: {
      theme: 'vitesse-dark',
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
