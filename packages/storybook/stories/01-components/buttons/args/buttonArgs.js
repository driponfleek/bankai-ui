import { VARIANTS } from '@epr0t0type/bankai-ui-buttons';
import {
    stringArg,
    boolArg,
    selectArg,
    objectArg,
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
    text: 'Button Text',
    type: 'button',
    isBusy: false,
    isDisabled: false,
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
    ...selectArg({
        defaultValue: 'button',
        description: 'Use to set the HTML button type attribute.',
        options: ['button', 'submit'],
        propName: 'type',
    }),
    ...selectArg({
        description: locale.shared.propDesc.variant,
        options: [
            undefined,
            ...Object.keys(VARIANTS).map((VARIANT) => VARIANTS[VARIANT]),
        ],
        propName: 'variant',
    }),
    ...boolArg({
        defaultValue: 'false',
        description:
            'Use to render a busy state for the component when the UI needs time to perform an action triggerd by a user interaction with the component.',
        propName: 'isBusy',
    }),
    ...boolArg({
        defaultValue: 'false',
        description: locale.shared.propDesc.isDisabled,
        propName: 'isDisabled',
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
    ...funcArg({
        description:
            'Render function for overriding the default busy icon with a custom one.',
        propName: 'renderBusyIcon',
    }),
};
