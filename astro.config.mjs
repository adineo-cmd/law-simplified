import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://adineo-cmd.github.io',
  base: '/law-simplified/',
  output: 'static',
  integrations: [mdx(), sitemap()],
  prefetch: { prefetchAll: true },
  compressHTML: true,
});
