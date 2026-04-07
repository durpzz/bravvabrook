// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  build: {
    target: 'es2015',
    minify: 'esbuild',
    cssCodeSplit: true,
    rollupOptions: {
      onwarn(warning, warn) {
        // Ignora warnings de CSS aninhado de dependências externas
        if (warning.code === 'CSS_NESTING_INVALID') return;
        warn(warning); // mantém outros warnings normais
      },
    },
  },

  logLevel: 'info', // mostra warnings sem travar o build
});