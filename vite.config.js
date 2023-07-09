import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import typescript from '@rollup/plugin-typescript';

export default defineConfig(async () => ({
  esbuild: {
    loader: 'jsx',
    include: /src\/components\/[^\/]+\/[^\/]+\.{jsx|js|ts|tsx}/,
    exclude: [],
  },
  build: {
    emptyOutDir: false,
    target: 'esnext',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['cjs', 'es'],
      fileName(format) {
        return `[name].${format === 'es' ? 'js' : format}`;
      },
    },
    rollupOptions: {
      input: [
        path.resolve(__dirname, 'src/index.ts'),
      ],
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: (id) => !id.startsWith('.') && !id.startsWith('/'),
      output: {
        dir: 'dist',
        preserveModules: true,
        interop: 'auto',
      },
      plugins: [typescript()],
    },
  },
  plugins: [react(), dts()],
}));
