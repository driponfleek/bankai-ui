import { FORM_FIELD_COMP_VARIANTS } from '@epr0t0type/bankai-ui-form-elements';
import {
    stringArg,
    boolArg,
    selectArg,
    objectArg,
} from '../../../../utils/argTypesUtils';

// Locale
import strings from '../../../../i18n/strings.json';

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

const { bankaiUI: locale } = strings;
const { STACKED } = FORM_FIELD_COMP_VARIANTS;

export const args = {
    variant: STACKED,
    hasError: false,
    isDisabled: false,
    isReadOnly: false,
    shouldIncludeError: true,
    shouldIncludeHint: true,
    // errorProps: {
    //     errorText: 'Something is wrong!',
    // },
    hintProps: {
        hintText: 'Here is a hint.',
    },
    labelProps: {
        labelText: 'Label Text',
    },
    labelSubtextProps: {
        subtext: 'Lorem ipsum dolor sit amet.',
    },
};

export const argTypes = {
    ...stringArg({
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
    }),
    ...stringArg({
        description: locale.shared.propDesc.formId,
        propName: 'id',
    }),
    ...selectArg({
        defaultValue: STACKED,
        description:
            'Use to control the layout of the form element, label and hints. `TOGGLE` is used for controls like Radios, Checkboxes, Toggle Switches, etc.',
        options: Object.keys(FORM_FIELD_COMP_VARIANTS).map(
            (VARIANT) => FORM_FIELD_COMP_VARIANTS[VARIANT],
        ),
        propName: 'variant',
    }),
    ...boolArg({
        defaultValue: 'false',
        description: locale.shared.propDesc.formError,
        propName: 'hasError',
    }),
    ...boolArg({
        defaultValue: 'false',
        description: locale.shared.propDesc.isDisabled,
        propName: 'isDisabled',
    }),
    ...boolArg({
        defaultValue: 'false',
        description: locale.shared.propDesc.formIsReadOnly,
        propName: 'isReadOnly',
    }),
    ...boolArg({
        defaultValue: true,
        // description: '',
        propName: 'shouldIncludeError',
    }),
    ...boolArg({
        defaultValue: true,
        // description: '',
        propName: 'shouldIncludeHint',
    }),
    ...objectArg({
        // description: '',
        propName: 'errorProps',
    }),
    ...objectArg({
        // description: '',
        propName: 'hintProps',
    }),
    ...objectArg({
        // description: '',
        propName: 'labelProps',
    }),
    ...objectArg({
        // description: '',
        propName: 'labelSubtextProps',
    }),
};
