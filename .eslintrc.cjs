module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ['plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'sort-keys-fix'],
  rules: {
    'arrow-parens': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-trailing-spaces': 'error',
    'no-useless-constructor': 'off',
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: false,
        objectsInObjects: true,
      },
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'sort-keys-fix/sort-keys-fix': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        asyncArrow: 'always',
        named: 'never',
      },
    ],
  },
}
