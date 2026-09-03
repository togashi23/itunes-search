import path from 'path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '',
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        // Bootstrap が依存する古い Sass 記法の非推奨警告を抑制する
        silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'if-function'],
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
      './src/': path.resolve(import.meta.dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
  },
});
