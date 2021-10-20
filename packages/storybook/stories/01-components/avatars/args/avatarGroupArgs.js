import React from 'react';
import { BankaiUser } from '@epr0t0type/bankai-ui-icons';
import { AVATAR_VARIANTS } from '@epr0t0type/bankai-ui-avatars';
import { genArgType } from '../../../../utils/argTypesUtils';

// Constants
import {
    CONTROL_TYPE_NAMES,
    CONTROL_TYPES,
} from '../../../../const/controlsConst';
import PROP_TYPES from '../../../../const/reactPropTypesConst';

// Locale
import strings from '../../../../i18n/strings.json';

// Imgae
import avatar01 from '../../../../media/images/avatars/avatar01.jpg';
import avatar02 from '../../../../media/images/avatars/avatar02.jpg';
import avatar03 from '../../../../media/images/avatars/avatar03.jpg';
import avatar04 from '../../../../media/images/avatars/avatar04.jpg';
import avatar05 from '../../../../media/images/avatars/avatar05.jpg';
import avatar06 from '../../../../media/images/avatars/avatar06.jpg';
import avatar07 from '../../../../media/images/avatars/avatar07.jpg';
import avatar08 from '../../../../media/images/avatars/avatar08.jpg';
import avatar09 from '../../../../media/images/avatars/avatar09.jpg';

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
        id: '02',
        imgURL: avatar02,
    },
    {
        ...baseAvatarProps,
        id: '03',
        imgURL: avatar03,
    },
    {
        ...baseAvatarProps,
        id: '04',
        imgURL: avatar04,
    },
    {
        ...baseAvatarProps,
        id: '05',
        imgURL: avatar05,
    },
    {
        ...baseAvatarProps,
        id: '06',
        text: 'DY',
    },
    {
        ...baseAvatarProps,
        id: '07',
        imgURL: avatar06,
    },
    {
        ...baseAvatarProps,
        id: '08',
        imgURL: avatar07,
    },
    {
        ...baseAvatarProps,
        id: '09',
        imgURL: avatar08,
    },
    {
        ...baseAvatarProps,
        id: '10',
        imgURL: avatar09,
    },
    {
        ...baseAvatarProps,
        id: '11',
        renderIcon,
    },
];

export const args = {
    // imgURL: avatar,
    // renderIcon: () => <BankaiUser />,
    shouldOverlap: true,
    avatars,
};

export const argTypes = {
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: true,
        description: 'Use to overlap avatars.',
        propName: 'shouldOverlap',
        propType: PROP_TYPES.BOOL,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.ARRAY],
        defaultValue: [],
        description: 'Array of avatar data passed to the Avatar component.',
        propName: 'avatars',
        propType: PROP_TYPES.ARRAY,
    }),
};
