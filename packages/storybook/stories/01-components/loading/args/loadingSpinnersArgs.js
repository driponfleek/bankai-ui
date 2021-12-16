import { LOADING_SPINNERS_VARIANTS } from '@epr0t0type/bankai-ui-loading';
import { stringArg, selectArg } from '../../../../utils/argTypesUtils';

// Locale
import strings from '../../../../i18n/strings.json';

const { CUBE } = LOADING_SPINNERS_VARIANTS;

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

const { bankaiUI: locale } = strings;

export const args = {
    variant: CUBE,
};

export const argTypes = {
    ...stringArg({
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
    }),
    ...selectArg({
        defaultValue: CUBE,
        description: locale.shared.propDesc.variant,
        options: Object.keys(LOADING_SPINNERS_VARIANTS).map(
            (VARIANT) => LOADING_SPINNERS_VARIANTS[VARIANT],
        ),
        propName: 'variant',
    }),
};
