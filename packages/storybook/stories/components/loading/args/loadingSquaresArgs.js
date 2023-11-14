import { LOADING_SQUARES_VARIANTS } from '@driponfleek/bankai-ui-loading';
import { selectArg } from '@driponfleek/bankai-lib-storybook';
import {
    contextClsArgType,
    contextClsArg,
    variantArgType,
} from '../../../../args/sharedArgs';

const { PULSING_WAVE } = LOADING_SQUARES_VARIANTS;

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

export const args = {
    ...contextClsArg,
    variant: PULSING_WAVE,
};

export const argTypes = {
    ...contextClsArgType,
    ...selectArg({
        defaultValue: PULSING_WAVE,
        description: variantArgType.variant.description,
        options: Object.keys(LOADING_SQUARES_VARIANTS).map(
            (VARIANT) => LOADING_SQUARES_VARIANTS[VARIANT],
        ),
        propName: 'variant',
    }),
};
