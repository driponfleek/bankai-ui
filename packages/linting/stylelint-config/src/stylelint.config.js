/* eslint-disable no-null/no-null */
// Rules from:
// - Stylelint: https://stylelint.io/user-guide/rules/list
// - Stylelint-SCSS: https://github.com/stylelint-scss/stylelint-scss#readme
const classNamePattern =
    '^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-z0-9]+(?:-[a-z0-9]+)*(?:__[a-z0-9]+(?:-[a-z0-9]+)*)?(?:--[a-z0-9]+(?:-[a-z0-9]+)*)?(?:\\[.+\\])?$';
module.exports = {
    extends: 'stylelint-config-standard-scss',
    rules: {
        'at-rule-no-unknown': null,
        'at-rule-empty-line-before': null,
        'color-function-notation': null,
        'declaration-empty-line-before': 'never',
        'declaration-no-important': true,
        'function-name-case': [
            'lower',
            { ignoreFunctions: ['/min/i', '/max/i'] },
        ],
        indentation: 4,
        'max-line-length': null,
        'no-invalid-double-slash-comments': null,
        'scss/at-import-partial-extension': 'always',
        'scss/at-rule-conditional-no-parentheses': null,
        'scss/at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'at-root',
                    'each',
                    'extend',
                    'else',
                    'forward',
                    'function',
                    'if',
                    'include',
                    'mixin',
                    'return',
                    'use',
                    'warn',
                ],
            },
        ],
        'scss/dollar-variable-empty-line-before': 'never',
        'scss/double-slash-comment-empty-line-before': null,
        'scss/percent-placeholder-pattern': null,
        'selector-max-id': 0,
        'selector-class-pattern': [
            classNamePattern,
            {
                resolveNestedSelectors: true,
            },
        ],
        'selector-list-comma-newline-after': 'always-multi-line',
        'string-quotes': 'single',
        // https://github.com/stylelint/stylelint/issues/5863
        'value-keyword-case': ['lower', { camelCaseSvgKeywords: true }],
    },
};
