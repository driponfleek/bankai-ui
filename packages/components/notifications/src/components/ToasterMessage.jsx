import { Heading } from '@driponfleek/bankai-ui-typography';
import Icon from './ToasterIcon';

// Utils
import { getShouldRenderIcon } from '../utils/toasterUtils';

// Constants
import VARIANTS from '../const/variantsConst';
import baseCls from '../const/cssBaseClassConst';

const { DEFAULT } = VARIANTS;

/**
 * @param {Object} props
 * @param {string|React.ReactElement} [props.message] - Body content of the toast
 * @param {string|React.ReactElement} [props.title] - Heading content of the toast
 * @param {string} [props.variant] - Toast variant that determines the icon displayed
 * @param {boolean} [props.shouldShowIcon] - Whether to show the variant icon
 * @param {Function} [props.renderIcon] - Custom render function for the icon
 */
const ToasterMessage = (props) => {
    const {
        message,
        title,
        variant = DEFAULT,
        shouldShowIcon = true,
        renderIcon,
    } = props;
    const hasIcon = getShouldRenderIcon(props);

    return (
        <div className={`${baseCls}__content-container`}>
            {hasIcon && (
                <div className={`${baseCls}__icon-container`}>
                    <Icon
                        variant={variant}
                        shouldShowIcon={shouldShowIcon}
                        renderIcon={renderIcon}
                    />
                </div>
            )}
            <div className={`${baseCls}__msg-container`}>
                <div className={`${baseCls}__msg-container-inner`}>
                    {title && (
                        <Heading contextCls={`${baseCls}__title`}>
                            {title}
                        </Heading>
                    )}
                    {message && (
                        <div className={`${baseCls}__msg`}>{message}</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ToasterMessage;
