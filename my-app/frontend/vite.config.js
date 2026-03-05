import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    allowedHosts: ['flag-game-frontend-development', 'localhost'],
    watch: {
      usePolling: true,
    },
    proxy: {
      "/api": "http://localhost:3001"
    }
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    globals: true
  }
});
