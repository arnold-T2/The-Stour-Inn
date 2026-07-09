import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import autoImport from "unplugin-auto-import/vite";

export default defineConfig({
  plugins: [
    react(),
    eslint(),
    autoImport({
      imports: ["react"],
      eslintrc: { enabled: true },
    }),
  ],
});
