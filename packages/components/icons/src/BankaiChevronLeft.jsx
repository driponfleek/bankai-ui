import PropTypes from 'prop-types';
import { TbChevronLeft as ChevronLeft } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiChevronLeft = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <ChevronLeft
            {...rest}
            className={classNameUtil(
                `${baseCls}-chevron-left`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiChevronLeft.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiChevronLeft;
