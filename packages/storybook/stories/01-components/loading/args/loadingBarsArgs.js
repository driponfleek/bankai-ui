import { LOADING_BARS_VARIANTS } from '@epr0t0type/bankai-ui-loading';
import { stringArg, selectArg } from '../../../../utils/argTypesUtils';

// Locale
import strings from '../../../../i18n/strings.json';

const { FREQUENCY } = LOADING_BARS_VARIANTS;

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

const { bankaiUI: locale } = strings;

export const args = {
    variant: FREQUENCY,
};

export const argTypes = {
    ...stringArg({
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
    }),
    ...selectArg({
        defaultValue: FREQUENCY,
        description: locale.shared.propDesc.variant,
        options: Object.keys(LOADING_BARS_VARIANTS).map(
            (VARIANT) => LOADING_BARS_VARIANTS[VARIANT],
        ),
        propName: 'variant',
    }),
};
