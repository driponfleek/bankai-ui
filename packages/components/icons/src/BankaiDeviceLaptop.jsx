import PropTypes from 'prop-types';
import { TbDeviceLaptop as DeviceLaptop } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiDeviceLaptop = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <DeviceLaptop
            {...rest}
            className={classNameUtil(
                `${baseCls}-device-laptop`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiDeviceLaptop.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiDeviceLaptop;
