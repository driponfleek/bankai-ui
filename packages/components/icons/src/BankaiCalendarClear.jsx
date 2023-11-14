import PropTypes from 'prop-types';
import { IoCalendarClearOutline } from 'react-icons/io5';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiCalendarClear = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <IoCalendarClearOutline
            {...rest}
            className={classNameUtil(
                `${baseCls}-calendar-clear`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiCalendarClear.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCalendarClear;
