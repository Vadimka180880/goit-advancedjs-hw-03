import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/goit-advancedjs-hw-03/', // Для GitHub Pages
  root: '.', // Корінь проєкту (залишаємо index.html у корені)
  build: {
    outDir: 'dist', // Папка для зібраного проєкту
    emptyOutDir: true, // Очищення dist перед новою збіркою
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'), // Головна сторінка
      },
    },
  },
});
