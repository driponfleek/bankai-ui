import PropTypes from 'prop-types';
import { FiChevronUp } from 'react-icons/fi';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiChevronUp = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <FiChevronUp
            {...rest}
            className={classNameUtil(
                `${baseCls}-chevron-up`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiChevronUp.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiChevronUp;
