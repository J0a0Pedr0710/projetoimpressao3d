import js from "@eslint/js";
import vitest from "@vitest/eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
// @ts-expect-error eslint-plugin-jsx-a11y does not ship TypeScript types
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

const vitestTestFiles = ["**/*.{spec,test}.{ts,tsx}", "src/test/**/*.{ts,tsx}"];

const configFiles = ["eslint.config.mts", "vite.config.ts", "*.config.*"];

const srcApplicationFiles = ["src/**/*.{ts,tsx}"];

const srcApplicationIgnores = ["**/*.{spec,test}.{ts,tsx}", "src/test/**"];

const importRules = {
  "import/first": "warn",
  "import/newline-after-import": "warn",
  "import/no-duplicates": "warn",

  "@typescript-eslint/no-restricted-imports": [
    "error",
    {
      patterns: [
        {
          group: ["..", "../", "../*", "../**"],
          message:
            "Relative parent imports (..) are not allowed. Use @/ alias instead.",
        },
        {
          group: ["@/**/index"],
          message:
            "Do not import from /index. Use the module path directly (e.g. @/features/shared/molecules/select).",
        },
      ],
    },
  ],
} as const;

const coreTypeScriptRules = {
  "no-console": "error",

  "@typescript-eslint/no-explicit-any": "error",

  "@typescript-eslint/consistent-type-imports": [
    "error",
    {
      prefer: "type-imports",
      fixStyle: "separate-type-imports",
    },
  ],

  "@typescript-eslint/no-unused-vars": [
    "error",
    {
      argsIgnorePattern: "^_",
      varsIgnorePattern: "^_",
      caughtErrorsIgnorePattern: "^_",
    },
  ],

  "@typescript-eslint/require-await": "off",
  "@typescript-eslint/no-unsafe-assignment": "off",
  "@typescript-eslint/no-unsafe-return": "off",
  "@typescript-eslint/no-unsafe-member-access": "off",
  "@typescript-eslint/no-unsafe-argument": "off",
  "@typescript-eslint/restrict-template-expressions": "off",
  "@typescript-eslint/unbound-method": "off",
  "@typescript-eslint/no-unnecessary-type-assertion": "off",
  "@typescript-eslint/no-misused-promises": "off",
  "@typescript-eslint/no-floating-promises": "off",
  "@typescript-eslint/prefer-promise-reject-errors": "off",
  "@typescript-eslint/no-unsafe-call": "off",
  "@typescript-eslint/no-unsafe-enum-comparison": "off",
  "@typescript-eslint/no-base-to-string": "off",
  "@typescript-eslint/no-redundant-type-constituents": "off",
  "@typescript-eslint/no-require-imports": "off",
} as const;

export default defineConfig([
  {
    ignores: [
      "dist/**",
      "build/**",
      "coverage/**",
      ".vite/**",
      "node_modules/**",
      ".gitlab-ci-local/**",
      "**/.ci/**",
    ],
  },

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,tsx,jsx}"],

    plugins: {
      js,
    },

    extends: ["js/recommended"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",

      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
  },

  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: configFiles,
  })),

  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: vitestTestFiles,

    rules: {
      ...config.rules,
      ...coreTypeScriptRules,
    },
  })),

  {
    files: vitestTestFiles,
    ...vitest.configs.recommended,
  },

  {
    files: srcApplicationFiles,
    ignores: srcApplicationIgnores,

    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  ...tseslint.configs.recommendedTypeChecked.map((config) => ({
    ...config,
    files: srcApplicationFiles,
    ignores: srcApplicationIgnores,

    rules: {
      ...config.rules,
      ...coreTypeScriptRules,
    },
  })),

  {
    files: srcApplicationFiles,
    ignores: srcApplicationIgnores,

    plugins: {
      import: importPlugin,
    },

    rules: importRules,
  },

  {
    files: srcApplicationFiles,
    ignores: srcApplicationIgnores,
    ...reactPlugin.configs.flat.recommended,
    ...reactPlugin.configs.flat["jsx-runtime"],

    settings: {
      react: {
        version: "detect",
      },
    },
  },

  {
    files: srcApplicationFiles,
    ignores: srcApplicationIgnores,
    ...jsxA11y.flatConfigs.recommended,
  },

  {
    files: srcApplicationFiles,
    ignores: srcApplicationIgnores,

    plugins: {
      "react-hooks": reactHooks,
    },

    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "off",
    },
  },

  {
    files: ["src/assets/icons/**/*.tsx"],

    rules: {
      // Legacy icon render functions use camelCase keys and styled-components useTheme().
      "react-hooks/rules-of-hooks": "off",
    },
  },

  {
    files: ["src/index.tsx", "src/reportWebVitals.ts"],

    rules: {
      "no-console": "off",
    },
  },

  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: ["cypress/**/*.{ts,tsx}"],
  })),

  {
    files: ["cypress/**/*.{ts,tsx,js,jsx}"],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.mocha,
      },
    },

    rules: {
      "@typescript-eslint/no-restricted-imports": "off",
      "no-console": "off",
    },
  },

  {
    ignores: ["cypress/**/*.d.ts"],
  },

  eslintConfigPrettier,
]);
