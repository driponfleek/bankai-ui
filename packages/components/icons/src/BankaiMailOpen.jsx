import PropTypes from 'prop-types';
import { TbMailOpened as MailOpen } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiMailOpen = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <MailOpen
            {...rest}
            className={classNameUtil(
                `${baseCls}-mail-open`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiMailOpen.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiMailOpen;
