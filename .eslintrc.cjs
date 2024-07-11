module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // JavaScript
    'eslint:recommended',
    'standard',
    // Vue
    'plugin:vue/recommended',
    // Formatter
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'vue/order-in-components': 'off',
    'vue/multi-word-component-names': 'off',
  },
};
