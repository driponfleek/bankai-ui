import PropTypes from 'prop-types';
import { TbEye as Eye } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiEye = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Eye
            {...rest}
            className={classNameUtil(`${baseCls}-eye`, className, contextCls)}
        />
    );
};

BankaiEye.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiEye;
