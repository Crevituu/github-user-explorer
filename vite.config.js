import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration, including Vitest (test runner compatible with
// the Jest + Testing Library requirement of the challenge).
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
    css: true,
  },
});
