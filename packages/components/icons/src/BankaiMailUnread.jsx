import PropTypes from 'prop-types';
import { TbMailExclamation as MailUnread } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiMailUnread = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <MailUnread
            {...rest}
            className={classNameUtil(
                `${baseCls}-mail-unread`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiMailUnread.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiMailUnread;
