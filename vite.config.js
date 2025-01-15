import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/goit-advancedjs-hw-03/', 
  root: 'src', 
  build: {
    outDir: '../dist', 
    emptyOutDir: true, 
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'), 
        timer: path.resolve(__dirname, 'src/1-timer.html'), 
        snackbar: path.resolve(__dirname, 'src/2-snackbar.html'), 
      },
    },
  },
});
