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
  }),
  experimental: {
    // CSP con hashes automáticos para script/style (efectiva contra XSS).
    // No se define default-src a propósito: así frame-src (Vimeo/YouTube)
    // e img-src quedan sin restricción y nada se rompe.
    // style-src-attr 'unsafe-inline' permite los atributos style="..."
    // estáticos (font-family de los títulos) sin debilitar script-src.
    csp: true,
  },
});
