import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Modal from 'react-modal/dist/react-modal';
import { v4 as uuidv4 } from 'uuid';

// Styles
import './styles/aria-modal.scss';

class ARIAModal extends PureComponent {
    static defaultProps = {
        role: 'dialog',
        closeTimeoutMS: 0,
        isOpen: false,
        shouldCloseOnEsc: true,
        shouldCloseOnOverlayClick: true,
        shouldDisableScroll: true,
        shouldFocusAfterRender: true,
        appElement: document.getElementById('root'),
        onAfterClose: () => Promise.resolve(),
        onAfterOpen: () => Promise.resolve(),
        onExit: () => Promise.resolve(),
        renderTo: () => document.body,
    };

    static propTypes = {
        ariaDescribedby: PropTypes.string,
        ariaLabel: PropTypes.string,
        dialogContextCls: PropTypes.string,
        dialogId: PropTypes.string,
        role: PropTypes.string,
        titleId: PropTypes.string,
        overlayContextCls: PropTypes.string,
        closeTimeoutMS: PropTypes.number,
        isOpen: PropTypes.bool,
        shouldCloseOnEsc: PropTypes.bool,
        shouldCloseOnOverlayClick: PropTypes.bool,
        shouldDisableScroll: PropTypes.bool,
        shouldFocusAfterRender: PropTypes.bool,
        appElement: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.instanceOf(Element),
        ]),
        onAfterClose: PropTypes.func,
        onAfterOpen: PropTypes.func,
        onExit: PropTypes.func,
        renderTo: PropTypes.func,
    };

    render() {
        const { children } = this.props;
        const modalProps = this.getModalProps();

        return <Modal {...modalProps}>{children}</Modal>;
    }

    getModalProps = () => {
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
            onExit,
            ...rest
        } = this.props;
        const modCls = this.getModCls();

        return {
            ...rest,
            className: {
                afterOpen: `${this.baseCls}__dialog--after-open`,
                beforeClose: `${this.baseCls}__dialog--before-close`,
                base: cx(`${this.baseCls}__dialog`, dialogContextCls),
            },
            ...(ariaLabel && !titleId && { contentLabel: ariaLabel }),
            id: dialogId || `${this.baseCls}-dialog-${uuidv4()}`,
            role,
            overlayClassName: {
                afterOpen: `${this.baseCls}__overlay--after-open`,
                beforeClose: `${this.baseCls}__overlay--before-close`,
                base: cx(`${this.baseCls}__overlay`, modCls, overlayContextCls),
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

    getModCls = () => {
        const { shouldCloseOnOverlayClick } = this.props;

        return {
            [`${this.baseCls}--overlay-clickable`]: shouldCloseOnOverlayClick,
        };
    };

    baseCls = 'bankai-aria-modal';
}

export default ARIAModal;
