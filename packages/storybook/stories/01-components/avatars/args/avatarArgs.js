// import React from 'react';
// import { BankaiUser } from '@epr0t0type/bankai-ui-icons';
import { VARIANTS } from '@epr0t0type/bankai-ui-avatars';
import {
    stringArg,
    boolArg,
    selectArg,
    funcArg,
} from '../../../../utils/argTypesUtils';

// Locale
import strings from '../../../../i18n/strings.json';

// Imgae
// import avatar from '../../../../media/images/avatars/avatar07.jpg';

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

const { bankaiUI: locale } = strings;

export const args = {
    // imgURL: avatar,
    // renderIcon: () => <BankaiUser />,
    text: 'DY',
    hasBorder: true,
};

export const argTypes = {
    ...stringArg({
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
    }),
    ...stringArg({
        description: 'URL to an image to be used in the avatar.',
        propName: 'imgURL',
    }),
    ...stringArg({
        // description: '',
        propName: 'text',
    }),
    ...selectArg({
        defaultValue: VARIANTS.CIRCLE,
        description: locale.shared.propDesc.variant,
        options: Object.keys(VARIANTS).map(
            (VARIANT_KEY) => VARIANTS[VARIANT_KEY],
        ),
        propName: 'variant',
    }),
    ...boolArg({
        defaultValue: true,
        description: 'Use to add a border to the avatar.',
        propName: 'hasBorder',
    }),
    ...funcArg({
        description: `${locale.shared.propDesc.renderIcon} ${locale.shared.propDesc.requiresBankaiIcons}`,
        propName: 'renderIcon',
    }),
};
