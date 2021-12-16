import { stringArg, boolArg, funcArg } from '../../../../utils/argTypesUtils';

// Locale
import strings from '../../../../i18n/strings.json';

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

const { bankaiUI: locale } = strings;

export const args = {
    hasError: false,
    isDisabled: false,
    isReadOnly: false,
    shouldAutoFocus: false,
    shouldSpellCheck: false,
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
        description: locale.shared.propDesc.formPlaceholder,
        propName: 'placeholder',
    }),
    ...stringArg({
        description: locale.shared.propDesc.formValue,
        propName: 'value',
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
        defaultValue: 'false',
        description: locale.shared.propDesc.shouldAutoFocus,
        propName: 'shouldAutoFocus',
    }),
    ...boolArg({
        defaultValue: 'false',
        description: locale.shared.propDesc.shouldSpellCheck,
        propName: 'shouldSpellCheck',
    }),
    ...funcArg({
        action: 'change',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onChange',
    }),
};
