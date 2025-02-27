import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  define: {
    global: {}, 
  },
  base: '/goit-advancedjs-hw-03/', 
  root: 'src', 
  build: {
    outDir: '../dist', 
    emptyOutDir: true, 
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'), 
      },
    },
  },
});
