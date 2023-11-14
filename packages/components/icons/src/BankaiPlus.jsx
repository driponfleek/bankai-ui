import PropTypes from 'prop-types';
import { BsPlus } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiPlus = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsPlus
            {...rest}
            className={classNameUtil(`${baseCls}-plus`, className, contextCls)}
        />
    );
};

BankaiPlus.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiPlus;
