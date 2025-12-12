import PropTypes from 'prop-types';

// Constants
import { BUTTON_BASE_CLS } from '../const/baseClsConst';

const ButtonIcon = (props) => {
    const { renderIcon = () => '', baseCls = BUTTON_BASE_CLS } = props;
    const baseIconCls = `${baseCls}__icon-container`;

    return (
        <span className={baseIconCls}>
            <span className={`${baseIconCls}-safe-space`}>
                <span className={`${baseIconCls}-inner`}>{renderIcon({})}</span>
            </span>
        </span>
    );
};

ButtonIcon.propTypes = {
    baseCls: PropTypes.string,
    renderIcon: PropTypes.func,
};

export default ButtonIcon;
