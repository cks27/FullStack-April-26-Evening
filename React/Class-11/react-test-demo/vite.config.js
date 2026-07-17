import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',       // browser-like DOM
    globals: true,            // use describe/it/expect without imports (optional)
    setupFiles: './src/setupTests.js',
  },
})
