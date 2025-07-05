import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  sourcemap: true,
  target: 'es2020',
  splitting: true,
  external: ['react', 'react-dom'],
  minify: true,
  loader: {
    '.scss': 'css',
  },
});
