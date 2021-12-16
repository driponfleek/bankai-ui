import { VARIANTS } from '@epr0t0type/bankai-ui-badges';
import { stringArg, selectArg } from '../../../../utils/argTypesUtils';

// Locale
import strings from '../../../../i18n/strings.json';

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

const { bankaiUI: locale } = strings;

export const args = {};

export const argTypes = {
    ...stringArg({
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
    }),
    ...selectArg({
        description: locale.shared.propDesc.variant,
        options: [
            undefined,
            ...Object.keys(VARIANTS).map((VARIANT) => VARIANTS[VARIANT]),
        ],
        propName: 'variant',
    }),
};
