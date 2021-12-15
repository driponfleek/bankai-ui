import { stringArg, boolArg, funcArg } from '../../../../utils/argTypesUtils';

// Locale
import strings from '../../../../i18n/strings.json';

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

const { bankaiUI: locale } = strings;

export const args = {
    isBusy: false,
    isDisabled: false,
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
        description:
            'If `true` on initial render, the toggle is checked. If `false` on initial render, the toggle is unchecked. Use this if you want to treat the toggle as an uncontrolled component',
        propName: 'isDefaultChecked',
    }),
    ...boolArg({
        defaultValue: 'false',
        description: locale.shared.propDesc.isDisabled,
        propName: 'isDisabled',
    }),
    ...boolArg({
        defaultValue: 'false',
        description: locale.shared.propDesc.isBusy,
        propName: 'isBusy',
    }),
    ...funcArg({
        action: 'change',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onChange',
    }),
    ...funcArg({
        description: `Render function for overriding the default busy icon with a custom one. ${locale.shared.propDesc.requiresBankaiIcons}`,
        propName: 'renderBusyIcon',
    }),
};
