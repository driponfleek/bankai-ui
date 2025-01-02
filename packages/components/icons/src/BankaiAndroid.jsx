import PropTypes from 'prop-types';
import { TbBrandAndroid as BrandAndroid } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiAndroid = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BrandAndroid
            {...rest}
            className={classNameUtil(
                `${baseCls}-android`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiAndroid.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
    stroke: 1,
};

export default BankaiAndroid;
