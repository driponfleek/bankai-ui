import {
    stringArg,
    boolArg,
    numberArg,
} from '@driponfleek/bankai-lib-storybook';
import { getLocale } from '../utils/localeUtils';

const variantArgTypesCommon = {
    description: `${getLocale('propDescriptions.variant')}`,
    propName: 'variant',
};

export const ariaLabelArgType = stringArg({
    description: getLocale('propDescriptions.ariaLabel'),
    propName: 'aria-label',
});

export const contextClsArg = {
    contextCls: '',
};

export const contextClsArgType = stringArg({
    description: getLocale('propDescriptions.contextCls'),
    propName: 'contextCls',
});

export const headingLvlArgType = numberArg({
    defaultValue: 2,
    description: getLocale('propDescriptions.headingLvl'),
    propName: 'headingLvl',
    controlOps: {
        min: 1,
        max: 6,
    },
});

export const isBusyArgType = boolArg({
    description: getLocale('propDescriptions.isBusy'),
    propName: 'isBusy',
});

export const isDisabledArgType = boolArg({
    description: getLocale('propDescriptions.isDisabled'),
    propName: 'isDisabled',
});

export const variantDisabledArgType = stringArg({
    ...variantArgTypesCommon,
    shouldDisableControl: true,
});

export const variantArgType = stringArg(variantArgTypesCommon);
