import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://sanjeevprasad.net',
  vite: {
    plugins: [tailwindcss()],
  },
});
