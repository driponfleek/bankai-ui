// 0 = off
// 1 = warn
// 2 = error
module.exports = {
    env: {
        browser: true,
        node: true,
    },
    extends: ['airbnb', 'plugin:prettier/recommended'],
    parser: '@babel/eslint-parser',
    plugins: ['prettier', 'filenames', 'no-null'],
    rules: {
        'arrow-body-style': 0,
        curly: 2,
        'filenames/match-exported': 2,
        'import/no-cycle': 0,
        'import/no-extraneous-dependencies': [
            0,
            {
                devDependencies: ['__tests__/*'],
            },
        ],
        indent: [
            2,
            4,
            {
                ArrayExpression: 1,
                CallExpression: {
                    arguments: 1,
                },
                flatTernaryExpressions: false,
                FunctionDeclaration: {
                    parameters: 1,
                    body: 1,
                },
                FunctionExpression: {
                    parameters: 1,
                    body: 1,
                },
                ignoredNodes: ['JSXElement', 'JSXElement *'],
                ImportDeclaration: 1,
                ObjectExpression: 1,
                outerIIFEBody: 1,
                SwitchCase: 1,
                VariableDeclarator: 1,
            },
        ],
        'lines-between-class-members': [2, 'always'],
        'no-console': 1,
        'no-else-return': [
            2,
            {
                allowElseIf: true,
            },
        ],
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
};
