import { jestLintConfig, reactLintConfig } from '@driponfleek/eslint-config';

export default [
    {
        ignores: [
            '**/dist/**',
            '**/build/**',
            '**/storybook-static/**',
            '**/node_modules/**',
            '**/public/**',
            '**/coverage/**',
            '**/.storybook/**',
            'prettier.config.js',
        ],
    },
    ...reactLintConfig,
    ...jestLintConfig,
    {
        rules: {
            'import-x/no-unresolved': [2, { ignore: ['^@driponfleek/'] }],
        },
    },
];
