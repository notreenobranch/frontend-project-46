import globals from 'globals';

import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended });

export default [
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
  },
  ...compat.extends('airbnb'),
  {
    rules: {
      'import/extensions': [
        'error',
        {
          js: 'always',
        },
      ],
      'no-console': 'off',
    },
  },
  {
    ignores: ['eslint.config.js'],
  },
];
