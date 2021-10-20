// import React from 'react';
// import { BankaiUser } from '@epr0t0type/bankai-ui-icons';
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
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        // defaultValue: '',
        description: 'URL to an image to be used in the avatar.',
        propName: 'imgURL',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.TEXT],
        // defaultValue: '',
        // description: '',
        propName: 'text',
        propType: PROP_TYPES.STRING,
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.SELECT],
        defaultValue: AVATAR_VARIANTS.CIRCLE,
        // description: 'Use to set the HTML button type attribute.',
        options: Object.keys(AVATAR_VARIANTS).map(
            (VARIANT_KEY) => AVATAR_VARIANTS[VARIANT_KEY],
        ),
        propName: 'variant',
        propType: 'string',
    }),
    ...genArgType({
        controlType: CONTROL_TYPES[CONTROL_TYPE_NAMES.BOOL],
        defaultValue: true,
        description: 'Use to add a border to the avatar.',
        propName: 'hasBorder',
        propType: PROP_TYPES.BOOL,
    }),
    ...genArgType({
        description: `Render function for rendering an icon in the component. ${locale.shared.propDesc.requiresBankaiIcons}`,
        propName: 'renderIcon',
        propType: PROP_TYPES.FUNC,
    }),
};
