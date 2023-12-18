import { defineConfig, splitVendorChunkPlugin } from 'vite';
export default defineConfig({
 plugins: [splitVendorChunkPlugin()],
 root: 'src',
 // publicDir: 'assets',
 build: {
  rollupOptions: { input: { app: 'src/main.html' } },
  outDir: 'C:\\xampp\\htdocs',
  emptyOutDir: true,
 },
});
