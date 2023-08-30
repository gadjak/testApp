module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:@typescript-eslint/eslint-recommended",
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "react"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/member-delimiter-style": ["error", {
        "multiline": {
            "delimiter": "semi",
            "requireLast": true
        },
        "singleline": {
            "delimiter": "semi",
            "requireLast": false
        }
    }],
    "@typescript-eslint/return-await": "off",
    "@typescript-eslint/await-thenable": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/jsx-filename-extension": [ "warn", {"extensions": [".tsx"]} ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "react/prop-types": "off",
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "multiline-ternary": "off",
    "spaced-comment": "off"
  },
}
