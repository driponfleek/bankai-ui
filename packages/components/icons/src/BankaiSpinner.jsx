import { TbLoader2 as Spinner } from 'react-icons/tb';

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
const BankaiSpinner = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Spinner
            {...rest}
            className={classNameUtil(
                `${baseCls}-spinner`,
                className,
                contextCls,
            )}
        />
    );
};

export default BankaiSpinner;
