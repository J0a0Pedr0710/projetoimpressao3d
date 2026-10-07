import react from "@vitejs/plugin-react";
import path from "node:path";
import { type UserConfig, defineConfig } from "vite";
import type { InlineConfig } from "vitest/node";

type Config = UserConfig & { test: InlineConfig };

const config: Config = {
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      packageJson: path.resolve(__dirname, "./package.json"),
    },
  },
  build: {
    sourcemap: false,
  },
  test: {
    globals: true,
    environment: "happy-dom",
    pool: "threads",
    coverage: {
      include: [
        "src/contexts/**/*.tsx",
        "src/hooks/**/*.ts",
        "src/schemas/**/*.ts",
        "src/utils/format/**/*.ts",
        "src/utils/models/**/*.ts",
        "src/utils/verify/**/*.ts",
      ],
      exclude: ["src/contexts/Providers/**/*.tsx"],
    },
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    css: true,
  },
};

export default defineConfig(config);
