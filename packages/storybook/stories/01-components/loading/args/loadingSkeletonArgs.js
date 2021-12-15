import { stringArg, boolArg } from '../../../../utils/argTypesUtils';

// Locale
import strings from '../../../../i18n/strings.json';

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

const { bankaiUI: locale } = strings;

export const args = {
    title: 'Loading',
    msg: 'Please wait...',
};

export const argTypes = {
    ...stringArg({
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
    }),
    ...stringArg({
        // description: '',
        propName: 'title',
    }),
    ...stringArg({
        // description: '',
        propName: 'msg',
    }),
    ...boolArg({
        defaultValue: 'false',
        // description: '',
        propName: 'isSpan',
    }),
};
