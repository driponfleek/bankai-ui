import PropTypes from 'prop-types';
import { TbDeviceTablet as DeviceTablet } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiDeviceTablet = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <DeviceTablet
            {...rest}
            className={classNameUtil(
                `${baseCls}-device-tablet`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiDeviceTablet.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiDeviceTablet;
