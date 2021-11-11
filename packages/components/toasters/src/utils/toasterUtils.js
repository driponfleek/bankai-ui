import cx from 'classnames';
import { toast } from 'react-toastify';

// Constants
import VARIANTS from '../const/variantsConst';
import POSITIONS from '../const/positionsConst';
import baseCls from '../const/cssBaseClassConst';

const { DEFAULT } = VARIANTS;
const { BOTTOM_RIGHT } = POSITIONS;
const allowedVariants = Object.keys(VARIANTS).map(
    (VARIANT_KEY) => VARIANTS[VARIANT_KEY],
);

export const getContainerProps = (props) => {
    const {
        appNodeId,
        containerId,
        limit,
        isRTL: rtl,
        shouldPlaceNewestOnTop: newestOnTop,
        toastContainerProps,
    } = props;

    return {
        ...toastContainerProps,
        appNodeId,
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
    appNodeId: 'root',
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
    onClick: () => Promise.resolve(),
    onClose: () => Promise.resolve(),
    onOpen: () => Promise.resolve(),
});

// export const dismissToasters = toast.dismiss;

// export const isToasterActive = toast.isActive;

export const {
    clearWaitingQueue,
    dismiss: dismissToasters,
    done: finishToast,
    isActive: isToasterActive,
} = toast;
