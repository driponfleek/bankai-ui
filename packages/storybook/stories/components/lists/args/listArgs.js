import {
    boolArg,
    funcArg,
    arrayArg,
    objectArg,
} from '@driponfleek/bankai-lib-storybook';
import { contextClsArgType, contextClsArg } from '../../../../args/sharedArgs';

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

export const args = {
    ...contextClsArg,
    emptyStateProps: {
        msg: 'I have nothing to show for myself.',
        title: 'I Feel Empty Inside',
    },
    shouldAlternateColors: false,
    data: [...Array.from(Array(4).keys())].map((key) => ({
        id: `li-${key}`,
        text: 'Lorem ipsum dolor sit amet',
        meta: 'Cras vitae tortor quis lorem hendrerit lobortis ut vel massa',
    })),
};

export const argTypes = {
    ...contextClsArgType,
    ...objectArg({
        // description: '',
        propName: 'emptyStateProps',
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
        // description: `Render a custom empty state`,
        propName: 'renderEmptyState',
    }),
    ...funcArg({
        // description: 'Render a custom List Item',
        propName: 'renderListItem',
    }),
};
