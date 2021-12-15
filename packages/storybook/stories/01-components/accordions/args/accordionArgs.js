import {
    stringArg,
    numberArg,
    boolArg,
    arrayArg,
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
    headingLvl: 3,
    shouldAllowMultipleExpanded: false,
    shouldAllowZeroExpanded: true,
    // onChange: () => Promise.resolve(),
};

export const argTypes = {
    ...stringArg({
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
    }),
    ...numberArg({
        // description: '',
        propName: 'headingLvl',
    }),
    ...boolArg({
        defaultValue: 'false',
        // description: '',
        propName: 'shouldAllowMultipleExpanded',
    }),
    ...boolArg({
        defaultValue: args.shouldAllowZeroExpanded,
        // description: '',
        propName: 'shouldAllowZeroExpanded',
    }),
    ...arrayArg({
        propName: 'preExpanded',
    }),
    ...funcArg({
        // description: '',
        propName: 'renderTrigger',
    }),
    ...funcArg({
        // description: '',
        propName: 'renderTriggerIcon',
    }),
    ...funcArg({
        action: 'change fired',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onChange',
    }),
};
