import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ministry-transformation.github.io',
  base: '/birdy-place',
  output: 'static',
  trailingSlash: 'always',
  vite: { plugins: [tailwindcss()] },
});
