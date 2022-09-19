import { VARIANTS } from '@epr0t0type/bankai-ui-callouts';
import {
    stringArg,
    selectArg,
    numberArg,
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
    title: "I'm a Callout!",
    msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    headingLvl: 2,
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
    ...numberArg({
        defaultValue: 2,
        // description: getLocale('shared.propDesc.headingLvl'),
        propName: 'headingLvl',
        controlOps: {
            min: 1,
            max: 6,
        },
    }),
    ...selectArg({
        description: locale.shared.propDesc.variant,
        options: [
            undefined,
            ...Object.keys(VARIANTS).map((VARIANT) => VARIANTS[VARIANT]),
        ],
        propName: 'variant',
    }),
    ...funcArg({
        description: `${locale.shared.propDesc.renderIcon} ${locale.shared.propDesc.requiresBankaiIcons}`,
        propName: 'renderIcon',
    }),
};
