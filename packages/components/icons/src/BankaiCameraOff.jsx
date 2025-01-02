import PropTypes from 'prop-types';
import { TbCameraOff as CameraOff } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiCameraOff = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <CameraOff
            {...rest}
            className={classNameUtil(
                `${baseCls}-camera-off`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiCameraOff.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCameraOff;
