import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    host: true,
    port: 5100,
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
