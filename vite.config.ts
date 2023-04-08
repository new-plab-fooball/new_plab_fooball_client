import { defineConfig } from "vite";
import dotenv from "dotenv";
import { resolve } from "path";

dotenv.config();

export default defineConfig({
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
  },
});
