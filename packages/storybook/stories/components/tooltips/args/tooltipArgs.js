import { POSITIONS, TRIGGERS } from '@driponfleek/bankai-ui-tooltips';
import {
    stringArg,
    // boolArg,
    // arrayArg,
    // numberArg,
    selectArg,
    // objectArg,
    funcArg,
} from '@driponfleek/bankai-lib-storybook';
import { contextClsArgType, contextClsArg } from '../../../../args/sharedArgs';

export const args = {
    ...contextClsArg,
    ariaLabel: 'Hover me to see something!',
    position: POSITIONS.TOP,
    trigger: `${TRIGGERS.MOUSE_ENTER} ${TRIGGERS.FOCUS}`,
    delay: 0,
    duration: [300, 250],
    offset: [0, 10],
    isDisabled: false,
    isInteractive: false,
    sticky: false,
    touch: true,
    shouldEnableInertia: false,
    shouldEnableInlinePositioning: false,
    shouldHideOnClick: false,
    shouldShowOnCreate: false,
    // onHide: () => Promise.resolve,
    // onHidden: () => Promise.resolve,
    // onRequestClose: () => Promise.resolve,
    // onShow: () => Promise.resolve,
    // onShown: () => Promise.resolve,
};

export const argTypes = {
    ...contextClsArgType,
    ...selectArg({
        defaultValue: POSITIONS.TOP,
        // description: getLocale(''),
        options: Object.keys(POSITIONS).map((POSITION) => POSITIONS[POSITION]),
        propName: 'position',
    }),
    ...selectArg({
        defaultValue: `${TRIGGERS.MOUSE_ENTER} ${TRIGGERS.FOCUS}`,
        // description: getLocale(''),
        options: [
            `${TRIGGERS.MOUSE_ENTER} ${TRIGGERS.FOCUS}`,
            ...Object.keys(TRIGGERS).map((TRIGGER) => TRIGGERS[TRIGGER]),
        ],
        propName: 'trigger',
    }),
    ...stringArg({
        // description: getLocale('shared.propDesc.contextCls'),
        propName: 'ttContextCls',
    }),
    ...funcArg({
        action: 'after update',
        defaultValue: '() => Promise.resolve()',
        // description: getLocale(''),
        propName: 'onAfterUpdate',
    }),
    ...funcArg({
        action: 'before update',
        defaultValue: '() => Promise.resolve()',
        // description: getLocale(''),
        propName: 'onBeforeUpdate',
    }),
    ...funcArg({
        action: 'click outside',
        defaultValue: '() => Promise.resolve()',
        // description: getLocale(''),
        propName: 'onClickOutside',
    }),
    ...funcArg({
        action: 'create',
        defaultValue: '() => Promise.resolve()',
        // description: getLocale(''),
        propName: 'onCreate',
    }),
    ...funcArg({
        action: 'destroy',
        defaultValue: '() => Promise.resolve()',
        // description: getLocale(''),
        propName: 'onDestroy',
    }),
    ...funcArg({
        action: 'hide',
        defaultValue: '() => Promise.resolve()',
        // description: getLocale(''),
        propName: 'onHide',
    }),
    ...funcArg({
        action: 'hidden',
        defaultValue: '() => Promise.resolve()',
        // description: getLocale(''),
        propName: 'onHidden',
    }),
    ...funcArg({
        action: 'mount',
        defaultValue: '() => Promise.resolve()',
        // description: getLocale(''),
        propName: 'onMount',
    }),
    ...funcArg({
        action: 'show',
        defaultValue: '() => Promise.resolve()',
        // description: getLocale(''),
        propName: 'onShow',
    }),
    ...funcArg({
        action: 'shown',
        defaultValue: '() => Promise.resolve()',
        // description: getLocale(''),
        propName: 'onShown',
    }),
    ...funcArg({
        action: 'trigger',
        defaultValue: '() => Promise.resolve()',
        // description: getLocale(''),
        propName: 'onTrigger',
    }),
    ...funcArg({
        action: 'untrigger',
        defaultValue: '() => Promise.resolve()',
        // description: getLocale(''),
        propName: 'onUntrigger',
    }),
};
