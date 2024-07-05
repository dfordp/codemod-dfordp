import { build } from "esbuild";

build({
  entryPoints: ["./src/index.ts"],
  bundle: true,
  minify: true,
  platform: "node",
  target: "node18",
  format: "esm",
  legalComments: "inline",
  outfile: "./dist/index.mjs",
  external: [
    "@ast-grep/napi",
    "@ast-grep/cli",
    "@sindresorhus/slugify",
    "colors-cli",
    "filenamify",
    "glob",
    "lodash",
    "magic-string",
    "openai",
    "simple-git",
    "tree-kill",
    "ts-invariant",
    "prettier",
    "jscodeshift",
    "yaml",
  ],
});
