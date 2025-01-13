import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeShiki from '@shikijs/rehype';
import remarkToc from 'remark-toc';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue()],
  site: 'https://hmthien050209.github.io/',
  prefetch: true,
  markdown: {
    remarkPlugins: [
      [remarkToc, { heading: 'Contents', ordered: true, tight: false }],
    ],
    rehypePlugins: [
      rehypeAccessibleEmojis,
      [rehypeShiki, { theme: 'dracula' }],
    ],
  },
});
