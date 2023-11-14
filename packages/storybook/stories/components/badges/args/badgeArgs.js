/* eslint-disable import/prefer-default-export */
import {
    contextClsArgType,
    variantDisabledArgType,
} from '../../../../args/sharedArgs';

export const argTypes = {
    ...contextClsArgType,
    variant: {
        ...variantDisabledArgType.variant,
        description: `${variantDisabledArgType.variant.description} When not defined the Default badge is rendered with minimal styling and can be used as a starting point for a new badge variant if one of the predefined variants do not fit your use case.`,
    },
};
