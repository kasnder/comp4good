import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://comp4good.com',
  output: 'static',
  integrations: [sitemap()],
});
