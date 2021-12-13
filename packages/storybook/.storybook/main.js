const fs = require('fs');
const path = require('path');
const {
    getSymLinks,
    fixStoryBookBabel,
    fixStoryBookFileLoader,
    fixStoryBookSass,
} = require('../utils/webpackUtils');
const rootNodeModules = path.resolve('..', '..', 'node_modules', '@epr0t0type');

module.exports = {
    addons: [
        {
            name: '@storybook/addon-essentials',
        },
        '@storybook/addon-a11y',
        '@storybook/addon-links',
    ],
    core: {
        builder: 'webpack5',
    },
    babel: async (options) => ({
        ...options,
        plugins: [
            '@babel/plugin-proposal-class-properties',
            // '@babel/plugin-proposal-private-methods',
        ],
    }),
    stories: ['../stories/**/**/*.stories.@(js)'],
    typescript: { reactDocgen: 'none' },
    webpackFinal: async (config) => {
        const symLinks = getSymLinks(rootNodeModules, path, fs);
        const newConfig = fixStoryBookSass(
            fixStoryBookFileLoader({ ...config }),
            path,
        );

        return fixStoryBookBabel(newConfig, symLinks);
    },
};
