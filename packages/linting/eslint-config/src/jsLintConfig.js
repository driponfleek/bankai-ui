import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import filenameExportPlugin from 'eslint-plugin-filename-export';
import importPlugin from 'eslint-plugin-import-x';
import noNullPlugin from 'eslint-plugin-no-null';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';

const jsLintConfig = [
    js.configs.recommended,
    importPlugin.flatConfigs.recommended,
    {
        settings: {
            'import-x/resolver': {
                node: {
                    extensions: ['.js'],
                },
            },
        },
    },
    {
        plugins: {
            prettier: prettierPlugin,
            'no-null': noNullPlugin,
            'filename-export': filenameExportPlugin,
        },
        languageOptions: {
            ecmaVersion: 2023,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        rules: {
            ...eslintConfigPrettier.rules,
            'arrow-body-style': 0,
            'class-methods-use-this': [2, { enforceForClassFields: false }],
            curly: 2,
            'filename-export/match-default-export': 2,
            'filename-export/match-named-export': 0,
            'import-x/no-cycle': 0,
            'import-x/no-extraneous-dependencies': [
                0,
                {
                    devDependencies: ['__tests__/*'],
                },
            ],
            'import-x/no-named-as-default-member': 0,
            'import-x/prefer-default-export': 2,
            'lines-between-class-members': [2, 'always'],
            'no-console': 1,
            'no-else-return': [2, { allowElseIf: true }],
            'no-fallthrough': 0,
            'no-null/no-null': 2,
            'no-plusplus': 2,
            'no-underscore-dangle': 2,
            'no-unused-expressions': 0,
            'padding-line-between-statements': [
                2,
                { blankLine: 'always', prev: '*', next: 'if' },
                { blankLine: 'always', prev: '*', next: 'try' },
                { blankLine: 'always', prev: '*', next: 'for' },
                { blankLine: 'always', prev: '*', next: 'switch' },
                { blankLine: 'always', prev: '*', next: 'return' },
            ],
            'prettier/prettier': [
                2,
                {
                    arrowParens: 'always',
                    bracketSpacing: true,
                    singleQuote: true,
                    trailingComma: 'all',
                    tabWidth: 4,
                    parser: 'babel',
                },
            ],
            'space-before-function-paren': [
                2,
                {
                    anonymous: 'never',
                    named: 'never',
                    asyncArrow: 'always',
                },
            ],
        },
    },
];

export default jsLintConfig;
