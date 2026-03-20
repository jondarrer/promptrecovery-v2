import js from '@eslint/js';
import nextVitals from 'eslint-config-next/core-web-vitals';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

const config = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...nextVitals,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  {
    ignores: ['.next/**', 'out/**', 'node_modules/**'],
  },
];

export default config;
