import { args as sharedArgs, argTypes as sharedArgTypes } from './sharedArgs';
import { headingLvlArgType } from '../../../../args/sharedArgs';

export const args = {
    ...sharedArgs,
    headingLvl: 2,
};

export const argTypes = {
    ...sharedArgTypes,
    ...headingLvlArgType,
};
