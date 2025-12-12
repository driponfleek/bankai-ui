import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button } from '@driponfleek/bankai-ui-buttons';
import { BankaiX } from '@driponfleek/bankai-ui-icons';
import { v4 as uuidv4 } from 'uuid';
import ARIAModal from './ARIAModal';
import ModalActions from './components/ModalActions';
import ModalHeading from './components/ModalHeading';

// Utils
import {
    getModalExtantProps,
    getShouldRenderModalUIs,
} from './utils/modalUtils';

// Styles
import './styles/modal.scss';

const Modal = (props) => {
    const {
        closeBtnARIALabel,
        dialogContextCls,
        role = 'dialog',
        closeTimeoutMS = 150,
        headingProps,
        hasCloseButton = true,
        isOpen = false,
        shouldCloseOnEsc = true,
        shouldCloseOnOverlayClick = true,
        shouldFocusAfterRender = true,
        titleId: id,
        modalActions = [],
        onActionClick = Modal.onActionClick,
        onAfterClose = Modal.onAfterClose,
        onAfterOpen = Modal.onAfterOpen,
        onExit = Modal.onExit,
        renderCloseButtonIcon = BankaiX,
        renderModalActions,
        renderModalHeading,
        renderTo = Modal.renderTo,
        appElement = document.getElementById('root'),
        children,
        ...rest
    } = props;
    const baseCls = 'bankai-modal';
    const titleId = id ?? `${baseCls}-dialog-${uuidv4()}`;
    const modalProps = getModalExtantProps(
        {
            ...rest,
            closeBtnARIALabel,
            dialogContextCls,
            role,
            closeTimeoutMS,
            headingProps,
            hasCloseButton,
            isOpen,
            shouldCloseOnEsc,
            shouldCloseOnOverlayClick,
            shouldFocusAfterRender,
            titleId,
            modalActions,
            onActionClick,
            onAfterClose,
            onAfterOpen,
            onExit,
            renderCloseButtonIcon,
            renderModalActions,
            renderModalHeading,
            renderTo,
            appElement,
            children,
        },
        baseCls,
    );
    const { shouldRenderHeading, shouldRenderActions } =
        getShouldRenderModalUIs(props);
    const modCls = {
        [`${baseCls}--has-close-btn`]: hasCloseButton,
    };

    return (
        <ARIAModal
            {...modalProps}
            dialogContextCls={cx(baseCls, modCls, dialogContextCls)}
        >
            <div className={`${baseCls}__content-container`}>
                {shouldRenderHeading && (
                    <ModalHeading
                        {...headingProps}
                        baseCls={baseCls}
                        titleId={titleId}
                        renderModalHeading={renderModalHeading}
                    />
                )}
                {hasCloseButton && (
                    <Button
                        aria-label={closeBtnARIALabel}
                        contextCls={`${baseCls}__close-button`}
                        renderIcon={renderCloseButtonIcon}
                        onClick={onExit}
                    />
                )}
                <div className={`${baseCls}__main-container`}>{children}</div>
                {shouldRenderActions && (
                    <ModalActions
                        baseCls={baseCls}
                        modalActions={modalActions}
                        onActionClick={onActionClick}
                        renderModalActions={renderModalActions}
                    />
                )}
            </div>
        </ARIAModal>
    );
};

Modal.onActionClick = () => Promise.resolve();
Modal.onAfterClose = () => Promise.resolve();
Modal.onAfterOpen = () => Promise.resolve();
Modal.onExit = () => Promise.resolve();
Modal.renderTo = () => document.body;

Modal.propTypes = {
    ariaDescribedby: PropTypes.string,
    ariaLabel: PropTypes.string,
    closeBtnARIALabel: PropTypes.string,
    dialogContextCls: PropTypes.string,
    dialogId: PropTypes.string,
    role: PropTypes.string,
    titleId: PropTypes.string,
    overlayContextCls: PropTypes.string,
    closeTimeoutMS: PropTypes.number,
    hasCloseButton: PropTypes.bool,
    isOpen: PropTypes.bool,
    shouldCloseOnEsc: PropTypes.bool,
    shouldCloseOnOverlayClick: PropTypes.bool,
    shouldFocusAfterRender: PropTypes.bool,
    headingProps: PropTypes.shape({
        subTitle: PropTypes.string,
        title: PropTypes.string,
        headingLvl: PropTypes.number,
    }),
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
    renderModalHeading: PropTypes.func,
    renderTo: PropTypes.func,
};

export default Modal;
