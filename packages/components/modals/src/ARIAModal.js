import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ReactARIAModal from 'react-aria-modal';
import { v4 as uuidv4 } from 'uuid';

// Styles
import './styles/aria-modal.scss';

class ARIAModal extends PureComponent {
    static defaultProps = {
        isAlert: false,
        isMounted: false,
        shouldCenter: true,
        shouldDisableScroll: true,
        shouldExitOnEscapePress: true,
        shouldExitOnUnderlayClick: true,
        shouldFocusDialog: true,
        appNode: document.getElementById('root'),
        onEnter: () => Promise.resolve(),
        onExit: () => Promise.resolve(),
    };

    static propTypes = {
        ariaLabel: PropTypes.string,
        dialogContextCls: PropTypes.string,
        dialogId: PropTypes.string,
        initialFocus: PropTypes.string,
        titleId: PropTypes.string,
        underlayContextCls: PropTypes.string,
        isAlert: PropTypes.bool,
        isMounted: PropTypes.bool,
        shouldCenter: PropTypes.bool,
        shouldDisableScroll: PropTypes.bool,
        shouldExitOnEscapePress: PropTypes.bool,
        shouldExitOnUnderlayClick: PropTypes.bool,
        shouldFocusDialog: PropTypes.bool,
        appNode: PropTypes.instanceOf(Element),
        focusTrapOptions: PropTypes.object,
        renderTo: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        onEnter: PropTypes.func,
        onExit: PropTypes.func,
    };

    render() {
        const { children } = this.props;
        const modalProps = this.getModalProps();
        const ModalComp = this.getModalComponent();

        return <ModalComp {...modalProps}>{children}</ModalComp>;
    }

    getModalProps = () => {
        const {
            ariaLabel,
            dialogContextCls,
            dialogId,
            initialFocus,
            titleId,
            underlayContextCls,
            isAlert,
            isMounted,
            shouldCenter,
            shouldDisableScroll,
            shouldExitOnEscapePress,
            shouldExitOnUnderlayClick,
            shouldFocusDialog,
            focusTrapOptions,
            appNode,
            renderTo,
            onEnter,
            onExit,
            ...rest
        } = this.props;
        const modCls = this.getModCls();

        return {
            ...rest,
            dialogClass: cx(
                `${this.baseCls}__dialog`,
                modCls,
                dialogContextCls,
            ),
            dialogId: dialogId || `${this.baseCls}-dialog-${uuidv4()}`,
            initialFocus,
            titleId,
            ...(!titleId && ariaLabel && { titleText: ariaLabel }),
            underlayClass: cx(`${this.baseCls}__underlay`, underlayContextCls),
            alert: isAlert,
            escapeExits: shouldExitOnEscapePress,
            focusDialog: shouldFocusDialog,
            includeDefaultStyles: false,
            mounted: isMounted,
            scrollDisabled: shouldDisableScroll,
            verticallyCenter: shouldCenter,
            focusTrapOptions,
            applicationNode: appNode,
            onEnter,
            onExit,
            underlayClickExits: shouldExitOnUnderlayClick,
        };
    };

    getModCls = () => {
        const { isMounted, shouldExitOnUnderlayClick } = this.props;

        return {
            [`${this.baseCls}--is-mounted`]: isMounted,
            [`${this.baseCls}--exits-on-underlay-click`]: shouldExitOnUnderlayClick,
        };
    };

    getModalComponent = () => {
        const { renderTo } = this.props;

        return renderTo ? ReactARIAModal.renderTo(renderTo) : ReactARIAModal;
    };

    baseCls = 'bankai-aria-modal';
}

export default ARIAModal;
