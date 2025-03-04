import cx from 'classnames';
import {
    BankaiCheck,
    BankaiCircleInfo,
    BankaiTriangleAlert,
} from '@driponfleek/bankai-ui-icons';
import { toast } from 'react-toastify';

// Constants
import VARIANTS from '../const/variantsConst';
import POSITIONS from '../const/positionsConst';
import baseCls from '../const/cssBaseClassConst';

const { DEFAULT, ERROR, INFO, SUCCESS, WARNING } = VARIANTS;
const { BOTTOM_RIGHT } = POSITIONS;
const allowedVariants = Object.keys(VARIANTS).map(
    (VARIANT_KEY) => VARIANTS[VARIANT_KEY],
);

export const getContainerProps = (props) => {
    const {
        appElement,
        containerId,
        limit,
        isRTL: rtl,
        shouldPlaceNewestOnTop: newestOnTop,
        toastContainerProps,
    } = props;

    return {
        ...toastContainerProps,
        appElement,
        containerId,
        icon: false,
        limit,
        rtl,
        newestOnTop,
    };
};

export const getToastProps = (props) => {
    const {
        containerId,
        contextCls,
        position,
        variant,
        dragDirection: draggableDirection,
        delay,
        dragToDismissPercent: draggablePercent,
        progress,
        role,
        hasCloseButton,
        isDraggable: draggable,
        shouldCloseOnClick: closeOnClick,
        shouldHideProgressBar: hideProgressBar,
        shouldPauseOnFocusLoss: pauseOnFocusLoss,
        shouldPauseOnHover: pauseOnHover,
        toasterProps,
        autoClose,
        onClick,
        onClose,
        onOpen,
        renderCloseButton,
    } = props;
    const modCls = `${baseCls}--${variant.toLowerCase()}`;

    return {
        ...toasterProps,
        className: cx(baseCls, modCls, contextCls),
        containerId,
        position,
        type: variant,
        draggableDirection,
        role,
        delay,
        draggablePercent,
        progress,
        closeOnClick,
        draggable,
        hideProgressBar,
        pauseOnFocusLoss,
        pauseOnHover,
        closeButton: hasCloseButton ? renderCloseButton() : false,
        autoClose,
        onClick,
        onClose,
        onOpen,
    };
};

export const getValidVariant = (variant) => {
    const isValidVariant = allowedVariants.indexOf(variant) !== -1;

    return isValidVariant ? variant : DEFAULT;
};

export const getDefaultProps = () => ({
    containerId: 'bankai-toast-container',
    dragDirection: 'x',
    position: BOTTOM_RIGHT,
    role: 'alert',
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
    appElement: document.querySelector('body'),
    onClick: () => Promise.resolve(),
    onClose: () => Promise.resolve(),
    onOpen: () => Promise.resolve(),
});

export const getShouldRenderIcon = (props) => {
    const { variant, shouldShowIcon, renderIcon } = props ?? {};
    const isValidVariant = allowedVariants.indexOf(variant) !== -1;

    if (!shouldShowIcon) {
        return false;
    }

    if (!isValidVariant && !renderIcon) {
        return false;
    }

    if (variant === DEFAULT && !renderIcon) {
        return false;
    }

    return true;
};

export const getIcon = (VARIANT) => {
    let StatusIcon;

    switch (VARIANT) {
        case ERROR:
        case WARNING:
            StatusIcon = BankaiTriangleAlert;
            break;
        case INFO:
            StatusIcon = BankaiCircleInfo;
            break;
        case SUCCESS:
            StatusIcon = BankaiCheck;
            break;
        default:
            break;
    }

    return StatusIcon;
};

export const {
    clearWaitingQueue,
    dismiss: dismissToasters,
    done: finishToast,
    isActive: isToasterActive,
} = toast;
