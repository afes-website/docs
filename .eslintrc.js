module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "plugin:aspida/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ["prettier", "aspida"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
    "prettier/prettier": "error",
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
