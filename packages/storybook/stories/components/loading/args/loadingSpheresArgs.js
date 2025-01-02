import { LOADING_SPHERES_VARIANTS } from '@driponfleek/bankai-ui-loading';
import { selectArg } from '@driponfleek/bankai-lib-storybook';
import {
    contextClsArgType,
    contextClsArg,
    variantArgType,
} from '../../../../args/sharedArgs';

const { RIPPLES } = LOADING_SPHERES_VARIANTS;

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

export const args = {
    ...contextClsArg,
    variant: RIPPLES,
};

export const argTypes = {
    ...contextClsArgType,
    ...selectArg({
        defaultValue: RIPPLES,
        description: variantArgType.variant.description,
        options: Object.keys(LOADING_SPHERES_VARIANTS).map(
            (VARIANT) => LOADING_SPHERES_VARIANTS[VARIANT],
        ),
        propName: 'variant',
    }),
};
