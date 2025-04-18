import PropTypes from 'prop-types';
import { TbBrandApple as BrandApple } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiApple = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BrandApple
            {...rest}
            className={classNameUtil(`${baseCls}-apple`, className, contextCls)}
        />
    );
};

BankaiApple.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiApple;
