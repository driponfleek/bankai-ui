import PropTypes from 'prop-types';
import { TbShield as Shield } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiShield = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Shield
            {...rest}
            className={classNameUtil(
                `${baseCls}-shield`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiShield.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiShield;
