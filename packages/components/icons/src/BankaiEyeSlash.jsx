import PropTypes from 'prop-types';
import { TbEyeOff as EyeSlash } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiEyeSlash = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <EyeSlash
            {...rest}
            className={classNameUtil(
                `${baseCls}-eye-slash`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiEyeSlash.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiEyeSlash;
