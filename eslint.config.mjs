import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: { sourceType: "module" },
    },
    rules: { "no-constant-condition": "error" },
  },
  {
    files: ["tests/**/*.mjs", "examples/**/*.mjs", "scripts/**/*.mjs"],
    rules: {
      "no-unused-vars": "off",
      "no-undef": "off",
      "no-constant-condition": "error",
    },
  },
];
