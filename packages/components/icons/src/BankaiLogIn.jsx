import PropTypes from 'prop-types';
import { TbLogin2 as LogIn } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiLogIn = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <LogIn
            {...rest}
            className={classNameUtil(
                `${baseCls}-log-in`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiLogIn.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiLogIn;
