import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.GITHUB_PAGES === 'true' ? 'https://nexiu-dev.github.io' : 'https://design18kjoias.com.br',
  base: process.env.GITHUB_PAGES === 'true' ? '/Design18kjoias/' : '/',
  output: 'static',
});
