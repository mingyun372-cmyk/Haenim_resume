import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'
export default defineConfig({
  base: '/Haenim_resume/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        portfolio: resolve(import.meta.dirname, 'index.html'),
        resume: resolve(import.meta.dirname, 'resume.html'),
      },
    },
  },
})

