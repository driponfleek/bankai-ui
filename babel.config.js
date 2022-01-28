// eslint-disable-next-line func-names
module.exports = function (api) {
    api.cache(true);

    return {
        presets: [
            [
                '@babel/preset-env',
                { modules: false, shippedProposals: true, loose: true },
            ],
            '@babel/preset-react',
        ],
        plugins: [
            ['@babel/plugin-proposal-class-properties', { loose: true }],
            'dynamic-import-node',
        ],
        ignore: ['node_modules/**'],
        env: {
            test: {
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            targets: {
                                node: 'current',
                            },
                        },
                    ],
                    '@babel/preset-react',
                ],
                plugins: [
                    [
                        '@babel/plugin-proposal-class-properties',
                        { loose: true },
                    ],
                    ['@babel/plugin-proposal-private-methods', { loose: true }],
                    [
                        '@babel/plugin-proposal-private-property-in-object',
                        { loose: true },
                    ],
                ],
            },
        },
    };
};
