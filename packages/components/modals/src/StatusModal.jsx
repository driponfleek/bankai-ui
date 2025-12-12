import PropTypes from 'prop-types';
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

StatusModal.propTypes = {
    dialogContextCls: PropTypes.string,
    overlayContextCls: PropTypes.string,
    role: PropTypes.string,
    statusText: PropTypes.string.isRequired,
    closeTimeoutMS: PropTypes.number,
    isOpen: PropTypes.bool,
    appElement: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Element),
    ]),
    onAfterClose: PropTypes.func,
    onAfterOpen: PropTypes.func,
    renderIcon: PropTypes.func,
    renderTo: PropTypes.func,
};

export default StatusModal;
