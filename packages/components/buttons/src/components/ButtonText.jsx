// Constants
import { BUTTON_BASE_CLS } from '../const/baseClsConst';

/**
 * @param {Object} props
 * @param {string} [props.baseCls] - Base CSS class name used to construct BEM modifier and element classes
 */
const ButtonText = (props) => {
    const { baseCls = BUTTON_BASE_CLS, children } = props;

    return (
        <span className={`${baseCls}__text-container`}>
            <span className={`${baseCls}__text`}>{children}</span>
        </span>
    );
};

export default ButtonText;
