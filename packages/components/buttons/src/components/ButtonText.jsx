import PropTypes from 'prop-types';

// Constants
import { BUTTON_BASE_CLS } from '../const/baseClsConst';

const ButtonText = (props) => {
    const { baseCls, children } = props;

    return (
        <span className={`${baseCls}__text-container`}>
            <span className={`${baseCls}__text`}>{children}</span>
        </span>
    );
};

ButtonText.defaultProps = {
    baseCls: BUTTON_BASE_CLS,
};

ButtonText.propTypes = {
    baseCls: PropTypes.string,
};

export default ButtonText;
