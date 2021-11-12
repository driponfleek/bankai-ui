import React from 'react';
// import PropTypes from 'prop-types';
// import cx from 'classnames';
import { toast } from 'react-toastify';
import ToastContainer from './ToastContainer';
import Message from './components/Message';
import CloseButton from './components/CloseButton';

// Utils
import {
    getDefaultProps,
    getContainerProps,
    getToastProps,
    getValidVariant,
} from './utils/toasterUtils';

// Styles
import './styles/toaster.scss';

// Reference:
// https://fkhadra.github.io/react-toastify/api/toast-container
// https://fkhadra.github.io/react-toastify/api/toast
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
