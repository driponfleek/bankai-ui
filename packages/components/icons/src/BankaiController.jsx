import PropTypes from 'prop-types';
import { TbDeviceGamepad2 as Controller } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiController = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Controller
            {...rest}
            className={classNameUtil(
                `${baseCls}-controller`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiController.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiController;
