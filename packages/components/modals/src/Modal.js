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
        hasCloseButton: true,
        isMounted: false,
        shouldExitOnEscapePress: true,
        shouldExitOnUnderlayClick: true,
        shouldFocusDialog: true,
        modalActions: [],
        appNode: document.getElementById('root'),
        onEnter: () => Promise.resolve(),
        onExit: () => Promise.resolve(),
        onActionClick: () => Promise.resolve(),
    };

    static propTypes = {
        ariaLabel: PropTypes.string,
        closeBtnARIALabel: PropTypes.string,
        dialogContextCls: PropTypes.string,
        dialogId: PropTypes.string,
        subTitle: PropTypes.string,
        title: PropTypes.string,
        titleId: PropTypes.string,
        underlayContextCls: PropTypes.string,
        hasCloseButton: PropTypes.bool,
        isMounted: PropTypes.bool,
        shouldExitOnEscapePress: PropTypes.bool,
        shouldExitOnUnderlayClick: PropTypes.bool,
        shouldFocusDialog: PropTypes.bool,
        focusTrapOptions: PropTypes.object,
        modalActions: PropTypes.array,
        appNode: PropTypes.instanceOf(Element),
        renderTo: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        onEnter: PropTypes.func,
        onExit: PropTypes.func,
        onActionClick: PropTypes.func,
        renderCloseButtonIcon: PropTypes.func,
        renderModalActions: PropTypes.func,
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
            underlayContextCls,
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
            underlayContextCls: cx(
                `${this.baseCls}__underlay`,
                underlayContextCls,
            ),
        };
    };

    baseCls = 'bankai-modal';

    titleId = `${this.baseCls}-dialog-${uuidv4()}`;
}

export default Modal;
