import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// URLs match the old Webflow site exactly: /works, /works/red-bull, /contact (no trailing slash).
export default defineConfig({
  site: 'https://dinealbrecht.net',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
});
