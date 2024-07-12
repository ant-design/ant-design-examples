import process from 'node:process'
import { URL, fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.MY_SITE_BASE ?? '/',
  resolve: {
    alias: {
      '@/': fileURLToPath(new URL('./src/', import.meta.url)),
    },
  },
  plugins: [
    react(),
    Pages({
      resolver: 'react',
    }),
  ],
})
