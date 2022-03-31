import {
    // genArgType,
    stringArg,
    boolArg,
    arrayArg,
    funcArg,
} from '../../../../utils/argTypesUtils';

// Locale
import strings from '../../../../i18n/strings.json';

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

const { bankaiUI: locale } = strings;

export const args = {
    emptyStateMsg: 'I have nothing to show for myself.',
    emptyStateTitle: 'I Feel Empty Inside',
    shouldAlternateColors: false,
    data: [...Array.from(Array(4).keys())].map((key) => ({
        id: `li-${key}`,
        text: 'List Item Text',
        meta: 'Meta text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim viverra sapien eu venenatis. Curabitur sit amet malesuada quam, eu iaculis mi.',
    })),
};

export const argTypes = {
    ...stringArg({
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
    }),
    ...stringArg({
        // description: '',
        propName: 'emptyStateMsg',
    }),
    ...stringArg({
        // description: '',
        propName: 'emptyStateTitle',
    }),
    ...boolArg({
        defaultValue: 'false',
        // description: '',
        propName: 'shouldAlternateColors',
    }),
    ...arrayArg({
        defaultValue: [],
        // description: '',
        propName: 'data',
    }),
    ...funcArg({
        description: `Render a custom empty state`,
        propName: 'renderEmptyState',
    }),
    ...funcArg({
        description: 'Render a custom List Item',
        propName: 'renderListItem',
    }),
};
