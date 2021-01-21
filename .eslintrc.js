module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-useless-return': 'off',
    'prefer-const': 'off',
    'no-console': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-filename-extension': 'off',
  },
};
