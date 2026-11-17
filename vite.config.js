import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const basePath = globalThis.process?.env?.VITE_BASE_PATH || '/';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: basePath,
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-router')) {
            return 'router';
          }
          if (id.includes('node_modules/motion')) {
            return 'motion';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'icons';
          }
        },
      },
    },
  },
});
