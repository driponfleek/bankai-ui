import PropTypes from 'prop-types';
import { TbShoppingCart as Cart } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiCart = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Cart
            {...rest}
            className={classNameUtil(`${baseCls}-cart`, className, contextCls)}
        />
    );
};

BankaiCart.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCart;
