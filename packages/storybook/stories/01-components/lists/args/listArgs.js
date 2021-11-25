import { genArgType } from '../../../../utils/argTypesUtils';

// Constants
import {
    CONTROL_TYPE_NAMES,
    CONTROL_TYPES,
} from '../../../../const/controlsConst';
import PROP_TYPES from '../../../../const/reactPropTypesConst';

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
    data: [...Array(4).keys()].map((key) => ({
        id: `li-${key}`,
        text: 'List Item Text',
        meta:
            'Meta text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim viverra sapien eu venenatis. Curabitur sit amet malesuada quam, eu iaculis mi.',
    })),
};

export const argTypes = {
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        // description: '',
        propName: 'emptyStateMsg',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        description: 'Text displayed inside the button',
        propName: 'emptyStateTitle',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: 'false',
        // description: '',
        propName: 'shouldAlternateColors',
        propType: PROP_TYPES.BOOL,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.ARRAY],
        defaultValue: [],
        // description: '',
        propName: 'data',
        propType: PROP_TYPES.ARRAY,
    }),
    ...genArgType({
        description: `Render a custom empty state`,
        propName: 'renderEmptyState',
        propType: PROP_TYPES.FUNC,
    }),
    ...genArgType({
        description: 'Render a custom List Item',
        propName: 'renderListItem',
        propType: PROP_TYPES.FUNC,
    }),
};
