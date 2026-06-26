import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://tudominio.com',
  integrations: [
    tailwind(),
    sitemap()
  ],
  output: 'static',
  adapter: vercel({
    analytics: true,
    imageService: true,
  })
});
