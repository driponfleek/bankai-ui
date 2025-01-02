import PropTypes from 'prop-types';
import { TbUserPlus as UserAdd } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiUserAdd = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <UserAdd
            {...rest}
            className={classNameUtil(
                `${baseCls}-user-add`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiUserAdd.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiUserAdd;
