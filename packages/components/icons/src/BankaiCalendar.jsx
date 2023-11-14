import PropTypes from 'prop-types';
import { IoCalendarOutline } from 'react-icons/io5';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiCalendar = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <IoCalendarOutline
            {...rest}
            className={classNameUtil(
                `${baseCls}-calendar`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiCalendar.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCalendar;
