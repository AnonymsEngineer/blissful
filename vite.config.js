import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'blissful',
  publicDir: 'public',
  server: {
    port: 1234,
    open: true
  }
});

