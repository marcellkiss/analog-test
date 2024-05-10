/// <reference types="vitest" />

import analog from '@analogjs/platform';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  publicDir: 'src/assets',
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({
      // nitro: {
      //   preset: 'node-server',
      // },
      // ssr: false,
      prerender: {
        routes: async () => ['/', '/test', '/x'],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
  // prerender: {
  //   routes: async () => {
  //     return [
  //       ...
  //       '/api/rss.xml',
  //       ...
  //       .
  //     ];
  //   },
  //   sitemap: {
  //     host: 'https://analog-blog.netlify.app',
  //   },
  // },
}));
