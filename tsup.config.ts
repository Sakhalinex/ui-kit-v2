import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: ['cjs'], // ← только CommonJS
  dts: true,
  clean: true,
  sourcemap: true,
  target: 'es2020',
});
