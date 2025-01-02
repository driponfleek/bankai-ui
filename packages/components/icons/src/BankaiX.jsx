import PropTypes from 'prop-types';
import { TbX as X } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiX = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <X
            {...rest}
            className={classNameUtil(`${baseCls}-x`, className, contextCls)}
        />
    );
};

BankaiX.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiX;
