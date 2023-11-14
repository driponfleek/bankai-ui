import PropTypes from 'prop-types';
import { BsArrowDown } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiArrowDown = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsArrowDown
            {...rest}
            className={classNameUtil(
                `${baseCls}-arrow-down`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiArrowDown.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiArrowDown;
