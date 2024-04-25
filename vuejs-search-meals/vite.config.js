import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: './index.html', 
    },
  },
  server: {
    port: 10000, 
  },
  plugins: [vue()],
})
