import PropTypes from 'prop-types';
import { TbDeviceDesktop as DeviceDesktop } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

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

BankaiDeviceDesktop.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiDeviceDesktop;
