import path from 'path';
import vue from '@vitejs/plugin-vue2';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '',
  plugins: [vue()],
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
