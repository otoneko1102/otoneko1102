// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  outDir: '../docs',
  base: '/otoneko1102/',
  site: 'https://otoneko1102.github.io',
});
