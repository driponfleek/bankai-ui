import PropTypes from 'prop-types';
import { TbMapPin as Location } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiLocation = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Location
            {...rest}
            className={classNameUtil(
                `${baseCls}-location`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiLocation.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiLocation;
