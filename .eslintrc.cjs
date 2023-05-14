module.exports = {
  "env": {
    "browser": true,
    "node": true
  },
  plugins:["@typescript-eslint"],
  extends: ["plugin:svelte/recommended", "plugin:svelte/prettier", "eslint:recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    //project: "tsconfig.json",
    extraFileExtensions: [".svelte"],
  },
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error"
  }
}