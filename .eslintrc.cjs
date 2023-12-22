module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // // Игнорировать правило "no-empty-required-properties" для свойства "query"
    // "no-empty-required-properties": ["error", { allowProperties: ["query"] }],
    // // Игнорировать правило "no-empty-required-properties" для свойства "providesTags"
    // "no-empty-required-properties": ["error", { allowProperties: ["providesTags"] }],
    // // Игнорировать правило "no-unnecessary-type-assertion"
    // "no-unnecessary-type-assertion": "off",
  },
}
