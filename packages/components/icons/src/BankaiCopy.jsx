import PropTypes from 'prop-types';
import { TbCopy as Copy } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiCopy = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Copy
            {...rest}
            className={classNameUtil(`${baseCls}-copy`, className, contextCls)}
        />
    );
};

BankaiCopy.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCopy;
