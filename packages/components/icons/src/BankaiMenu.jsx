import PropTypes from 'prop-types';
import { TbMenu2 as Menu } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiMenu = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Menu
            {...rest}
            className={classNameUtil(`${baseCls}-menu`, className, contextCls)}
        />
    );
};

BankaiMenu.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiMenu;
