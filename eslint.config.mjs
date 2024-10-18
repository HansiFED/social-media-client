import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginJest from 'eslint-plugin-jest';

export default [
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {},
  },

  pluginJs.configs.recommended,

  {
    files: ['**/*.test.js'],
    plugins: {
      jest: pluginJest,
    },
    languageOptions: {
      globals: globals.jest,
    },
    rules: {
      'jest/prefer-expect-assertions': 'off',
    },
    settings: {
      jest: {
        version: 27,
      },
    },
  },
];
