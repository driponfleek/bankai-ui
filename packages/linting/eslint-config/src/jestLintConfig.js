import jestPlugin from 'eslint-plugin-jest';
import globals from 'globals';

const jestLintConfig = [
    {
        files: [
            '**/__tests__/**/*.js',
            '**/__tests__/**/*.jsx',
            '**/*.test.js',
            '**/*.test.jsx',
        ],
        plugins: {
            jest: jestPlugin,
        },
        languageOptions: {
            globals: {
                ...globals.jest,
            },
        },
        rules: {
            ...jestPlugin.configs['flat/recommended'].rules,
            'jest/expect-expect': [
                1,
                { assertFunctionNames: ['expect', 'render'] },
            ],
            'jest/no-commented-out-tests': 0,
        },
    },
];

export default jestLintConfig;
