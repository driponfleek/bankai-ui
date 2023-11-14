import PropTypes from 'prop-types';
import { TbArrowNarrowDown as ArrowDown } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiArrowDown = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <ArrowDown
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
