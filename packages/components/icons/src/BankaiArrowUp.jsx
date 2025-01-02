import PropTypes from 'prop-types';
import { TbArrowNarrowUp as ArrowUp } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiArrowUp = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <ArrowUp
            {...rest}
            className={classNameUtil(
                `${baseCls}-arrow-up`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiArrowUp.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiArrowUp;
