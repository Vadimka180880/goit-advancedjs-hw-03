import { defineConfig } from 'vite';
<<<<<<< HEAD

export default defineConfig({
  base: '/goit-advancedjs-hw-03/',
});
=======
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
>>>>>>> 0cddb0e9c937838fc2fbf0efdd0776290f755081
