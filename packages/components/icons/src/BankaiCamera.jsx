import PropTypes from 'prop-types';
import { TbCamera as Camera } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiCamera = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Camera
            {...rest}
            className={classNameUtil(
                `${baseCls}-camera`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiCamera.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCamera;
