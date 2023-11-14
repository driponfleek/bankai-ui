import { FORM_FIELD_COMP_VARIANTS } from '@driponfleek/bankai-ui-form-elements';
import { selectArg } from '@driponfleek/bankai-lib-storybook';
import {
    argTypes as iftalffcArgTypes,
    args as iftalffcArts,
} from './iftalffcArgs';

const { STACKED } = FORM_FIELD_COMP_VARIANTS;

export const args = {
    ...iftalffcArts,
    variant: STACKED,
    // onChange: () => Promise.resolve(),
    // onSelect: () => Promise.resolve(),
    // onToggle: () => Promise.resolve(),
};

export const argTypes = {
    ...iftalffcArgTypes,
    ...selectArg({
        description:
            'Use to control the layout of the form element, label and hints. `TOGGLE` is used for controls like Radios, Checkboxes, Toggle Switches, etc.',
        options: Object.keys(FORM_FIELD_COMP_VARIANTS).map(
            (VARIANT) => FORM_FIELD_COMP_VARIANTS[VARIANT],
        ),
        propName: 'variant',
    }),
};
