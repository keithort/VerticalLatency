// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: 'always'
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Monoton',
      cssVariable: '--font-monoton',
      weights: [400],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['cursive']
    },
    {
      provider: fontProviders.google(),
      name: 'VT323',
      cssVariable: '--font-vt323',
      weights: [400],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['monospace']
    }
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
