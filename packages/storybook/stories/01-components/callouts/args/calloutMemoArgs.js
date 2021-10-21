import { CALLOUT_MEMO_VARIANTS } from '@epr0t0type/bankai-ui-callouts';
import { genArgType } from '../../../../utils/argTypesUtils';

// Constants
import {
    CONTROL_TYPE_NAMES,
    CONTROL_TYPES,
} from '../../../../const/controlsConst';
import PROP_TYPES from '../../../../const/reactPropTypesConst';

// Locale
import strings from '../../../../i18n/strings.json';

const { DEFAULT, AFFIRMATIVE, CAUTIONARY, ERROR, INFO } = CALLOUT_MEMO_VARIANTS;

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

const { bankaiUI: locale } = strings;

export const args = {
    variant: DEFAULT,
    msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
        // description: 'Text displayed inside the button.',
        propName: 'title',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        // description: 'Text displayed inside the button.',
        propName: 'msg',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.SELECT],
        defaultValue: DEFAULT,
        description: 'Use to set the component variant.',
        options: [DEFAULT, AFFIRMATIVE, CAUTIONARY, ERROR, INFO],
        propName: 'variant',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        description: `Render function for rendering an icon in the component. ${locale.shared.propDesc.requiresBankaiIcons}`,
        propName: 'renderIcon',
        propType: PROP_TYPES.FUNC,
    }),
};
