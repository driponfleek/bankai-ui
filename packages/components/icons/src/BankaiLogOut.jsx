import PropTypes from 'prop-types';
import { IoLogOutOutline } from 'react-icons/io5';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiLogOut = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <IoLogOutOutline
            {...rest}
            className={classNameUtil(
                `${baseCls}-log-out`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiLogOut.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiLogOut;
