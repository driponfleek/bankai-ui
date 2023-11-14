import { boolArg, stringArg, funcArg } from '@driponfleek/bankai-lib-storybook';
import { contextClsArgType, contextClsArg } from '../../../../args/sharedArgs';

export const args = {
    ...contextClsArg,
    text: 'Lorem ipsum dolor sit amet',
    meta: 'Cras vitae tortor quis',
    shouldSwapTextAndMeta: false,
};

export const argTypes = {
    ...contextClsArgType,
    ...stringArg({
        // description: '',
        propName: 'text',
    }),
    ...stringArg({
        description:
            'Additional secondary text displayed inside the List Item. Used to provide additional information and should be used as supportive information to `props.text`.',
        propName: 'meta',
    }),
    ...boolArg({
        defaultValue: 'false',
        description: 'When true will render the meta content before text.',
        propName: 'shouldSwapTextAndMeta',
    }),
    ...funcArg({
        description: 'Use to render UI before list item content.',
        propName: 'renderBefore',
    }),
    ...funcArg({
        description: 'Use to render UI after list item content.',
        propName: 'renderAfter',
    }),
};
