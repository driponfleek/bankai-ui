import React from 'react';
import { themes } from '@storybook/theming';

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
        current: 'light',
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
