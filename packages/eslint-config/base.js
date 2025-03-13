import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";
import onlyWarn from "eslint-plugin-only-warn";
import prettierPlugin from "eslint-plugin-prettier";

export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
      "prettier/prettier": "warn",
      "react/button-has-type": "error",
      "prefer-const": "off",
      "@typescript-eslint/consistent-type-imports": "error",
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ["dist/**"],
  },
];
