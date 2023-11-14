import PropTypes from 'prop-types';
import { TbHistory as History } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiHistory = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <History
            {...rest}
            className={classNameUtil(
                `${baseCls}-history`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiHistory.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiHistory;
