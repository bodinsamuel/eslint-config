import eslint from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import importEslint from 'eslint-plugin-import-x';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import * as tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  importEslint.flatConfigs.recommended,
  importEslint.flatConfigs.errors,
  importEslint.flatConfigs.warnings,
  importEslint.flatConfigs.typescript,
  prettier,
  prettierRecommended,
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx,mtsx}'],
    rules: {
      'no-console': 1,
      'no-constant-condition': 'off',

      'prettier/prettier': [
        'error',
        {
          arrowParens: 'always',
          bracketSpacing: true,
          bracketSameLine: false,
          printWidth: 100,
          singleQuote: true,
          trailingComma: 'es5',
          useTabs: false,
          quoteProps: 'as-needed',
        },
      ],

      // --- Import
      'import-x/extensions': [
        'error',
        'always',
        {
          json: 'always',
          js: 'always',
          ts: 'never',
          ignorePackages: true,
        },
      ],
      'import-x/no-unresolved': 'off',
      'import-x/no-duplicates': 'error',
      'import-x/no-extraneous-dependencies': 'error',
      'import-x/no-empty-named-blocks': 'error',
      'import-x/no-absolute-path': 'error',
      'import-x/no-self-import': 'error',
      'import-x/newline-after-import': 'error',
      'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      'import-x/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'unknown',
            'internal',
            'parent',
            'sibling',
            'type',
            'index',
            'object',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
          },
          warnOnUnassignedImports: true,
          pathGroups: [
            {
              pattern: '@/**',
              group: 'parent',
            },
            {
              pattern: '@pohlen/*',
              group: 'internal',
              position: 'after',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.{ts,mts,cts,tsx,mtsx}'],
    extends: [...tseslint.configs.recommended],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node,
      parserOptions: { project: './tsconfig.json' },
    },
    rules: {
      '@typescript-eslint/no-var-requires': 'off', // tseslint does not autodetect commonjs context

      // --- Typescript
      // Recommended
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/no-redundant-type-constituents': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/require-await': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-enum-comparison': 'off',
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        {
          allowNumber: true,
          allowBoolean: true,
        },
      ],
      '@typescript-eslint/no-base-to-string': 'off',
      '@typescript-eslint/restrict-plus-operands': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],

      // Stylistic
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-empty-function': 'warn',

      // Others
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
        },
      ],
      '@typescript-eslint/max-params': ['error', { max: 2 }],
      '@typescript-eslint/method-signature-style': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'typeParameter',
          format: ['PascalCase'],
          prefix: ['T', 'K'],
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        { selector: 'class', format: ['PascalCase'] },
        { selector: 'method', format: ['camelCase'], leadingUnderscore: 'allow' },
        { selector: 'function', format: ['camelCase'] },
      ],
      '@typescript-eslint/no-import-type-side-effects': 'error',

      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/prefer-enum-initializers': 'error',
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
    },
  }
);
