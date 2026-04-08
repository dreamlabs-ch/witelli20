import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig, globalIgnores } from "eslint/config";

const loadConfig = async (specifier, fallbackSpecifier) => {
  try {
    const module = await import(specifier);
    return module.default ?? module;
  } catch {
    const module = await import(fallbackSpecifier);
    return module.default ?? module;
  }
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const nextCoreWebVitals = await loadConfig(
  "eslint-config-next/core-web-vitals",
  "eslint-config-next/core-web-vitals.js",
);
const nextTypescript = await loadConfig(
  "eslint-config-next/typescript",
  "eslint-config-next/typescript.js",
);

const nextConfigs =
  Array.isArray(nextCoreWebVitals) && Array.isArray(nextTypescript)
    ? [...nextCoreWebVitals, ...nextTypescript]
    : compat.extends("next/core-web-vitals", "next/typescript");

export default defineConfig([
  ...nextConfigs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "*.sync-conflict-*",
    "eslint.config.mjs",
    "tailwind.config.ts",
    "scripts/**",
  ]),
]);
