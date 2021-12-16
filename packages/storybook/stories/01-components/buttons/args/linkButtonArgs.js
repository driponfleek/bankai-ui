import { stringArg, objectArg, funcArg } from '../../../../utils/argTypesUtils';

// Locale
import strings from '../../../../i18n/strings.json';

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

const { bankaiUI: locale } = strings;

export const args = {
    text: 'Link Text',
};

export const argTypes = {
    ...stringArg({
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
    }),
    ...stringArg({
        description: 'Text displayed inside the button.',
        propName: 'text',
    }),
    ...objectArg({
        description:
            'Can be used to pass data back to an `onClick` handler when the user clicks on the button.',
        propName: 'data',
    }),
    ...funcArg({
        action: 'clicked',
        defaultValue: '() => Promise.resolve()',
        description: 'Handler called when the user clicks on the button.',
        propName: 'onClick',
    }),
    ...funcArg({
        description: `${locale.shared.propDesc.renderIcon} ${locale.shared.propDesc.requiresBankaiIcons}`,
        propName: 'renderIcon',
    }),
};
