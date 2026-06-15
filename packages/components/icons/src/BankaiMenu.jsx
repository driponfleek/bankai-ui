import { TbMenu2 as Menu } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.className] - Additional CSS class name(s) to apply to the icon element
 */
const BankaiMenu = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Menu
            {...rest}
            className={classNameUtil(`${baseCls}-menu`, className, contextCls)}
        />
    );
};

export default BankaiMenu;
