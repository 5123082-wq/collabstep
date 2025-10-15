module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    next: {
      rootDir: ['apps/web'],
    },
  },
  ignorePatterns: ['*.config.js', '*.config.cjs', 'node_modules/', '.next/', '.turbo/', 'dist/', 'build/'],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
