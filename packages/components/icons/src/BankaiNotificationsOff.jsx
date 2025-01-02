import PropTypes from 'prop-types';
import { TbBellOff as NotificationOff } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiNotificationsOff = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <NotificationOff
            {...rest}
            className={classNameUtil(
                `${baseCls}-notifications-off`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiNotificationsOff.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiNotificationsOff;
