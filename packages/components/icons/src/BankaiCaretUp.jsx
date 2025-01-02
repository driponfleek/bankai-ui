import PropTypes from 'prop-types';
import { TbCaretUpFilled as CaretUp } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiCaretUp = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <CaretUp
            {...rest}
            className={classNameUtil(
                `${baseCls}-caret-up`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiCaretUp.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCaretUp;
