import { dirname, join } from 'path';
import { mergeConfig } from 'vite';

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
    stories: ['../stories/**/**/*.mdx', '../stories/**/**/*.stories.@(js|jsx)'],
    addons: [
        getAbsolutePath('@storybook/addon-links'),
        getAbsolutePath('@storybook/addon-essentials'),
        getAbsolutePath('@storybook/addon-interactions'),
        {
            name: '@storybook/addon-styling',
            // options: {
            //     sass: {
            //         implementation: require('sass'),
            //     },
            // },
        },
        getAbsolutePath('@storybook/addon-a11y'),
        getAbsolutePath('storybook-dark-mode'),
        getAbsolutePath('@storybook/addon-mdx-gfm'),
    ],
    framework: {
        name: getAbsolutePath('@storybook/react-vite'),
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    async viteFinal(config) {
        return mergeConfig(config, {
            resolve: {
                conditions: ['storybook-dev']
            }
        });
    },
};
export default config;

function getAbsolutePath(value) {
    return dirname(require.resolve(join(value, 'package.json')));
}
