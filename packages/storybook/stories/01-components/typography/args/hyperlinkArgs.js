import { stringArg, boolArg } from '../../../../utils/argTypesUtils';

// Locale
import strings from '../../../../i18n/strings.json';

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

const { bankaiUI: locale } = strings;

export const args = {
    href: 'https://google.com',
    shouldOpenInNewWindow: false,
};

export const argTypes = {
    ...stringArg({
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
    }),
    ...stringArg({
        description: 'URL to the destination for they hyperlink.',
        propName: 'href',
        isRequired: true,
    }),
    ...boolArg({
        description:
            'Set to `true` when the link should open in a new window. This automatically sets `rel="noopener noreferrer"` on the hyperlink for security purposes.',
        propName: 'shouldOpenInNewWindow',
        isRequired: false,
    }),
};
