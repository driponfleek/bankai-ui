import PropTypes from 'prop-types';
import { TbDots as MoreHorizontal } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiMoreHorizontal = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <MoreHorizontal
            {...rest}
            className={classNameUtil(
                `${baseCls}-more-horizontal`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiMoreHorizontal.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiMoreHorizontal;
