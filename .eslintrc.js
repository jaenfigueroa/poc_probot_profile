module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'prettier'],
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
  },
  rules: {
    /* usar comillas simples */
    quotes: ['warn', 'single'],
    /* no punto y coma */
    semi: ['warn', 'never'],
    /* no usar var */
    'no-var': 'warn',
    /* usar preferiblemente const */
    'prefer-const': 'warn',
    /* añadir coma a final de las listas */
    'comma-dangle': ['warn', 'always-multiline'],
  },
}
