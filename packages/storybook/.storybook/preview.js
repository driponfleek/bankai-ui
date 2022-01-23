import React from 'react';
import { themes } from '@storybook/theming';
// import { useDarkMode } from 'storybook-dark-mode';

const brandTitle = 'Bankai UI';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
        disable: true,
        grid: {
            disable: true,
        },
    },
    controls: {
        expanded: true,
        hideNoControlsWarning: true,
        sort: 'requiredFirst',
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    darkMode: {
        classTarget: 'html',
        dark: {
            ...themes.dark,
            brandTitle,
        },
        darkClass: 'bankai-sb--dark',
        light: {
            ...themes.light,
            brandTitle,
        },
        lightClass: 'bankai-sb--light',
        stylePreview: true,
    },
};

// export const decorators = [(Story) => <Story isDarkMode={useDarkMode()} />];
