import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, "src/yeeted.ts"),
            name: "yeeted",
            // the proper extensions will be added
            fileName: (format) => `yeeted.${format}.js`,
        },
        sourcemap: true,
        emptyOutDir: true,
    },
    plugins: [
        dts({
            insertTypesEntry: true,
        }),
    ],
});
