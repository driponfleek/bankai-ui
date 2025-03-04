import PropTypes from 'prop-types';
import { TbCaretLeftFilled as CaretLeft } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiCaretLeft = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <CaretLeft
            {...rest}
            className={classNameUtil(
                `${baseCls}-caret-left`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiCaretLeft.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCaretLeft;
