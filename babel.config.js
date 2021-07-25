// eslint-disable-next-line func-names
module.exports = function (api) {
    api.cache(true);

    return {
        presets: [
            ['@babel/preset-env', { modules: false }],
            '@babel/preset-react',
        ],
        plugins: [
            ['@babel/plugin-proposal-class-properties', { loose: true }],
            'dynamic-import-node',
        ],
        ignore: ['node_modules/**'],
        env: {
            test: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: [
                    [
                        '@babel/plugin-proposal-class-properties',
                        { loose: true },
                    ],
                ],
            },
        },
    };
};
