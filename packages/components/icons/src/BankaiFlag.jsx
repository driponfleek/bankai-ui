import PropTypes from 'prop-types';
import { TbFlag as Flag } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiFlag = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Flag
            {...rest}
            className={classNameUtil(`${baseCls}-flag`, className, contextCls)}
        />
    );
};

BankaiFlag.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiFlag;
