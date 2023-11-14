import PropTypes from 'prop-types';
import { TbHome as Home } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiHome = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Home
            {...rest}
            className={classNameUtil(`${baseCls}-home`, className, contextCls)}
        />
    );
};

BankaiHome.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiHome;
