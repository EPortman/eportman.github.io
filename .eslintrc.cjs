module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    extraFileExtensions: ['.vue'],
  },
  plugins: ['vue'],
  extends: ['@nuxtjs/eslint-config', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    semi: ['error', 'never'],
  },
}
