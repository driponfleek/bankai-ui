import { VARIANTS } from '@epr0t0type/bankai-ui-buttons';
import {
    stringArg,
    boolArg,
    selectArg,
    arrayArg,
    shapeArg,
    funcArg,
} from '../../../../utils/argTypesUtils';
import demoOptions from '../mocks/menuButtonMocks';

// Constants
import {
    CONTROL_TYPE_NAMES,
    CONTROL_TYPES,
} from '../../../../const/controlsConst';
import PROP_TYPES from '../../../../const/reactPropTypesConst';

// Locale
import strings from '../../../../i18n/strings.json';

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

const { bankaiUI: locale } = strings;

export const args = {
    isDisabled: false,
    menuButtonARIALabel: 'More Options',
    menuOptions: demoOptions,
    mainButtonProps: {
        text: 'Main Action',
        isDisabled: false,
    },
    menuButtonProps: {
        isDisabled: false,
    },
    // onMainButtonClick: () => Promise.resolve(),
    // onMenuToggle: () => Promise.resolve(),
    // onSelection: () => Promise.resolve(),
};

export const argTypes = {
    ...stringArg({
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
    }),
    ...stringArg({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        description:
            'Used to describe the menu button to users using assistive technologies such as screen readers.',
        isRequired: true,
        propName: 'menuButtonARIALabel',
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
            'Use to disable the main button and the menu button. To disable these buttons individually, see `mainButtonProps` and `menuButtonProps`.',
        propName: 'isDisabled',
    }),
    ...arrayArg({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.ARRAY],
        // description: '',
        propName: 'menuOptions',
        propType: PROP_TYPES.ARRAY,
    }),
    ...shapeArg({
        defaultValue: true,
        // description: '',
        propName: 'mainButtonProps',
    }),
    ...shapeArg({
        defaultValue: true,
        // description: '',
        propName: 'menuButtonProps',
    }),
    ...funcArg({
        action: 'main button clicked',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onMainButtonClick',
    }),
    ...funcArg({
        action: 'menu toggled',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onMenuToggle',
    }),
    ...funcArg({
        action: 'menu toggled',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onSelection',
    }),
    ...funcArg({
        // description: '',
        propName: 'renderMainButton',
    }),
    ...funcArg({
        description: `Render function for rendering an icon in the main button. ${locale.shared.propDesc.requiresBankaiIcons}`,
        propName: 'renderMainButtonIcon',
    }),
    ...funcArg({
        description: `Render function for rendering an icon in the menu button. ${locale.shared.propDesc.requiresBankaiIcons}`,
        propName: 'renderMenuButtonIcon',
    }),
    ...funcArg({
        // description: ``,
        propName: 'renderMenuOption',
    }),
};
