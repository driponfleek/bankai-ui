import PropTypes from 'prop-types';
import { BsGear } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiSettings = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsGear
            {...rest}
            className={classNameUtil(
                `${baseCls}-settings`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiSettings.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiSettings;
