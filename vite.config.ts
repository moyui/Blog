import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: []
    }
  }
});
