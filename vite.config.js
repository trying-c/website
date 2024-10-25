import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/website/',

  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        // 目前版本sass已抛弃@import命令，改用@use
        additionalData: '@use "./src/assets/styles/variable.scss" as *;'
      }
    }
  }
})
