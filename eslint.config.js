import js from "@eslint/js";
import globals from "globals";
import vueParser from "vue-eslint-parser"
import vue from "eslint-plugin-vue";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      "coverage/**",
      "*.min.js",
    ],
  },

  js.configs.recommended,
  tseslint.configs.recommended,
  vue.configs["flat/essential"],

  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        sourceType: "module",
      },
      globals: globals.browser,
    },
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },

  {
    files: ["**/*.{ts, js}"],
    languageOptions: {
      parser: tseslint.parser,
      globals: globals.browser,
    },
    rules: {
      "no-undef": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
  {
    files: ["vite.config.*", "**/*.config.{ts,js}"],
    languageOptions: {
      globals: globals.node,
    }
  },

  prettier,
]);
