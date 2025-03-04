import PropTypes from 'prop-types';
import { TbClock as Clock } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiClock = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Clock
            {...rest}
            className={classNameUtil(`${baseCls}-clock`, className, contextCls)}
        />
    );
};

BankaiClock.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiClock;
