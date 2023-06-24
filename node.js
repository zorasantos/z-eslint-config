module.exports = {
  env: {
    es2020: true,
    node: true,
    jest: true
  },
  extends: [
    "standard",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "eslint-plugin-import-helpers"],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 110,
        endOfLine: 'auto',
        singleQuote: true,
        trailingComma: 'none',
        arrowParens: "always"
      },
    ],
    camelcase: "off",
    "import/no-unresolved": "error",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: true
        }
      }
    ],
    "class-methods-use-this": "off",
    "import/prefer-default-export": "off",
    "no-shadow": "off",
    "no-console": "off",
    "no-useless-constructor": "off",
    "no-empty-function": "off",
    "lines-between-class-members": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never"
      }
    ],
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always",
        groups: ["module", "/^@/", ["parent", "sibling", "index"]],
        alphabetize: { "order": "asc", "ignoreCase": true }
      }
    ],
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/unbound-method": [
      "off",
      {
        ignoreStatic: false
      }
    ],
    "@typescript-eslint/no-misused-promises": [
      "off",
      {
        checksVoidReturn: false
      }
    ],
    "import/no-extraneous-dependencies": "off"
  },
  settings: {
    "import/resolver": {
      typescript: {}
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  }
}