// Constants
import { BUTTON_BASE_CLS } from '../const/baseClsConst';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base CSS class name used to construct BEM modifier and element classes
 * @param {Function} [props.renderIcon] - Render function for the button icon
 */
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

export default ButtonIcon;
