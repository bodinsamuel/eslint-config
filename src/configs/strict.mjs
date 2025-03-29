import perfectionist from 'eslint-plugin-perfectionist';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import * as tseslint from 'typescript-eslint';

export default [
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  eslintPluginUnicorn.configs['flat/recommended'],
  {
    files: ['**/*.{ts,mts,cts,tsx,mtsx}'],
    plugins: {
      perfectionist,
    },
    rules: {
      // --- Typescript
      // Recommended
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-redundant-type-constituents': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-argument': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',
      '@typescript-eslint/no-unsafe-enum-comparison': 'error',
      '@typescript-eslint/no-base-to-string': 'error',
      '@typescript-eslint/restrict-plus-operands': 'error',

      // Strict
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/no-dynamic-delete': 'error',
      '@typescript-eslint/no-invalid-void-type': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/only-throw-error': 'error',
      '@typescript-eslint/no-confusing-void-expression': [
        'error',
        {
          ignoreVoidOperator: true,
          ignoreArrowShorthand: true,
        },
      ],

      // Stylistic
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-empty-function': 'error',

      // Other
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowHigherOrderFunctions: true,
          allowDirectConstAssertionInArrowFunctions: true,
          allowIIFEs: true,
          allowExpressions: true,
        },
      ],
      '@typescript-eslint/strict-boolean-expressions': [
        'error',
        { allowNullableString: true, allowNullableBoolean: true },
      ],
      '@typescript-eslint/member-ordering': 'error',

      // Unicorn
      'unicorn/catch-error-name': ['error', { name: 'err' }],
      'unicorn/filename-case': ['error', { case: 'camelCase' }],
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-for-loop': 'off', // handled by ts
      'unicorn/no-null': 'off', // can produce partial json
      'unicorn/prefer-ternary': 'off', // produce subpar code
      'unicorn/no-nested-ternary': 'off', // conflict with prettier

      // Perfectionist
      'perfectionist/sort-enums': ['error', { type: 'alphabetical', order: 'asc' }],
      'perfectionist/sort-exports': ['error', { type: 'alphabetical', order: 'asc' }],
      'perfectionist/sort-intersection-types': ['error', { type: 'alphabetical', order: 'asc' }],
      'perfectionist/sort-named-exports': ['error', { type: 'alphabetical', order: 'asc' }],
      'perfectionist/sort-union-types': ['error', { type: 'alphabetical', order: 'asc' }],
    },
  },
];
