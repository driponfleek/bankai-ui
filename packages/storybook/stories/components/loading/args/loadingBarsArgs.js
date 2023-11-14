import { LOADING_BARS_VARIANTS } from '@driponfleek/bankai-ui-loading';
import { selectArg } from '@driponfleek/bankai-lib-storybook';
import {
    contextClsArgType,
    contextClsArg,
    variantArgType,
} from '../../../../args/sharedArgs';

const { FREQUENCY } = LOADING_BARS_VARIANTS;

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

export const args = {
    ...contextClsArg,
    variant: FREQUENCY,
};

export const argTypes = {
    ...contextClsArgType,
    ...selectArg({
        defaultValue: FREQUENCY,
        description: variantArgType.variant.description,
        options: Object.keys(LOADING_BARS_VARIANTS).map(
            (VARIANT) => LOADING_BARS_VARIANTS[VARIANT],
        ),
        propName: 'variant',
    }),
};
