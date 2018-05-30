exports.configs = {
  recommended: {
    extends: [
      'semistandard',
      'plugin:security/recommended'
    ],
    plugins: [
      'import',
      'lodash',
      'security'
    ],
    rules: {
      'generator-star-spacing': ['error', {'before': false, 'after': true}],
      'import/no-extraneous-dependencies': 'error',
      'lodash/import-scope': 'warn',
      'no-var': 'error',
      'prefer-const': 'error'
    }
  }
};
