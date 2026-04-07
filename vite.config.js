import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  // Build config
  build: {
    target: 'es2015',
    minify: 'esbuild',
    cssCodeSplit: true,
    // Isso ignora warnings de CSS durante minify
    rollupOptions: {
      onwarn(warning, warn) {
        // Ignora avisos de CSS aninhado de dependências
        if (warning.code === 'CSS_NESTING_INVALID') return;
        // Mantém os outros warnings normais
        warn(warning);
      },
    },
  },

  // Mostra logs sem travar o build
  logLevel: 'info',
});