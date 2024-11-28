import { build } from "esbuild";

build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  platform: "node",
  target: "es2020", // Specify ECMAScript target, e.g., ES2020 for ESM
  outfile: "dist/index.js", // Use .mjs extension for ESM
  format: "cjs", // Output format as ESM
  external: [], // Ensure no node_modules are marked as external,
  logLevel: "info",
});
