import PropTypes from 'prop-types';
import { TbIndentDecrease as DecreaseIndent } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiTextDecreaseIndent = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <DecreaseIndent
            {...rest}
            className={classNameUtil(
                `${baseCls}-text-decrease-indent`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiTextDecreaseIndent.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiTextDecreaseIndent;
