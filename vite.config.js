import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import glob from 'tiny-glob';

export default defineConfig(async () => {
  const componentPaths = await glob('./components/**/*.{js,js,svg,ts,tsx}');
  const utilPaths = await glob('./utils/*.{js,jsx,svg,ts,tsx}');

  return {
    esbuild: {
      loader: 'jsx',
      include: /components\/[^\/]+\/[^\/]+\.jsx/,
      exclude: [],
    },
    build: {
      emptyOutDir: false,
      target: 'esnext',
      lib: {
        entry: {},
        formats: ['cjs', 'es'],
        fileName(format) {
          return `[name].${format === 'es' ? 'js' : format}`;
        },
      },
      rollupOptions: {
        input: [
          path.resolve(__dirname, 'components/index.js'),
          ...componentPaths.map((path) => `./${path}`),
          ...utilPaths.map((path) => `./${path}`),
        ],
        // make sure to externalize deps that shouldn't be bundled
        // into your library
        external: (id) => !id.startsWith('.') && !id.startsWith('/'),
        output: {
          dir: 'dist',
          preserveModules: true,
          interop: 'auto',
        },
      },
    },
    plugins: [react()],
  };
});
