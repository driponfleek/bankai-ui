import cx from 'classnames';
import {
    LoadingState,
    LoadingBars,
    LOADING_BARS_VARIANTS,
} from '@driponfleek/bankai-ui-loading';
import ARIAModal from './ARIAModal';

// Styles
import './styles/status-modal.scss';

const { FREQUENCY } = LOADING_BARS_VARIANTS;

/**
 * @param {Object} props
 * @param {string} [props.dialogContextCls] - Additional CSS class name(s) to apply to the dialog element
 * @param {string} [props.overlayContextCls] - Additional CSS class name(s) to apply to the overlay element
 * @param {string} [props.role] - ARIA role for the modal
 * @param {string} props.statusText - Accessible label and visible status message displayed in the modal
 * @param {number} [props.closeTimeoutMS] - Duration in milliseconds for the close transition
 * @param {boolean} [props.isOpen] - Whether the modal is currently open
 * @param {string|Element} [props.appElement] - The app root element used by react-modal for accessibility
 * @param {Function} [props.onAfterClose] - Callback fired after the modal finishes closing
 * @param {Function} [props.onAfterOpen] - Callback fired after the modal finishes opening
 * @param {Function} [props.renderIcon] - Custom render function for the loading icon
 * @param {Function} [props.renderTo] - Function that returns the DOM node to portal the modal into
 */
const StatusModal = (props) => {
    const {
        dialogContextCls,
        overlayContextCls,
        statusText,
        closeTimeoutMS = 2000,
        isOpen = false,
        renderIcon = LoadingBars,
        role = 'dialog',
        appElement = document.getElementById('root'),
        onAfterClose = StatusModal.onAfterClose,
        onAfterOpen = StatusModal.onAfterOpen,
        renderTo = StatusModal.renderTo,
        ...rest
    } = props;
    const baseCls = 'bankai-status-modal';

    return (
        <ARIAModal
            {...rest}
            appElement={appElement}
            role={role}
            closeTimeoutMS={closeTimeoutMS}
            ariaLabel={statusText}
            dialogContextCls={cx(`${baseCls}__dialog`, dialogContextCls)}
            overlayContextCls={cx(`${baseCls}__overlay`, overlayContextCls)}
            isOpen={isOpen}
            shouldCloseOnEsc={false}
            shouldCloseOnOverlayClick={false}
            onAfterClose={onAfterClose}
            onAfterOpen={onAfterOpen}
            renderTo={renderTo}
        >
            <LoadingState
                contextCls={baseCls}
                title={statusText}
                renderIcon={renderIcon}
            />
        </ARIAModal>
    );
};

StatusModal.onAfterClose = () => Promise.resolve();
StatusModal.onAfterOpen = () => Promise.resolve();
StatusModal.renderTo = () => document.body;

export default StatusModal;
