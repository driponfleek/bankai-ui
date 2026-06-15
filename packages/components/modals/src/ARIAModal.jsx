import Modal from 'react-modal/dist/react-modal';

// Utils
import { getARIAModalExtantProps } from './utils/modalUtils';

// Styles
import './styles/aria-modal.scss';

/**
 * @param {Object} props
 * @param {string} [props.ariaDescribedby] - ID of the element that describes the modal dialog
 * @param {string} [props.ariaLabel] - Accessible label for the modal dialog
 * @param {string} [props.dialogContextCls] - Additional CSS class name(s) to apply to the dialog element
 * @param {string} [props.dialogId] - ID attribute for the dialog element
 * @param {string} [props.role] - ARIA role for the modal (e.g. "dialog", "alertdialog")
 * @param {string} [props.titleId] - ID of the element used as the modal's accessible title
 * @param {string} [props.overlayContextCls] - Additional CSS class name(s) to apply to the overlay element
 * @param {number} [props.closeTimeoutMS] - Duration in milliseconds for the close transition
 * @param {boolean} [props.isOpen] - Whether the modal is currently open
 * @param {boolean} [props.shouldCloseOnEsc] - Whether pressing Escape closes the modal
 * @param {boolean} [props.shouldCloseOnOverlayClick] - Whether clicking the overlay closes the modal
 * @param {boolean} [props.shouldDisableScroll] - Whether to disable body scroll when the modal is open
 * @param {boolean} [props.shouldFocusAfterRender] - Whether to move focus into the modal after it opens
 * @param {string|Element} [props.appElement] - The app root element used by react-modal for accessibility
 * @param {Function} [props.onAfterClose] - Callback fired after the modal finishes closing
 * @param {Function} [props.onAfterOpen] - Callback fired after the modal finishes opening
 * @param {Function} [props.onExit] - Callback fired when the modal requests to be closed
 * @param {Function} [props.renderTo] - Function that returns the DOM node to portal the modal into
 */
const ARIAModal = (props) => {
    const { children, ...rest } = props;
    const baseCls = 'bankai-aria-modal';
    const modalProps = getARIAModalExtantProps(rest, baseCls);

    return <Modal {...modalProps}>{children}</Modal>;
};

export default ARIAModal;
