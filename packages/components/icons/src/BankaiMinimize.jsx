import PropTypes from 'prop-types';
import { TbMinimize as Minimize } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiMinimize = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Minimize
            {...rest}
            className={classNameUtil(
                `${baseCls}-minimize`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiMinimize.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiMinimize;
