import PropTypes from 'prop-types';

// Constants
import { BTN_BASE_CLS } from '../const/baseClsConst';

const ButtonIcon = (props) => {
    const { renderIcon: Icon, baseCls } = props;
    const baseIconCls = `${baseCls}__icon-container`;

    return (
        <span className={baseIconCls}>
            <span className={`${baseIconCls}-safe-space`}>
                <span className={`${baseIconCls}-inner`}>
                    <Icon />
                </span>
            </span>
        </span>
    );
};

ButtonIcon.defaultProps = {
    baseCls: BTN_BASE_CLS,
};

ButtonIcon.propTypes = {
    baseCls: PropTypes.string,
    renderIcon: PropTypes.func.isRequired,
};

export default ButtonIcon;
