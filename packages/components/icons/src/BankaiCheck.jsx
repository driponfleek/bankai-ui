import PropTypes from 'prop-types';
import { TbCheck as Check } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiCheck = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Check
            {...rest}
            className={classNameUtil(`${baseCls}-check`, className, contextCls)}
        />
    );
};

BankaiCheck.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCheck;
