import {
    stringArg,
    boolArg,
    objectArg,
    funcArg,
} from '../../../../utils/argTypesUtils';

// Locale
import strings from '../../../../i18n/strings.json';

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

const { bankaiUI: locale } = strings;

export const args = {
    isDisabled: false,
    isChecked: false,
    // onChange: () => Promise.resolve(),
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
    ...stringArg({
        description: locale.shared.propDesc.formName,
        propName: 'name',
    }),
    ...stringArg({
        description: locale.shared.propDesc.formValue,
        propName: 'value',
    }),
    ...boolArg({
        defaultValue: 'false',
        description: locale.shared.propDesc.formError,
        propName: 'isChecked',
    }),
    ...boolArg({
        defaultValue: 'false',
        description: locale.shared.propDesc.isDisabled,
        propName: 'isDisabled',
    }),
    ...objectArg({
        description:
            'Use to pass data back when the onChange handler is called.',
        propName: 'data',
    }),
    ...funcArg({
        action: 'changed',
        defaultValue: '() => Promise.resolve()',
        description:
            'Handler called when the user interacts with the component.',
        propName: 'onChange',
    }),
    ...funcArg({
        description: `Render function for overriding the default checked icon with a custom one. ${locale.shared.propDesc.requiresBankaiIcons}`,
        propName: 'renderCheckedIcon',
    }),
};
