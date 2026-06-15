import { toast } from 'react-toastify';
import ToastContainer from './ToastContainer';
import Message from './components/ToasterMessage';
import CloseButton from './components/ToasterCloseButton';

// Utils
import {
    getDefaultProps,
    getContainerProps,
    getToastProps,
    getValidVariant,
} from './utils/toasterUtils';

// Styles
import 'react-toastify/dist/ReactToastify.css';
import './styles/toaster.scss';

// Reference:
// https://fkhadra.github.io/react-toastify/api/toast-container
// https://fkhadra.github.io/react-toastify/api/toast
/**
 * @param {Object} props
 * @param {string} [props.closeBtnARIALabel] - Accessible label for the close button
 * @param {string} [props.variant] - Toast variant (e.g. "success", "error", "warning", "info")
 * @param {Function} [props.renderCloseButton] - Custom render function for the close button
 * @param {string} [props.toastId] - If provided, updates an existing toast with this ID instead of creating a new one
 */
const Toaster = (props) => {
    const {
        closeBtnARIALabel,
        variant: initVariant,
        renderCloseButton: renderCustomCloseBtn,
        toastId,
        ...rest
    } = props;
    // Validate that variant passed in is valid
    const variant = getValidVariant(initVariant);
    // Merge default props with props passed in
    const renderDefaultCloseBtn = (btnProps) => (
        <CloseButton {...btnProps} closeBtnARIALabel={closeBtnARIALabel} />
    );
    const renderCloseButton = renderCustomCloseBtn || renderDefaultCloseBtn;
    const mergedProps = {
        ...getDefaultProps(),
        ...rest,
        variant,
        renderCloseButton,
    };
    const renderMessage = () => <Message {...mergedProps} />;
    const toastProps = getToastProps(mergedProps);

    if (toastId) {
        return toast.update(toastId, {
            type: variant,
            render: renderMessage,
            className: toastProps.className,
        });
    }

    const containerProps = getContainerProps(mergedProps);
    ToastContainer(containerProps);

    return toast(renderMessage, toastProps);
};

export default Toaster;
