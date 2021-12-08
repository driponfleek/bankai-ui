import { VARIANTS } from '@epr0t0type/bankai-ui-buttons';
import { genArgType } from '../../../../utils/argTypesUtils';
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
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        description:
            'Used to describe the menu button to users using assistive technologies such as screen readers.',
        isRequired: true,
        propName: 'menuButtonARIALabel',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.SELECT],
        description: 'Use to set the component variant.',
        options: Object.keys(VARIANTS).map((VARIANT) => VARIANTS[VARIANT]),
        propName: 'variant',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        description:
            'Use to disable the main button and the menu button. To disable these buttons individually, see `mainButtonProps` and `menuButtonProps`.',
        propName: 'isDisabled',
        propType: PROP_TYPES.BOOL,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.ARRAY],
        // description: '',
        propName: 'menuOptions',
        propType: PROP_TYPES.ARRAY,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.OBJ],
        defaultValue: true,
        // description: '',
        propName: 'mainButtonProps',
        propType: PROP_TYPES.SHAPE,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.OBJ],
        defaultValue: true,
        // description: '',
        propName: 'menuButtonProps',
        propType: PROP_TYPES.SHAPE,
    }),
    ...genArgType({
        action: 'main button clicked',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onMainButtonClick',
        propType: PROP_TYPES.FUNC,
    }),
    ...genArgType({
        action: 'menu toggled',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onMenuToggle',
        propType: PROP_TYPES.FUNC,
    }),
    ...genArgType({
        action: 'menu toggled',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onSelection',
        propType: PROP_TYPES.FUNC,
    }),
    ...genArgType({
        // description: '',
        propName: 'renderMainButton',
        propType: PROP_TYPES.FUNC,
    }),
    ...genArgType({
        description: `Render function for rendering an icon in the main button. ${locale.shared.propDesc.requiresBankaiIcons}`,
        propName: 'renderMainButtonIcon',
        propType: PROP_TYPES.FUNC,
    }),
    ...genArgType({
        description: `Render function for rendering an icon in the menu button. ${locale.shared.propDesc.requiresBankaiIcons}`,
        propName: 'renderMenuButtonIcon',
        propType: PROP_TYPES.FUNC,
    }),
    ...genArgType({
        // description: ``,
        propName: 'renderMenuOption',
        propType: PROP_TYPES.FUNC,
    }),
};
