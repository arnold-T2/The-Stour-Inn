import { createRequire } from "module";
import js from "@eslint/js";

const require = createRequire(import.meta.url);
const autoImportGlobals = require("./.eslintrc-auto-import.json");
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

export default [
  // Ignore build output and dependencies
  {
    ignores: ["dist", "node_modules", ".vite"],
  },

  // Base recommended JavaScript rules
  js.configs.recommended,

  {
    // Apply rules only to source files
    files: ["src/**/*.{js,jsx}"],

    languageOptions: {
      ecmaVersion: "latest", // Use latest ECMAScript features
      sourceType: "module", // Enable ES modules (import/export)
      parserOptions: {
        ecmaFeatures: { jsx: true }, // Enable JSX parsing
      },
      globals: {
        ...globals.browser,
        ...autoImportGlobals.globals,
      },
    },

    // Auto-detect installed React version
    settings: {
      react: { version: "detect" },
    },

    // Register React-related plugins
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },

    rules: {
      // Recommended React + Hooks rules
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // React 17+ no longer requires React in scope for JSX
      "react/react-in-jsx-scope": "off",

      // Ensure proper exports for React Fast Refresh
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // Disable PropTypes requirement
      "react/prop-types": "off",

      // Flag variables used but never defined
      "no-undef": "error",

      // Warn on variables defined but never used
      "no-unused-vars": "warn",
    },
  },
];
