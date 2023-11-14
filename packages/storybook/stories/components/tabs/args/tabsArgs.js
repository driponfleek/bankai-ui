import { VARIANTS } from '@driponfleek/bankai-ui-tabs';
import {
    stringArg,
    boolArg,
    selectArg,
    funcArg,
} from '@driponfleek/bankai-lib-storybook';
import {
    contextClsArgType,
    contextClsArg,
    variantArgType,
} from '../../../../args/sharedArgs';

const { OVERLINE_SEGMENTED } = VARIANTS;

export const args = {
    ...contextClsArg,
    variant: OVERLINE_SEGMENTED,
    hasMicrointeractions: true,
    isVerticalTabs: false,
    shouldAllowLetterNavigation: false,
    // onChange: () => Promise.resolve(),
};

export const argTypes = {
    ...stringArg({
        // description: '',
        propName: 'activeTabId',
    }),
    ...contextClsArgType,
    ...selectArg({
        defaultValue: OVERLINE_SEGMENTED,
        description: variantArgType.variant.description,
        options: Object.keys(VARIANTS).map(
            (VARIANT_KEY) => VARIANTS[VARIANT_KEY],
        ),
        propName: 'variant',
    }),
    ...boolArg({
        defaultValue: true,
        // description: '',
        propName: 'hasMicrointeractions',
    }),
    ...boolArg({
        defaultValue: 'false',
        // description: '',
        propName: 'isVerticalTabs',
    }),
    ...boolArg({
        defaultValue: 'false',
        // description: '',
        propName: 'shouldAllowLetterNavigation',
    }),
    ...funcArg({
        action: 'change',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onChange',
    }),
    ...funcArg({
        // description: '',
        propName: 'renderTab',
    }),
};
