module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ["@typescript-eslint", "aspida"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:aspida/recommended",
    "prettier",
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
  },
  overrides: [
    {
      files: ["**/*.js"],
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
  ],
};
