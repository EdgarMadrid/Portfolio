import { defineConfig } from "vite";
import path from "path";

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/Portfolio/" : "/",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
