import PropTypes from 'prop-types';
import { FiChevronDown } from 'react-icons/fi';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiChevronDown = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <FiChevronDown
            {...rest}
            className={classNameUtil(
                `${baseCls}-chevron-down`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiChevronDown.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiChevronDown;
