import { TbPencil as Edit } from 'react-icons/tb';

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
const BankaiEdit = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Edit
            {...rest}
            className={classNameUtil(`${baseCls}-edit`, className, contextCls)}
        />
    );
};

export default BankaiEdit;
