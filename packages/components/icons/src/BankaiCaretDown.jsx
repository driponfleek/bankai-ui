import PropTypes from 'prop-types';
import { TbCaretDownFilled as CaretDown } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiCaretDown = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <CaretDown
            {...rest}
            className={classNameUtil(
                `${baseCls}-caret-down`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiCaretDown.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCaretDown;
