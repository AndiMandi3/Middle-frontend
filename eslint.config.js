import js from "@eslint/js";
import vue from "eslint-plugin-vue";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.vue"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      vue,
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],

      "no-console": "warn",
      "no-debugger": "warn",

      "vue/multi-word-component-names": "off",
      "vue/no-mutating-props": "error",

      "@typescript-eslint/no-explicit-any": "warn",
    },
  },

  prettier,
];
