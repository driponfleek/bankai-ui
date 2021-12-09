// 0 = off
// 1 = warn
// 2 = error
module.exports = {
    extends: [
        '@epr0t0type/eslint-config/src/jsLintConfig',
        'prettier/react',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    rules: {
        'jsx-a11y/anchor-is-valid': [
            2,
            {
                components: ['Link'],
                specialLink: ['to'],
            },
        ],
        'jsx-a11y/label-has-associated-control': 2,
        'react/boolean-prop-naming': [
            2,
            {
                rule: '^(is|has|should|can|will)[A-Z]([A-Za-z0-9]?)+',
                message:
                    'Booleans should start with either is, has, should, can or will.',
            },
        ],
        'react/button-has-type': 1,
        'react/default-props-match-prop-types': 2,
        'react/destructuring-assignment': [
            2,
            'always',
            {
                ignoreClassFields: true,
            },
        ],
        'react/display-name': 0,
        'react/forbid-elements': [2, { forbid: ['i', 'b'] }],
        'react/forbid-foreign-prop-types': 2,
        'react/forbid-prop-types': [
            2,
            {
                forbid: ['any'],
            },
        ],
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        'react/jsx-boolean-value': [2, 'never'],
        'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
        'react/jsx-closing-tag-location': 2,
        'react/jsx-curly-brace-presence': [2, 'never'],
        'react/jsx-curly-spacing': [2, { when: 'never' }],
        'react/jsx-equals-spacing': [2, 'never'],
        'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
        'react/jsx-fragments': 0,
        'react/jsx-handler-names': 2,
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-props-no-spreading': 0,
        'react/jsx-newline': 0,
        'react/jsx-no-bind': 2,
        'react/jsx-no-script-url': 2,
        'react/jsx-no-useless-fragment': 2,
        'react/jsx-pascal-case': 2,
        'react/jsx-props-no-multi-spaces': 2,
        'react/jsx-tag-spacing': 2,
        'react/no-access-state-in-setstate': 2,
        // 'react/no-adjacent-inline-elements': 2,
        'react/no-array-index-key': 2,
        // 'react/no-arrow-function-lifecycle': 2,
        'react/no-did-mount-set-state': 2,
        'react/no-did-update-set-state': 2,
        // 'react/no-invalid-html-attribute': 2,
        // 'react/no-multi-comp': 2, // Breaks in unit tests
        // 'react/no-namespace': 2,
        'react/no-redundant-should-component-update': 2,
        'react/no-this-in-sfc': 2,
        'react/no-typos': 2,
        'react/no-unsafe': 2,
        // 'react/no-unstable-nested-components': 2,
        // 'react/no-unused-class-component-methods': 2,
        'react/no-unused-prop-types': 2,
        'react/no-unused-state': 2,
        'react/no-will-update-set-state': 2,
        'react/prefer-es6-class': 2,
        'react/prefer-stateless-function': 2,
        'react/prop-types': [
            2,
            {
                ignore: ['children'],
            },
        ],
        'react/require-default-props': 0,
        'react/self-closing-comp': 2,
        'react/sort-comp': [
            2,
            {
                order: [
                    'defaultProps',
                    'propTypes',
                    'static-methods',
                    'static-variables',
                    'constructor',
                    'state',
                    'componentDidCatch',
                    'componentWillReceiveProps',
                    'shouldComponentUpdate',
                    'componentWillUpdate',
                    'componentWillReact',
                    'render',
                    'componentDidUpdate',
                    'componentDidMount',
                    'componentWillUnmount',
                    '/^render.+$/',
                    '/^handle.+$/',
                    '/^get.+$/',
                    '/^fetch.+$/',
                    'everything-else',
                ],
            },
        ],
        'react/state-in-constructor': 0,
        'react/static-property-placement': [2, 'static public field'],
        'react/void-dom-elements-no-children': 2,
    },
};
