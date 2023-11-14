import { stringArg, boolArg, funcArg } from '@driponfleek/bankai-lib-storybook';
import {
    contextClsArgType,
    contextClsArg,
    headingLvlArgType,
} from '../../../../args/sharedArgs';

export const args = {
    ...contextClsArg,
    headingContent: 'Heading Text',
    headingLvl: 2,
    shouldPadContent: true,
};

export const argTypes = {
    ...contextClsArgType,
    ...stringArg({
        // description: '',
        propName: 'headingContent',
    }),
    ...headingLvlArgType,
    ...boolArg({
        defaultValue: true,
        // description: '',
        propName: 'shouldPadContent',
    }),
    ...funcArg({
        // description: '',
        propName: 'renderHeading',
    }),
};
