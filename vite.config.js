import { defineConfig } from 'vite';
import { sync as globSync } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  root: '.',
  build: {
    sourcemap: true,
    base: '/',
    rollupOptions: {
      input: {
        // Головний HTML файл
        main: './index.html',
        ...globSync('./src/pages/**/*.html').reduce((acc, file) => {
          const key = file.replace(/^.*[\\/]/, '');
          acc[`pages/${key}`] = file;
          return acc;
        }, {}),
        ...globSync('./src/blog/**/*.html').reduce((acc, file) => {
          const key = file.replace(/^.*[\\/]/, '');
          acc[`blog/article/${key}`] = file;
          return acc;
        }, {}),
        // Додайте інші папки за потребою
        ...globSync('./src/partials/**/*.html').reduce((acc, file) => {
          const key = file.replace(/^.*[\\/]/, '');
          acc[`partials/${key}`] = file;
          return acc;
        }, {}),
        ...globSync('./src/products/**/*.html').reduce((acc, file) => {
          const key = file.replace(/^.*[\\/]/, '');
          acc[`products/${key}`] = file;
          return acc;
        }, {}),
        ...globSync('./src/politics/**/*.html').reduce((acc, file) => {
          const key = file.replace(/^.*[\\/]/, '');
          acc[`politics/${key}`] = file;
          return acc;
        }, {}),
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        entryFileNames: 'commonHelpers.js',
      },
    },
    outDir: 'dist',
  },
  plugins: [injectHTML(), FullReload([
    './src/pages/**/*.html',
    './src/blog/**/*.html',
    './src/partials/**/*.html',
    './src/products/**/*.html',
    './src/politics/**/*.html'
  ])],
});
