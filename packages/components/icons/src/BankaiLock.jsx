import PropTypes from 'prop-types';
import { TbLock as Lock } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiLock = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Lock
            {...rest}
            className={classNameUtil(`${baseCls}-lock`, className, contextCls)}
        />
    );
};

BankaiLock.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiLock;
