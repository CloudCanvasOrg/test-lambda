import { build } from "esbuild";
import AdmZip from "adm-zip";

build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  platform: "node",
  target: "es2020", // Specify ECMAScript target, e.g., ES2020 for ESM
  outfile: "dist/index.js", // Use .mjs extension for ESM
  format: "cjs", // Output format as ESM
  external: [], // Ensure no node_modules are marked as external,
  logLevel: "info",
}).then(() => {
  const zip = new AdmZip();
  zip.addLocalFile("dist/index.js");

  zip.writeZip("dist/index.js.zip");
});
