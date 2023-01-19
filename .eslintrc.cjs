module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:vue/vue3-essential', 'standard'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'eol-last': 0,
    'padded-blocks': 0,
    'no-redeclare': 0,
    'space-before-function-paren': 0,
    'no-undef': 1,
    'no-unused-vars': 1,
    'template-curly-spacing': 0,
    'n/no-callback-literal': 0,
    'prefer-promise-reject-errors': 0
  }
}
