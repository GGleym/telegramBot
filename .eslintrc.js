/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint.
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/

const TS_CONFIG = require('./tsconfig.json')

const FS_LAYERS = ['application', 'views', 'widgets', 'features', 'entities', 'shared']
const FS_SEGMENTS = ['ui', 'model', 'lib', 'api', 'config']

const getLowerLayers = (layer) => FS_LAYERS.slice(FS_LAYERS.indexOf(layer) + 1)
const getUpperLayers = (layer) => FS_LAYERS.slice(0, FS_LAYERS.indexOf(layer))

const FS_SLICED_LAYERS_REG = getUpperLayers('shared').join('|')
const FS_SEGMENTS_REG = [...FS_SEGMENTS, ...FS_SEGMENTS.map((seg) => `${seg}.*`)].join('|')

const getFsdRules = (notificationLevel = 'error') => ({
  'import/no-cycle': notificationLevel,
  'import/no-internal-modules': [
    notificationLevel,
    {
      allow: [
        /**
         * Allow not segments import from slices
         * @example
         * 'entities/form/ui' // Fail
         * 'entities/form' // Pass
         */
        `~/(${FS_SLICED_LAYERS_REG})/!(${FS_SEGMENTS_REG})`,

        /**
         * Allow slices with structure grouping
         * @example
         * 'features/auth/form' // Pass
         */
        `~/(${FS_SLICED_LAYERS_REG})/!(${FS_SEGMENTS_REG})/!(${FS_SEGMENTS_REG})`,

        /**
         * Allow not segments import in shared segments
         * @example
         * 'shared/ui/button' // Pass
         */
        `~/shared/*(${FS_SEGMENTS_REG})/!(${FS_SEGMENTS_REG})`,

        /**
         * Allow import from segments in shared
         * @example
         * 'shared/ui' // Pass
         */
        `~/shared/*(${FS_SEGMENTS_REG})`,

        /** allow global modules */
        `**/node_modules/**`,

        /**
         *  Used for allow import local modules
         * @example
         * './model/something' // Pass
         */
        `./**`,
      ],
    },
  ],
  'boundaries/element-types': [
    notificationLevel,
    {
      default: 'disallow',
      message:
        '"${file.type}" is not allowed to import "${dependency.type}" | See rules: https://feature-sliced.design/docs/reference/layers/overview ',
      rules: [
        ...getUpperLayers('shared').map((layer) => ({
          from: layer,
          allow: getLowerLayers(layer),
        })),
        {
          from: 'shared',
          allow: 'shared',
        },
      ],
    },
  ],
})

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    'boundaries/elements': FS_LAYERS.map((layer) => ({
      type: layer,
      pattern: `./src/${layer}`,
      mode: 'folder',
      capture: ['slices'],
    })),
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'plugin:boundaries/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    warnOnUnsupportedTypeScriptVersion: false,
  },
  plugins: [
    '@typescript-eslint',
    '@feature-sliced/eslint-plugin-messages',
    'import',
    'boundaries',
    'react-hooks',
    'jsdoc',
    'prefer-arrow',
    'prettier',
  ],
  processor: '@feature-sliced/messages/fs',
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/static-property-placement': 'off',
    'react/destructuring-assignment': ['error', 'always', { ignoreClassFields: true }],
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',

    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/order': [
      'error',
      {
        pathGroups: [
          ...Object.keys(TS_CONFIG.compilerOptions?.paths || {})
            .map((layer) => {
              const layerWithoutAtSign = layer.replace('@', '')
              const isRoot = layer.indexOf('root') !== -1

              return isRoot ? [] : [
                {
                  pattern: `**/?(@)${layerWithoutAtSign}`,
                  group: 'internal',
                  position: 'after',
                },
                {
                  pattern: `**/?(@)${layerWithoutAtSign}*/*`,
                  group: 'internal',
                  position: 'after',
                },
              ]})
            .flat(),
          ...Array.from({ length: 5 }).map((_, i, arr) => ({
            pattern: `${'../'.repeat(arr.length - i)}*`,
            group: 'parent',
            position: 'after',
          })),
        ],
        pathGroupsExcludedImportTypes: ['builtin', 'object'],
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      },
    ],
    'no-plusplus': 'off',
    'consistent-return': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'no-param-reassign': 'off',

    'newline-after-var': ['error', 'always'],
    'newline-before-return': 'error',
    'no-unreachable': 'error',
    curly: 'error',

    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/no-array-index-key': 'off',
    'no-void': 'off',
    'no-bitwise': 'off',
    'react/jsx-sort-props': ['error', { shorthandFirst: true, noSortAlphabetically: true }],
    'react/jsx-props-no-spreading': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],

    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'only-multiline',
        exports: 'only-multiline',
        functions: 'never',
        enums: 'always-multiline',
      },
    ],
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    '@typescript-eslint/no-unsafe-argument': 'error',
    ...getFsdRules(),
  },
  globals: {
    ApplePaySession: true,
    google: true,
  },
  /**
   * Для поддержки проектов не на FSD
   */
  overrides: [
    {
      files: [`!**/{${FS_LAYERS.join(',')}}/**/*.ts?(x)`],
      rules: getFsdRules('warn'),
    },
  ],
}
