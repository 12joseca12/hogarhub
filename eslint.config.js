const expoConfig = require("eslint-config-expo/flat");
const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
  {
    ignores: [
      "**/node_modules/**",
      "**/.expo/**",
      "**/android/**",
      "**/ios/**",
      "**/build/**",
      "**/dist/**",
      "**/coverage/**",
    ],
  },
  expoConfig,
  {
    files: ["**/*.{ts,tsx}"],
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
        node: true,
      },
    },
  },
]);
