import PropTypes from 'prop-types';
import Modal from 'react-modal/dist/react-modal';

// Utils
import { getARIAModalExtantProps } from './utils/modalUtils';

// Styles
import './styles/aria-modal.scss';

const ARIAModal = (props) => {
    const { children, ...rest } = props;
    const baseCls = 'bankai-aria-modal';
    const modalProps = getARIAModalExtantProps(rest, baseCls);

    return <Modal {...modalProps}>{children}</Modal>;
};

ARIAModal.defaultProps = {
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

ARIAModal.propTypes = {
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

export default ARIAModal;
