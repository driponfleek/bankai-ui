import PropTypes from 'prop-types';
import { TbPower as Power } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiPower = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Power
            {...rest}
            className={classNameUtil(`${baseCls}-power`, className, contextCls)}
        />
    );
};

BankaiPower.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiPower;
