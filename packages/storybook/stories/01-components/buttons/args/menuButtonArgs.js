import React from 'react';
import { BankaiCaretDown } from '@epr0t0type/bankai-ui-icons';
import { VARIANTS } from '@epr0t0type/bankai-ui-buttons';
import {
    stringArg,
    boolArg,
    selectArg,
    arrayArg,
    objectArg,
    funcArg,
} from '../../../../utils/argTypesUtils';
import demoOptions from '../mocks/menuButtonMocks';

// Locale
import strings from '../../../../i18n/strings.json';

// Reference:
// https://storybook.js.org/docs/react/essentials/controls
// https://storybook.js.org/docs/react/essentials/actions
// https://storybook.js.org/docs/react/api/argtypes

const { bankaiUI: locale } = strings;
const renderIcon = () => <BankaiCaretDown />;

export const args = {
    text: 'Menu',
    isDisabled: false,
    shouldCloseOnBlur: true,
    shouldCloseOnSelection: true,
    menuOptions: demoOptions,
    renderIcon,
    // onSelection: () => Promise.resolve(),
    // onMenuToggle: () => Promise.resolve(),
};

export const argTypes = {
    ...stringArg({
        // description: locale.shared.propDesc.contextCls,
        propName: 'btnContextCls',
    }),
    ...stringArg({
        description: locale.shared.propDesc.contextCls,
        propName: 'contextCls',
    }),
    ...stringArg({
        description: 'Text displayed inside the button.',
        propName: 'text',
    }),
    ...selectArg({
        description: locale.shared.propDesc.variant,
        options: [
            undefined,
            ...Object.keys(VARIANTS).map((VARIANT) => VARIANTS[VARIANT]),
        ],
        propName: 'variant',
    }),
    ...boolArg({
        defaultValue: 'false',
        description: locale.shared.propDesc.isDisabled,
        propName: 'isDisabled',
    }),
    ...boolArg({
        defaultValue: true,
        // description: '',
        propName: 'shouldCloseOnBlur',
    }),
    ...boolArg({
        defaultValue: true,
        // description: '',
        propName: 'shouldCloseOnSelection',
    }),
    ...objectArg({
        // description: '',
        propName: 'menuProps',
    }),
    ...objectArg({
        // description: '',
        propName: 'wrapperProps',
    }),
    ...arrayArg({
        // description: '',
        propName: 'menuOptions',
    }),
    ...funcArg({
        action: 'selected',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onSelection',
    }),
    ...funcArg({
        action: 'menu toggled',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onMenuToggle',
    }),
    ...funcArg({
        description: `${locale.shared.propDesc.renderIcon} ${locale.shared.propDesc.requiresBankaiIcons}`,
        propName: 'renderIcon',
    }),
    ...funcArg({
        // description: ``,
        propName: 'renderMenuOption',
    }),
};
