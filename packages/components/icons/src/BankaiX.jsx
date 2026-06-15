import { TbX as X } from 'react-icons/tb';

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
const BankaiX = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <X
            {...rest}
            className={classNameUtil(`${baseCls}-x`, className, contextCls)}
        />
    );
};

export default BankaiX;
