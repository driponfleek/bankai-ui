import PropTypes from 'prop-types';
import { TbStarFilled as StarFill } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiStarFill = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <StarFill
            {...rest}
            className={classNameUtil(
                `${baseCls}-star-fill`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiStarFill.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiStarFill;
