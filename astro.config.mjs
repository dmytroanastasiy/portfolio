// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Update these two once you know your GitHub Pages repo name.
  site: 'https://dmytroanastasiy.github.io',
  base: '/portfolio/',
  integrations: [react()],
});
