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
        description: locale.shared.propDesc.headingLvl,
        propName: 'headingLvl',
    }),
    ...boolArg({
        defaultValue: 'false',
        description:
            'When `false` only allows one accordion item to be open at a time. When `true` allows multiple accordion items to be open at the same time.',
        propName: 'shouldAllowMultipleExpanded',
    }),
    ...boolArg({
        defaultValue: args.shouldAllowZeroExpanded,
        description:
            'When true this will allow users to collapse all the accordion items. Setting to false will prevent the user from collapsing the last remaining expanded item.',
        propName: 'shouldAllowZeroExpanded',
    }),
    ...arrayArg({
        description:
            'An array of accordion item UUIDs that should be expanded by default when the component is first mounted.',
        propName: 'preExpanded',
    }),
    ...funcArg({
        description:
            'Render prop used to render custom content in to the trigger of the accordion.',
        propName: 'renderTrigger',
    }),
    ...funcArg({
        description:
            'Use to override the default trigger icon used to indicate collapsed/expanded state to end users.',
        propName: 'renderTriggerIcon',
    }),
    ...funcArg({
        action: 'change fired',
        defaultValue: '() => Promise.resolve()',
        description:
            'Callback which is called when items are expaned or collapsed. Returns an array of UUIDs for the currently expanded items in the accordion.',
        propName: 'onChange',
    }),
};
