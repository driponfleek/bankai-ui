import PropTypes from 'prop-types';
import { TbChevronRight as ChevronRight } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiChevronRight = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <ChevronRight
            {...rest}
            className={classNameUtil(
                `${baseCls}-chevron-right`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiChevronRight.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiChevronRight;
