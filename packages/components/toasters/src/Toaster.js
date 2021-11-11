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

// class ToasterCl extends PureComponent {
//     static defaultProps = {
//         appNodeId: 'root',
//         containerId: 'bankai-toast-container',
//         dragDirection: 'x',
//         position: BOTTOM_RIGHT,
//         role: 'alert',
//         variant: DEFAULT,
//         autoClose: 6000,
//         dragToDismissPercent: 80,
//         hasCloseButton: true,
//         isDraggable: false,
//         isRTL: false,
//         shouldCloseOnClick: false,
//         shouldHideProgressBar: false,
//         shouldPauseOnFocusLoss: false,
//         shouldPauseOnHover: false,
//         shouldPlaceNewestOnTop: true,
//         shouldShowIcon: true,
//         onClick: () => Promise.resolve(),
//         onClose: () => Promise.resolve(),
//         onOpen: () => Promise.resolve(),
//     };

//     static propTypes = {
//         appNodeId: PropTypes.string,
//         closeBtnARIALabel: PropTypes.string,
//         contextCls: PropTypes.string,
//         containerId: PropTypes.string,
//         dragDirection: PropTypes.string,
//         message: PropTypes.string,
//         position: PropTypes.string,
//         role: PropTypes.string,
//         title: PropTypes.string,
//         toastId: PropTypes.string,
//         variant: PropTypes.string,
//         delay: PropTypes.number,
//         dragToDismissPercent: PropTypes.number,
//         limit: PropTypes.number,
//         progress: PropTypes.number,
//         hasCloseButton: PropTypes.bool,
//         isDraggable: PropTypes.bool,
//         isRTL: PropTypes.bool,
//         shouldCloseOnClick: PropTypes.bool,
//         shouldHideProgressBar: PropTypes.bool,
//         shouldPauseOnFocusLoss: PropTypes.bool,
//         shouldPauseOnHover: PropTypes.bool,
//         shouldPlaceNewestOnTop: PropTypes.bool,
//         shouldShowIcon: PropTypes.bool,
//         toastContainerProps: PropTypes.object,
//         toasterProps: PropTypes.object,
//         autoClose: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
//         onClick: PropTypes.func,
//         onClose: PropTypes.func,
//         onOpen: PropTypes.func,
//         renderCloseButton: PropTypes.func,
//         renderIcon: PropTypes.func,
//     };

//     constructor(...args) {
//         super(...args);
//         this.toast = toast;
//     }

//     render() {
//         const containerProps = this.getContainerProps();
//         const toastProps = this.getToastProps();
//         ToastContainer(containerProps);

//         return toast(this.renderMessage, toastProps);
//     }

//     renderMessage = () => {
//         const { title, message, variant, renderIcon } = this.props;
//         const validatedVariant = this.getValidVariant(variant);
//         const iconRenderer = renderIcon || this.renderIcon;
//         const shouldRenderIcon = this.getShouldRenderIcon(validatedVariant);
//         const iconCls = `${this.baseCls}__icon`;

//         return (
//             <div className={`${this.baseCls}__content-container`}>
//                 {shouldRenderIcon && (
//                     <div className={`${this.baseCls}__icon-container`}>
//                         <div className={`${this.baseCls}__icon-safe-space`}>
//                             {iconRenderer(validatedVariant, iconCls)}
//                         </div>
//                     </div>
//                 )}
//                 <div className={`${this.baseCls}__msg-container`}>
//                     <div className={`${this.baseCls}__msg-container-inner`}>
//                         {title && (
//                             <Heading contextCls={`${this.baseCls}__title`}>
//                                 {title}
//                             </Heading>
//                         )}
//                         {message && (
//                             <p className={`${this.baseCls}__msg`}>{message}</p>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         );
//     };

//     renderIcon = (variant, iconCls) => {
//         const Icon = this.getIcon(variant);

//         return Icon && <Icon contextCls={iconCls} />;
//     };

//     renderCloseButton = ({ closeToast }) => {
//         return (
//             <Button
//                 contextCls={`${this.baseCls}__close-btn`}
//                 renderIcon={this.renderCloseButtonIcon}
//                 onClick={closeToast}
//             />
//         );
//     };

//     renderCloseButtonIcon = () => {
//         return <BankaiX contextCls={`${this.baseCls}__close-btn-icon`} />;
//     };

//     getIcon = (variant) => {
//         let Icon;

//         switch (variant) {
//             case ERROR:
//             case WARNING:
//                 Icon = BankaiTriangleAlert;
//                 break;
//             case INFO:
//                 Icon = BankaiCircleInfo;
//                 break;
//             case SUCCESS:
//                 Icon = BankaiCheck;
//                 break;
//             default:
//                 break;
//         }

//         return Icon;
//     };

//     getShouldRenderIcon = (variant) => {
//         const { shouldShowIcon, renderIcon } = this.props;

//         if (!shouldShowIcon) {
//             return false;
//         }

//         if (variant === DEFAULT && !renderIcon) {
//             return false;
//         }

//         return true;
//     };

//     getContainerProps = () => {
//         const {
//             appNodeId,
//             containerId,
//             limit,
//             isRTL: rtl,
//             shouldPlaceNewestOnTop: newestOnTop,
//             toastContainerProps,
//         } = this.props;

//         return {
//             ...toastContainerProps,
//             appNodeId,
//             containerId,
//             limit,
//             rtl,
//             newestOnTop,
//         };
//     };

//     getToastProps = () => {
//         const {
//             containerId,
//             contextCls,
//             position,
//             variant,
//             dragDirection: draggableDirection,
//             delay,
//             dragToDismissPercent: draggablePercent,
//             progress,
//             role,
//             hasCloseButton,
//             isDraggable: draggable,
//             shouldCloseOnClick: closeOnClick,
//             shouldHideProgressBar: hideProgressBar,
//             shouldPauseOnFocusLoss: pauseOnFocusLoss,
//             shouldPauseOnHover: pauseOnHover,
//             toasterProps,
//             autoClose,
//             onClick,
//             onClose,
//             onOpen,
//             renderCloseButton,
//         } = this.props;
//         const closeButtonRenderer = renderCloseButton || this.renderCloseButton;
//         const validatedVariant = this.getValidVariant(variant);
//         const modCls = `${this.baseCls}--${validatedVariant.toLowerCase()}`;

//         return {
//             ...toasterProps,
//             className: cx(this.baseCls, modCls, contextCls),
//             containerId,
//             position,
//             type: validatedVariant,
//             draggableDirection,
//             role,
//             delay,
//             draggablePercent,
//             progress,
//             closeOnClick,
//             draggable,
//             hideProgressBar,
//             pauseOnFocusLoss,
//             pauseOnHover,
//             closeButton: hasCloseButton ? closeButtonRenderer : false,
//             autoClose,
//             onClick,
//             onClose,
//             onOpen,
//         };
//     };

//     getValidVariant = (variant) => {
//         const isValidVariant = allowedVariants.indexOf(variant) !== -1;

//         return isValidVariant ? variant : DEFAULT;
//     };

//     baseCls = 'bankai-toaster';
// }

export default Toaster;
