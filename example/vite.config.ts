import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import eslint from "vite-plugin-eslint";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [vue(), vueJsx(), eslint()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  envDir: path.resolve(__dirname, "env"),
  server: {
    port: 3000,
    cors: true,
    proxy: {},
  },
  build: {
    outDir: path.resolve(__dirname, "../dist"),
  },
});
