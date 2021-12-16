import {
    stringArg,
    numberArg,
    boolArg,
    funcArg,
} from '../../../../utils/argTypesUtils';

// Locale
import strings from '../../../../i18n/strings.json';

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

const { bankaiUI: locale } = strings;

export const args = {
    headingText: 'Heading Text',
    headingLvl: 2,
    shouldPadContent: true,
};

export const argTypes = {
    ...stringArg({
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
    }),
    ...stringArg({
        // description: '',
        propName: 'headingText',
    }),
    ...numberArg({
        defaultValue: 2,
        // description: '',
        propName: 'headingLvl',
    }),
    ...boolArg({
        defaultValue: true,
        // description: '',
        propName: 'shouldPadContent',
    }),
    ...funcArg({
        // description: '',
        propName: 'renderHeading',
    }),
};
