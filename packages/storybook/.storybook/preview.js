/** @type { import('@storybook/react').Preview } */
import { genSBBaseCls } from '@driponfleek/bankai-lib-storybook';
import { themes } from '@storybook/theming';
import { getLocale } from '../utils/localeUtils';

const brandTitle = 'Bankai UI';
const preview = {
    parameters: {
        a11y: {
            disable: false,
            element: `.${genSBBaseCls('component-preview--check-a11y')}`,
        },
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            // https://storybook.js.org/docs/react/essentials/controls#show-full-documentation-for-each-property
            expanded: true,
            hideNoControlsWarning: true,
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
            sort: 'requiredFirst',
        },
        options: {
            showPanel: true,
            storySort: {
                method: 'alphabetical',
                order: [
                    'Foundation',
                    ['Guiding Principles', 'Accessibility'],
                    'Components',
                    'Developers',
                    'Designers',
                    'Everyone',
                    '*',
                ],
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
    },
};

export default preview;
