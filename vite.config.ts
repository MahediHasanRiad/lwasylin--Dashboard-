import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
<<<<<<< HEAD
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..']
    },
=======
>>>>>>> 9ea4cca7c1773206c6a0f1f6524ea5a9666261a1
    proxy: {
      '/api': {
        target: 'http://www.powersystem.maktechapp.cloud', 
        changeOrigin: true,
        secure: false,
        followRedirects: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
