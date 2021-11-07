import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button, BTN_VARIANTS } from '@epr0t0type/bankai-ui-buttons';
import { BankaiX } from '@epr0t0type/bankai-ui-icons';
import { Heading } from '@epr0t0type/bankai-ui-typography';
import { v4 as uuidv4 } from 'uuid';
import ARIAModal from './ARIAModal';

// Styles
import './styles/modal.scss';

const {
    PRIMARY,
    PRIMARY_DESTRUCTIVE,
    SECONDARY,
    SECONDARY_DESTRUCTIVE,
} = BTN_VARIANTS;

class Modal extends PureComponent {
    static defaultProps = {
        role: 'dialog',
        closeTimeoutMS: 150,
        hasCloseButton: true,
        isOpen: false,
        shouldCloseOnEsc: true,
        shouldCloseOnOverlayClick: true,
        shouldFocusAfterRender: true,
        modalActions: [],
        appElement: document.getElementById('root'),
        onAfterClose: () => Promise.resolve(),
        onAfterOpen: () => Promise.resolve(),
        onExit: () => Promise.resolve(),
        onActionClick: () => Promise.resolve(),
        renderTo: () => document.body,
    };

    static propTypes = {
        ariaDescribedby: PropTypes.string,
        ariaLabel: PropTypes.string,
        closeBtnARIALabel: PropTypes.string,
        dialogContextCls: PropTypes.string,
        dialogId: PropTypes.string,
        role: PropTypes.string,
        subTitle: PropTypes.string,
        title: PropTypes.string,
        titleId: PropTypes.string,
        overlayContextCls: PropTypes.string,
        closeTimeoutMS: PropTypes.number,
        hasCloseButton: PropTypes.bool,
        isOpen: PropTypes.bool,
        shouldCloseOnEsc: PropTypes.bool,
        shouldCloseOnOverlayClick: PropTypes.bool,
        shouldFocusAfterRender: PropTypes.bool,
        focusTrapOptions: PropTypes.object,
        modalActions: PropTypes.array,
        appElement: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.instanceOf(Element),
        ]),
        onAfterClose: PropTypes.func,
        onAfterOpen: PropTypes.func,
        onExit: PropTypes.func,
        onActionClick: PropTypes.func,
        renderCloseButtonIcon: PropTypes.func,
        renderModalActions: PropTypes.func,
        renderTo: PropTypes.func,
    };

    render() {
        const {
            dialogContextCls,
            title,
            modalActions,
            hasCloseButton,
            renderModalActions,
        } = this.props;
        const modalProps = this.getModalProps();
        const hasActions = modalActions.length > 0 || !!renderModalActions;
        const modCls = {
            [`${this.baseCls}--has-close-btn`]: hasCloseButton,
        };

        return (
            <ARIAModal
                {...modalProps}
                dialogContextCls={cx(this.baseCls, modCls, dialogContextCls)}
            >
                <div className={`${this.baseCls}__content-container`}>
                    {title && this.renderHeading()}
                    {hasCloseButton && this.renderCloseButton()}
                    {this.renderMain()}
                    {hasActions && this.renderActions()}
                </div>
            </ARIAModal>
        );
    }

    renderCloseButton = () => {
        const { closeBtnARIALabel, renderCloseButtonIcon, onExit } = this.props;
        const iconRenderer =
            renderCloseButtonIcon || this.renderCloseButtonIcon;

        return (
            <Button
                aria-label={closeBtnARIALabel}
                contextCls={`${this.baseCls}__close-button`}
                renderIcon={iconRenderer}
                onClick={onExit}
            />
        );
    };

    renderCloseButtonIcon = () => {
        return <BankaiX />;
    };

    renderHeading = () => {
        const { title, subTitle } = this.props;

        return (
            <div className={`${this.baseCls}__heading-container`}>
                {title && (
                    <Heading
                        contextCls={`${this.baseCls}__title`}
                        id={this.titleId}
                    >
                        {title}
                    </Heading>
                )}
                {subTitle && (
                    <p className={`${this.baseCls}__sub-title`}>{subTitle}</p>
                )}
            </div>
        );
    };

    renderMain = () => {
        const { children } = this.props;

        return (
            <div className={`${this.baseCls}__main-container`}>{children}</div>
        );
    };

    renderActions = () => {
        const { renderModalActions, modalActions } = this.props;
        const primaryAction = modalActions.find((action) => {
            return (
                action.variant === PRIMARY ||
                action.variant === PRIMARY_DESTRUCTIVE
            );
        });
        const secondaryAction = modalActions.find((action) => {
            return (
                action.variant === SECONDARY ||
                action.variant === SECONDARY_DESTRUCTIVE
            );
        });

        return (
            <div className={`${this.baseCls}__actions-container`}>
                <div className={`${this.baseCls}__actions-container-inner`}>
                    {!!renderModalActions && renderModalActions()}
                    {!renderModalActions && (
                        <Fragment>
                            {primaryAction &&
                                primaryAction.variant === PRIMARY &&
                                this.renderAction(primaryAction)}
                            {secondaryAction &&
                                this.renderAction(secondaryAction)}
                            {primaryAction &&
                                primaryAction.variant === PRIMARY_DESTRUCTIVE &&
                                this.renderAction(primaryAction)}
                        </Fragment>
                    )}
                </div>
            </div>
        );
    };

    renderAction = (action) => {
        const { onActionClick } = this.props;

        return <Button {...action} onClick={onActionClick} />;
    };

    getModalProps = () => {
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
        } = this.props;

        return {
            ...rest,
            ...(!title && { titleId, ariaLabel }),
            ...(title && { titleId: this.titleId }),
            overlayContextCls: cx(
                `${this.baseCls}__overlay`,
                overlayContextCls,
            ),
        };
    };

    baseCls = 'bankai-modal';

    titleId = `${this.baseCls}-dialog-${uuidv4()}`;
}

export default Modal;
