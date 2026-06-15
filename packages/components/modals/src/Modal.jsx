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

/**
 * @param {Object} props
 * @param {string} [props.ariaDescribedby] - ID of the element that describes the modal dialog
 * @param {string} [props.ariaLabel] - Accessible label for the modal dialog
 * @param {string} [props.closeBtnARIALabel] - Accessible label for the close button
 * @param {string} [props.dialogContextCls] - Additional CSS class name(s) to apply to the dialog element
 * @param {string} [props.dialogId] - ID attribute for the dialog element
 * @param {string} [props.role] - ARIA role for the modal (e.g. "dialog", "alertdialog")
 * @param {string} [props.titleId] - ID of the element used as the modal's accessible title
 * @param {string} [props.overlayContextCls] - Additional CSS class name(s) to apply to the overlay element
 * @param {number} [props.closeTimeoutMS] - Duration in milliseconds for the close transition
 * @param {boolean} [props.hasCloseButton] - Whether to render the close button
 * @param {boolean} [props.isOpen] - Whether the modal is currently open
 * @param {boolean} [props.shouldCloseOnEsc] - Whether pressing Escape closes the modal
 * @param {boolean} [props.shouldCloseOnOverlayClick] - Whether clicking the overlay closes the modal
 * @param {boolean} [props.shouldFocusAfterRender] - Whether to move focus into the modal after it opens
 * @param {Object} [props.headingProps] - Props for the modal heading (supports `subTitle`, `title`, `headingLvl`)
 * @param {Object} [props.focusTrapOptions] - Options passed to the focus trap
 * @param {Array} [props.modalActions] - Array of action button configuration objects
 * @param {string|Element} [props.appElement] - The app root element used by react-modal for accessibility
 * @param {Function} [props.onAfterClose] - Callback fired after the modal finishes closing
 * @param {Function} [props.onAfterOpen] - Callback fired after the modal finishes opening
 * @param {Function} [props.onExit] - Callback fired when the modal requests to be closed
 * @param {Function} [props.onActionClick] - Callback fired when a modal action button is clicked
 * @param {Function} [props.renderCloseButtonIcon] - Custom render function for the close button icon
 * @param {Function} [props.renderModalActions] - Custom render function for the actions area
 * @param {Function} [props.renderModalHeading] - Custom render function for the heading area
 * @param {Function} [props.renderTo] - Function that returns the DOM node to portal the modal into
 */
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

export default Modal;
