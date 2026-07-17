import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import remarkToc from 'remark-toc';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import { fileURLToPath } from 'node:url';
import * as fs from 'node:fs';
import astroTakumi from 'astro-takumi';
import { ogImage } from './src/og-image.tsx';

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    sitemap(),
    astroTakumi({
      options: {
        format: 'webp',
        fonts: [
          fs.readFileSync(
            fileURLToPath(
              import.meta
                .resolve('@fontsource-variable/noto-sans-display/files/noto-sans-display-latin-wght-normal.woff2'),
            ),
          ),
        ],
      },
      render: ogImage,
    }),
  ],
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
