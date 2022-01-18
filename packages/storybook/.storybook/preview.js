import React from 'react';
import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';
// import {
//     getThemeCSS,
//     getThemeAPIKeyFromName,
//     getThemeDefaults,
//     THEME_TOKEN_NAMES,
// } from '@epr0t0type/bankai-lib-theme-utils';

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
        dark: {
            ...themes.dark,
        },
        light: {
            ...themes.light,
        },
    },
};

export const decorators = [(Story) => <Story isDarkMode={useDarkMode()} />];
