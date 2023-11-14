import PropTypes from 'prop-types';
// import cx from 'classnames';
import { Button } from '@driponfleek/bankai-ui-buttons';
import { BankaiX } from '@driponfleek/bankai-ui-icons';

// Constants
import baseCls from '../const/cssBaseClassConst';

const ToasterCloseButton = ({ closeToast, closeBtnARIALabel }) => {
    const renderCloseButtonIcon = () => {
        return <BankaiX contextCls={`${baseCls}__close-btn-icon`} />;
    };

    return (
        <Button
            contextCls={`${baseCls}__close-btn`}
            aria-label={closeBtnARIALabel}
            renderIcon={renderCloseButtonIcon}
            onClick={closeToast}
        />
    );
};

ToasterCloseButton.defaultProps = {
    closeToast: () => Promise.resolve(),
};

ToasterCloseButton.propTypes = {
    closeToast: PropTypes.func,
    closeBtnARIALabel: PropTypes.string.isRequired,
};

export default ToasterCloseButton;
