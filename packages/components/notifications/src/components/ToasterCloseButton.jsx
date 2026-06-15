import { Button } from '@driponfleek/bankai-ui-buttons';
import { BankaiX } from '@driponfleek/bankai-ui-icons';

// Constants
import baseCls from '../const/cssBaseClassConst';

/**
 * @param {Object} props
 * @param {Function} [props.closeToast] - Function provided by react-toastify to dismiss the toast
 * @param {string} props.closeBtnARIALabel - Accessible label for the close button
 */
const ToasterCloseButton = ({
    closeToast = ToasterCloseButton.closeToast,
    closeBtnARIALabel,
}) => {
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

ToasterCloseButton.closeToast = () => Promise.resolve();

export default ToasterCloseButton;
