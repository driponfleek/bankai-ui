import { VARIANTS } from '@epr0t0type/bankai-ui-tabs';
import {
    stringArg,
    boolArg,
    selectArg,
    funcArg,
} from '../../../../utils/argTypesUtils';

// Locale
import strings from '../../../../i18n/strings.json';

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

const { bankaiUI: locale } = strings;
const { OVERLINE_SEGMENTED } = VARIANTS;

export const args = {
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
    ...stringArg({
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
    }),
    ...selectArg({
        defaultValue: OVERLINE_SEGMENTED,
        // description: '',
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
