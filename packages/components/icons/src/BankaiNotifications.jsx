import PropTypes from 'prop-types';
import { TbBell as Notification } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiNotifications = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Notification
            {...rest}
            className={classNameUtil(
                `${baseCls}-notifications`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiNotifications.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiNotifications;
