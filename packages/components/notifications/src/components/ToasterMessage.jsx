import PropTypes from 'prop-types';
import { Heading } from '@driponfleek/bankai-ui-typography';
import Icon from './ToasterIcon';

// Utils
import { getShouldRenderIcon } from '../utils/toasterUtils';

// Constants
import VARIANTS from '../const/variantsConst';
import baseCls from '../const/cssBaseClassConst';

const { DEFAULT } = VARIANTS;

const ToasterMessage = (props) => {
    const { message, title, variant, shouldShowIcon, renderIcon } = props;
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

ToasterMessage.defaultProps = {
    variant: DEFAULT,
    shouldShowIcon: true,
};

ToasterMessage.propTypes = {
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    variant: PropTypes.string,
    shouldShowIcon: PropTypes.bool,
    renderIcon: PropTypes.func,
};

export default ToasterMessage;
