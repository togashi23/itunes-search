import path from 'path';
import vue from '@vitejs/plugin-vue2';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '',
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        // Bootstrap 4 が依存する古い Sass 記法の非推奨警告を抑制する
        quietDeps: true,
        silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'if-function', 'abs-percent'],
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      './src/': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
  },
});
