import PropTypes from 'prop-types';
import { TbChevronDown as ChevronDown } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiChevronDown = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <ChevronDown
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
