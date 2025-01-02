import PropTypes from 'prop-types';
import { TbUsers as Users } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiUsers = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Users
            {...rest}
            className={classNameUtil(`${baseCls}-users`, className, contextCls)}
        />
    );
};

BankaiUsers.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiUsers;
