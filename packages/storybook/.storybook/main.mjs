// import { dirname, join } from 'path';
import { mergeConfig } from 'vite';

// function getAbsolutePath(value) {
//     return dirname(require.resolve(join(value, 'package.json')));
// }

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
    stories: ['../stories/**/**/*.mdx', '../stories/**/**/*.stories.@(js|jsx)'],

    addons: [
        '@storybook/addon-links',
        '@storybook/addon-a11y',
        '@storybook/addon-docs',
        // getAbsolutePath('@storybook/addon-links'),
        // getAbsolutePath('@storybook/addon-a11y'),
        // getAbsolutePath("storybook-dark-mode"),
        // '@chromatic-com/storybook',
        // getAbsolutePath("@chromatic-com/storybook"),
        // getAbsolutePath('@storybook/addon-docs'),
    ],
    // addons: [
    //     getAbsolutePath('@storybook/addon-links'),
    //     getAbsolutePath('@storybook/addon-essentials'),
    //     getAbsolutePath('@storybook/addon-interactions'),
    //     {
    //         name: '@storybook/addon-styling',
    //         // options: {
    //         //     sass: {
    //         //         implementation: require('sass'),
    //         //     },
    //         // },
    //     },
    //     getAbsolutePath('@storybook/addon-a11y'),
    //     getAbsolutePath('storybook-dark-mode'),
    //     getAbsolutePath('@storybook/addon-mdx-gfm'),
    //     '@chromatic-com/storybook'
    // ],

    framework: {
        name: '@storybook/react-vite',
        // name: getAbsolutePath('@storybook/react-vite'),
        options: {},
    },

    docs: {},

    async viteFinal(config) {
        return mergeConfig(config, {
            resolve: {
                conditions: ['storybook-dev'],
            },
        });
    },

    typescript: {
        reactDocgen: 'react-docgen-typescript',
    },
};

export default config;
