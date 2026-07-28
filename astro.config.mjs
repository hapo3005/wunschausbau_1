import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wunschausbau.de',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/danke/')
    })
  ],
  vite: {
    resolve: {
      preserveSymlinks: true
    }
  },
  build: { inlineStylesheets: 'always' }
});
