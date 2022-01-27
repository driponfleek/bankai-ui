import { stringArg, numberArg } from '../../../../utils/argTypesUtils';

// Locale
import strings from '../../../../i18n/strings.json';

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

const { bankaiUI: locale } = strings;

export const args = {
    headingLvl: 2,
};

export const argTypes = {
    ...stringArg({
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
    }),
    ...numberArg({
        defaultValue: 2,
        description: locale.shared.propDesc.headingLvl,
        propName: 'headingLvl',
        controlOps: {
            min: 1,
            max: 6,
        },
    }),
};
