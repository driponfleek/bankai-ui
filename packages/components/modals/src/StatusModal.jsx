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
        isOpen,
        renderIcon,
        ...rest
    } = props;
    const baseCls = 'bankai-status-modal';
    const iconRenderer = ({ contextCls }) => (
        <LoadingBars contextCls={contextCls} variant={FREQUENCY} />
    );

    return (
        <ARIAModal
            {...rest}
            ariaLabel={statusText}
            dialogContextCls={cx(`${baseCls}__dialog`, dialogContextCls)}
            overlayContextCls={cx(`${baseCls}__overlay`, overlayContextCls)}
            isOpen={isOpen}
            shouldCloseOnEsc={false}
            shouldCloseOnOverlayClick={false}
        >
            <LoadingState
                contextCls={baseCls}
                title={statusText}
                renderIcon={iconRenderer}
            />
        </ARIAModal>
    );
};

StatusModal.defaultProps = {
    isOpen: false,
    role: 'dialog',
    closeTimeoutMS: 2000,
    appElement: document.getElementById('root'),
    onAfterClose: () => Promise.resolve(),
    onAfterOpen: () => Promise.resolve(),
    renderIcon: LoadingBars,
    renderTo: () => document.body,
};

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
