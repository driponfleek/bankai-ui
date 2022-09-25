import React from 'react';
import { BankaiUser } from '@epr0t0type/bankai-ui-icons';
import { stringArg, boolArg, arrayArg } from '../../../../utils/argTypesUtils';

// Locale
import strings from '../../../../i18n/strings.json';

// Imgae
import avatar01 from '../../../../media/images/avatars/avatar01.jpg';
// import avatar02 from '../../../../media/images/avatars/avatar02.jpg';
// import avatar03 from '../../../../media/images/avatars/avatar03.jpg';
// import avatar04 from '../../../../media/images/avatars/avatar04.jpg';
import avatar05 from '../../../../media/images/avatars/avatar05.jpg';
// import avatar06 from '../../../../media/images/avatars/avatar06.jpg';
import avatar07 from '../../../../media/images/avatars/avatar07.jpg';
// import avatar08 from '../../../../media/images/avatars/avatar08.jpg';
// import avatar09 from '../../../../media/images/avatars/avatar09.jpg';

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

const { bankaiUI: locale } = strings;
const renderIcon = () => <BankaiUser />;
const baseAvatarProps = {
    hasBorder: true,
};

const avatars = [
    {
        ...baseAvatarProps,
        id: '01',
        imgURL: avatar01,
    },
    {
        ...baseAvatarProps,
        id: '05',
        imgURL: avatar05,
    },
    {
        ...baseAvatarProps,
        id: '06',
        children: 'DY',
    },
    {
        ...baseAvatarProps,
        id: '08',
        imgURL: avatar07,
    },
    {
        ...baseAvatarProps,
        id: '11',
        children: renderIcon(),
    },
];

export const args = {
    // imgURL: avatar,
    // renderIcon: () => <BankaiUser />,
    shouldOverlap: true,
    avatars,
};

export const argTypes = {
    ...stringArg({
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
    }),
    ...boolArg({
        defaultValue: true,
        description: 'Use to overlap avatars.',
        propName: 'shouldOverlap',
    }),
    ...arrayArg({
        defaultValue: [],
        description: 'Array of avatar data passed to the Avatar component.',
        propName: 'avatars',
    }),
};
