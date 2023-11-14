import { funcArg, boolArg } from '@driponfleek/bankai-lib-storybook';
import {
    contextClsArgType,
    contextClsArg,
    headingLvlArgType,
} from '../../../../args/sharedArgs';

export const args = {
    ...contextClsArg,
    headingLvl: 2,
    shouldAllowMultipleExpanded: false,
    shouldAllowZeroExpanded: true,
    // onChange: () => Promise.resolve(),
};

export const argTypes = {
    ...contextClsArgType,
    ...headingLvlArgType,
    ...boolArg({
        // description: '',
        propName: 'shouldAllowMultipleExpanded',
    }),
    ...boolArg({
        // description: '',
        propName: 'shouldAllowZeroExpanded',
    }),
    ...funcArg({
        // description: '',
        propName: 'renderTrigger',
    }),
    ...funcArg({
        // description: '',
        propName: 'renderTriggerIcon',
    }),
};
