import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { IconfontCss } from '../src';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), IconfontCss({ include: ['**/*.vue'] })],
  server: {
    host: '0.0.0.0',
  },
});
