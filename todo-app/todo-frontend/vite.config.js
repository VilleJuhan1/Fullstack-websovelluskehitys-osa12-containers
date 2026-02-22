import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
// This is required for the Vite to acknowledge the changes in the current setup
  server: {
    host: true,
    allowedHosts: ['app'],
    watch: {
      usePolling: true,
    },
  }
})