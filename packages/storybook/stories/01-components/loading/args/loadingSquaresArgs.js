import { LOADING_SQUARES_VARIANTS } from '@epr0t0type/bankai-ui-loading';
import { genArgType } from '../../../../utils/argTypesUtils';

// Constants
import {
    CONTROL_TYPE_NAMES,
    CONTROL_TYPES,
} from '../../../../const/controlsConst';
import PROP_TYPES from '../../../../const/reactPropTypesConst';

// Locale
import strings from '../../../../i18n/strings.json';

const { PULSING_WAVE } = LOADING_SQUARES_VARIANTS;

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

const { bankaiUI: locale } = strings;

export const args = {
    variant: PULSING_WAVE,
};

export const argTypes = {
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.SELECT],
        defaultValue: PULSING_WAVE,
        description: locale.shared.propDesc.variant,
        options: Object.keys(LOADING_SQUARES_VARIANTS).map(
            (VARIANT) => LOADING_SQUARES_VARIANTS[VARIANT],
        ),
        propName: 'variant',
        propType: PROP_TYPES.STRING,
    }),
};
