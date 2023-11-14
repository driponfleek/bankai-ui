import { LOADING_DOTS_VARIANTS } from '@driponfleek/bankai-ui-loading';
import { selectArg } from '@driponfleek/bankai-lib-storybook';
import {
    contextClsArgType,
    contextClsArg,
    variantArgType,
} from '../../../../args/sharedArgs';

const { BOUNCE } = LOADING_DOTS_VARIANTS;

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

export const args = {
    ...contextClsArg,
    variant: BOUNCE,
};

export const argTypes = {
    ...contextClsArgType,
    ...selectArg({
        defaultValue: BOUNCE,
        description: variantArgType.variant.description,
        options: Object.keys(LOADING_DOTS_VARIANTS).map(
            (VARIANT) => LOADING_DOTS_VARIANTS[VARIANT],
        ),
        propName: 'variant',
    }),
};
