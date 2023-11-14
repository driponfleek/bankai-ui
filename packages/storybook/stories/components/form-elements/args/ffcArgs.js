import { FORM_FIELD_COMP_VARIANTS } from '@driponfleek/bankai-ui-form-elements';
import { selectArg } from '@driponfleek/bankai-lib-storybook';
import {
    argTypes as sharedFFCArgTypes,
    args as sharedFFCArgs,
} from './sharedFFCArgs';

const { STACKED } = FORM_FIELD_COMP_VARIANTS;

export const args = {
    ...sharedFFCArgs,
    variant: STACKED,
    // onChange: () => Promise.resolve(),
    // onSelect: () => Promise.resolve(),
    // onToggle: () => Promise.resolve(),
};

export const argTypes = {
    ...sharedFFCArgTypes,
    ...selectArg({
        description:
            'Use to control the layout of the form element, label and hints. `INLINE_RIGHT` is used for controls like Radios, Checkboxes, Toggle Switches, etc.',
        options: Object.keys(FORM_FIELD_COMP_VARIANTS).map(
            (VARIANT) => FORM_FIELD_COMP_VARIANTS[VARIANT],
        ),
        propName: 'variant',
    }),
};
