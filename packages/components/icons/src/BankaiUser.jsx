import PropTypes from 'prop-types';
import { TbUser as User } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiUser = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <User
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
