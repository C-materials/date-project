import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import pkg from "./package.json";

export default defineConfig({
  build: {
    outDir: "dist",
    lib: {
      entry: {
        ui: "src/components/index.ts",
        styles: "src/styles/index.ts",
      },
      formats: ["es"],
      fileName: (format, entryName) => `${entryName}.mjs`,
    },
    rollupOptions: {
      external: [
        ...Object.keys((pkg as any).dependencies || {}),
        ...Object.keys((pkg as any).peerDependencies || {}),
      ],
    },
  },
  plugins: [
    vanillaExtractPlugin({
      identifiers: ({ hash }) => `_${hash}`,
    }),
    dts(),
  ],
});
