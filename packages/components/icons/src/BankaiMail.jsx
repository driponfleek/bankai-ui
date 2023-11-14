import PropTypes from 'prop-types';
import { IoMailOutline } from 'react-icons/io5';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiMail = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <IoMailOutline
            {...rest}
            className={classNameUtil(`${baseCls}-mail`, className, contextCls)}
        />
    );
};

BankaiMail.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiMail;
