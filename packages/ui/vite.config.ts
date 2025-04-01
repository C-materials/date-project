import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import fs from "fs";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";
import pkg from "./package.json";

export default defineConfig({
  build: {
    outDir: "dist",
    lib: {
      entry: {
        ui: "src/components/index.ts",
        styles: "src/styles/index.ts",
        "global.css": "src/styles/global.css.ts",
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
    vanillaExtractPlugin({}) as any,
    dts(),
    svgr({
      include: "**/*.svg",
      exclude: "",
    }),
    {
      name: "copy-vanilla-css-to-global-css",
      closeBundle() {
        try {
          const distDir = path.resolve(__dirname, "dist");

          const files = fs.readdirSync(distDir);
          const cssFile = files.find((file) => file.endsWith(".css"));

          if (cssFile) {
            const cssContent = fs.readFileSync(
              path.join(distDir, cssFile),
              "utf8",
            );
            fs.writeFileSync(path.join(distDir, "global.css"), cssContent);
            console.log(
              "Successfully created global.css from Vanilla Extract output",
            );
          } else {
            console.warn("No CSS file found to copy as global.css");
          }
        } catch (error) {
          console.error("Error creating global.css:", error);
        }
      },
    },
  ],
});
