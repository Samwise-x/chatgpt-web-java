export default [
  {
    files: ["src/**/*.ts", "tests/**/*.mjs", "examples/**/*.mjs"],
    rules: {
      "no-unused-vars": "off",
      "no-undef": "off",
      "no-constant-condition": "error",
    },
  },
];
