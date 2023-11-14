import PropTypes from 'prop-types';
import { TbCaretRightFilled as CaretRight } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiCaretRight = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <CaretRight
            {...rest}
            className={classNameUtil(
                `${baseCls}-caret-right`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiCaretRight.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCaretRight;
