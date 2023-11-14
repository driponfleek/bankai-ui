import {
    funcArg,
    stringArg,
    selectArg,
    boolArg,
} from '@driponfleek/bankai-lib-storybook';
import { getLocale } from '../../../../utils/localeUtils';
import {
    ariaLabelArgType,
    contextClsArgType,
    contextClsArg,
    isBusyArgType,
    isDisabledArgType,
    variantDisabledArgType,
} from '../../../../args/sharedArgs';

export const args = {
    ...contextClsArg,
    text: 'Button Text',
    type: 'button',
    isBusy: false,
    isDisabled: false,
    isDynamicText: false,
};

const evtHandlerWhenFauxDisabled =
    "Passes back an object containing the native event and anything that was passed to 'props.data'. When the component is disabled or busy the event handler is not called to keep the behavior aligned with the native implementation of the disabled component.";

export const argTypes = {
    'aria-label': {
        ...ariaLabelArgType['aria-label'],
        description: `${ariaLabelArgType['aria-label'].description} Please note that accessibility requirements require that button text describe what happens when the button is clicked, therefore when props.text is defined we will ignore this attribute to enforce best practice so that users that can see the text get the same context that users who use this attribute would get.`,
    },
    ...contextClsArgType,
    ...stringArg({
        description:
            'Useful when you want to pass data back to the consumer of the button via the props.onClick handler ',
        propName: 'data',
    }),
    ...isBusyArgType,
    ...isDisabledArgType,
    ...selectArg({
        description:
            "Use to set the HTML button type attribute. Can be either 'submit' or 'button'. Defaults to 'button'.",
        options: ['button', 'submit'],
        propName: 'type',
    }),
    variant: {
        ...variantDisabledArgType.variant,
        description: `${variantDisabledArgType.variant.description} When not defined the Default button is rendered with minimal styling and can be used as a starting point for a new button variant if one of the predefined variants do not fit your use case.`,
    },
    ...funcArg({
        description: `${getLocale(
            'propDescriptions.onBlur',
        )} ${evtHandlerWhenFauxDisabled}`,
        propName: 'onBlur',
    }),
    ...funcArg({
        description: `${getLocale(
            'propDescriptions.onClick',
        )} ${evtHandlerWhenFauxDisabled}`,
        propName: 'onClick',
    }),
    ...funcArg({
        description: `${getLocale(
            'propDescriptions.onFocus',
        )} ${evtHandlerWhenFauxDisabled}`,
        propName: 'onFocus',
    }),
};

export const destructiveArgs = {
    ...args,
    isDestructive: false,
};

export const destructiveArgTypes = {
    ...argTypes,
    ...boolArg({
        // description: '',
        propName: 'isDestructive',
    }),
};
