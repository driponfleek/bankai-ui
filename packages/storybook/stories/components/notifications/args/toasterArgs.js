import {
    TOASTER_POSITIONS,
    TOASTER_VARIANTS,
} from '@driponfleek/bankai-ui-notifications';
import { selectArg, funcArg } from '@driponfleek/bankai-lib-storybook';
import {
    contextClsArgType,
    contextClsArg,
    variantArgType,
} from '../../../../args/sharedArgs';

const { DEFAULT } = TOASTER_VARIANTS;
const { BOTTOM_RIGHT } = TOASTER_POSITIONS;

export const args = {
    ...contextClsArg,
    appNodeId: 'root',
    closeBtnARIALabel: 'Close Toaster',
    containerId: 'bankai-toast-container',
    dragDirection: 'x',
    message: "I'm a toaster. See me toast!",
    position: BOTTOM_RIGHT,
    role: 'alert',
    title: 'Toaster Title',
    variant: DEFAULT,
    autoClose: 6000,
    dragToDismissPercent: 80,
    hasCloseButton: true,
    isDraggable: false,
    isRTL: false,
    shouldCloseOnClick: false,
    shouldHideProgressBar: false,
    shouldPauseOnFocusLoss: false,
    shouldPauseOnHover: false,
    shouldPlaceNewestOnTop: true,
    shouldShowIcon: true,
    // onClick: () => Promise.resolve(),
    // onClose: () => Promise.resolve(),
    // onOpen: () => Promise.resolve(),
};

export const argTypes = {
    ...contextClsArgType,
    ...selectArg({
        defaultValue: DEFAULT,
        description: variantArgType.variant.description,
        options: Object.keys(TOASTER_VARIANTS).map(
            (VARIANT) => TOASTER_VARIANTS[VARIANT],
        ),
        propName: 'variant',
    }),
    ...funcArg({
        action: 'clicked',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onClick',
    }),
    ...funcArg({
        action: 'closed',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onClose',
    }),
    ...funcArg({
        action: 'opened',
        defaultValue: '() => Promise.resolve()',
        // description: '',
        propName: 'onOpen',
    }),
};
