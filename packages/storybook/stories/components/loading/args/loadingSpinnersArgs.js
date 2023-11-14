import { LOADING_SPINNERS_VARIANTS } from '@driponfleek/bankai-ui-loading';
import { selectArg } from '@driponfleek/bankai-lib-storybook';
import {
    contextClsArgType,
    contextClsArg,
    variantArgType,
} from '../../../../args/sharedArgs';

const { CUBE } = LOADING_SPINNERS_VARIANTS;

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

export const args = {
    ...contextClsArg,
    variant: CUBE,
};

export const argTypes = {
    ...contextClsArgType,
    ...selectArg({
        defaultValue: CUBE,
        description: variantArgType.variant.description,
        options: Object.keys(LOADING_SPINNERS_VARIANTS).map(
            (VARIANT) => LOADING_SPINNERS_VARIANTS[VARIANT],
        ),
        propName: 'variant',
    }),
};
