/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '~', replacement: path.resolve(__dirname, 'src') }
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "~/style" as *;'
      }
    }
  },
})
