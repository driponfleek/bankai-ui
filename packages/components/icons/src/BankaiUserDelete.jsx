import PropTypes from 'prop-types';
import { TbUserMinus as UserDelete } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiUserDelete = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <UserDelete
            {...rest}
            className={classNameUtil(
                `${baseCls}-user-delete`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiUserDelete.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiUserDelete;
