import PropTypes from 'prop-types';
import { AiOutlineUser } from 'react-icons/ai';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiUser = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <AiOutlineUser
            {...rest}
            className={classNameUtil(`${baseCls}-user`, className, contextCls)}
        />
    );
};

BankaiUser.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiUser;
