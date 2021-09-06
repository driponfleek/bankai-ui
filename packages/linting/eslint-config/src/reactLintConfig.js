// 0 = off
// 1 = warn
// 2 = error
module.exports = {
    extends: ['@epr0t0type/eslint-config/src/jsLintConfig', 'prettier/react'],
    rules: {
        'react/button-has-type': 1,
        'react/boolean-prop-naming': [
            2,
            {
                rule: '^(is|has|should|can|will)[A-Z]([A-Za-z0-9]?)+',
                message:
                    'Booleans should start with either is, has, should, can or will.',
            },
        ],
        'react/destructuring-assignment': [
            2,
            'always',
            {
                ignoreClassFields: true,
            },
        ],
        'react/forbid-prop-types': [
            2,
            {
                forbid: ['any'],
            },
        ],
        'react/jsx-filename-extension': 0,
        'react/jsx-fragments': 0,
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-props-no-spreading': 0,
        'react/prop-types': [
            2,
            {
                ignore: ['children'],
            },
        ],
        'react/require-default-props': 0,
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
        'jsx-a11y/anchor-is-valid': [
            2,
            {
                components: ['Link'],
                specialLink: ['to'],
            },
        ],
        'jsx-a11y/label-has-associated-control': 2,
    },
};
