import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    outDir: "build",
    lib: {
      entry: resolve(__dirname, "src/AsciinemaPlayer.tsx"),
      name: "react-asciinema-player",
      fileName: "react-asciinema-player",
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
  plugins: [react(), dts()],
});
