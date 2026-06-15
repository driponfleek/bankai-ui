import { TbDeviceDesktop as DeviceDesktop } from 'react-icons/tb';

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
const BankaiDeviceDesktop = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <DeviceDesktop
            {...rest}
            className={classNameUtil(
                `${baseCls}-desktop`,
                className,
                contextCls,
            )}
        />
    );
};

export default BankaiDeviceDesktop;
