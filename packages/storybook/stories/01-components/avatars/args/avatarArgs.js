// import React from 'react';
// import { BankaiUser } from '@epr0t0type/bankai-ui-icons';
import { stringArg, boolArg } from '../../../../utils/argTypesUtils';

// Locale
import strings from '../../../../i18n/strings.json';

// Imgage
import avatar from '../../../../media/images/avatars/avatar07.jpg';

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

const { bankaiUI: locale } = strings;

export const args = {
    imgURL: avatar,
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
    ...boolArg({
        defaultValue: true,
        description: 'Use to add a border to the avatar.',
        propName: 'hasBorder',
    }),
};
