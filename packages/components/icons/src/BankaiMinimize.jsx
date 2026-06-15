import { TbMinimize as Minimize } from 'react-icons/tb';

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
const BankaiMinimize = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Minimize
            {...rest}
            className={classNameUtil(
                `${baseCls}-minimize`,
                className,
                contextCls,
            )}
        />
    );
};

export default BankaiMinimize;
