import { getLocale } from '../../../../utils/localeUtils';
import { contextClsArgType, contextClsArg } from '../../../../args/sharedArgs';

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

export const args = {
    ...contextClsArg,
    msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    title: 'Banner',
    headingLvl: 2,
};

export const argTypes = {
    ...contextClsArgType,
    variant: {
        control: false,
        description: `${getLocale(
            'propDescriptions.variant',
        )} When not defined the Default banner is rendered with minimal styling and can be used as a starting point for variants if one of the predefined variants do not fit your use case.`,
    },
    // ...funcArg({
    //     description: '',
    //     propName: 'renderIcon',
    // }),
};
