import cx from 'classnames';
import { v4 as uuidv4 } from 'uuid';

export const getARIAModalExtantProps = (props, baseCls) => {
    const {
        ariaDescribedby,
        ariaLabel,
        dialogContextCls,
        dialogId,
        role,
        titleId,
        overlayContextCls,
        closeTimeoutMS,
        isOpen,
        shouldCloseOnEsc,
        shouldCloseOnOverlayClick,
        shouldDisableScroll,
        shouldFocusAfterRender,
        renderTo,
        onAfterClose,
        onAfterOpen,
        renderModalActions,
        renderModalHeading,
        onExit,
        ...rest
    } = props;
    const modCls = {
        [`${baseCls}--overlay-clickable`]: shouldCloseOnOverlayClick,
    };

    return {
        ...rest,
        className: {
            afterOpen: `${baseCls}__dialog--after-open`,
            beforeClose: `${baseCls}__dialog--before-close`,
            base: cx(`${baseCls}__dialog`, dialogContextCls),
        },
        ...(ariaLabel && !titleId && { contentLabel: ariaLabel }),
        id: dialogId || `${baseCls}-dialog-${uuidv4()}`,
        role,
        overlayClassName: {
            afterOpen: `${baseCls}__overlay--after-open`,
            beforeClose: `${baseCls}__overlay--before-close`,
            base: cx(`${baseCls}__overlay`, modCls, overlayContextCls),
        },
        closeTimeoutMS,
        ariaHideApp: true,
        preventScroll: shouldDisableScroll,
        shouldCloseOnEsc,
        shouldCloseOnOverlayClick,
        shouldFocusAfterRender,
        isOpen,
        aria: {
            ...(titleId && { labelledby: titleId }),
            ...(ariaDescribedby && { describedby: ariaDescribedby }),
        },
        onAfterClose,
        onAfterOpen,
        onRequestClose: onExit,
        parentSelector: renderTo,
    };
};

export const getModalExtantProps = (props, baseCls) => {
    const {
        ariaLabel,
        closeBtnARIALabel,
        title,
        subTitle,
        titleId,
        overlayContextCls,
        hasCloseButton,
        modalActions,
        onActionClick,
        renderCloseButtonIcon,
        renderModalActions,
        ...rest
    } = props;

    return {
        ...rest,
        ...(!title && { titleId, ariaLabel }),
        ...(title && { titleId }),
        overlayContextCls: cx(`${baseCls}__overlay`, overlayContextCls),
    };
};

export const getShouldRenderModalUIs = (props) => {
    const {
        renderModalHeading,
        headingProps,
        modalActions,
        renderModalActions,
    } = props;

    return {
        shouldRenderHeading: !!renderModalHeading || !!headingProps,
        shouldRenderActions: modalActions.length > 0 || !!renderModalActions,
    };
};

export const getModalActionsByPriority = (modalActions = []) => {
    const primaryAction = modalActions.find((action) => action.isPrimary);
    const secondaryAction = modalActions.find((action) => !action.isPrimary);
    delete primaryAction.isPrimary;

    return { primaryAction, secondaryAction };
};
