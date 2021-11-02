module.exports = {
    extends: 'stylelint-config-standard',
    syntax: 'scss',
    rules: {
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'at-root',
                    'extend',
                    'if',
                    'include',
                    'function',
                    'mixin',
                    'return',
                    'use',
                ],
            },
        ],
        'declaration-empty-line-before': 'never',
        'declaration-no-important': true,
        indentation: 4,
        'selector-max-id': 0,
        'selector-class-pattern': [
            '^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-z0-9]+(?:-[a-z0-9]+)*(?:__[a-z0-9]+(?:-[a-z0-9]+)*)?(?:--[a-z0-9]+(?:-[a-z0-9]+)*)?(?:\\[.+\\])?$',
            {
                resolveNestedSelectors: true,
            },
        ],
        'selector-list-comma-newline-after': 'always-multi-line',
        // 'unit-blacklist': ['em'],
        'string-quotes': 'single',
    },
};
