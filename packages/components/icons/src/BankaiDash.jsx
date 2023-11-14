import PropTypes from 'prop-types';
import { TbMinus as Dash } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiDash = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Dash
            {...rest}
            className={classNameUtil(`${baseCls}-dash`, className, contextCls)}
        />
    );
};

BankaiDash.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiDash;
