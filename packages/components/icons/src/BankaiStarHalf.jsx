import PropTypes from 'prop-types';
import { TbStarHalfFilled as StarHalf } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiStarHalf = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <StarHalf
            {...rest}
            className={classNameUtil(
                `${baseCls}-star-half`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiStarHalf.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiStarHalf;
