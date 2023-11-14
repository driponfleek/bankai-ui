import PropTypes from 'prop-types';
import { TbArrowNarrowLeft as ArrowLeft } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiArrowLeft = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <ArrowLeft
            {...rest}
            className={classNameUtil(
                `${baseCls}-arrow-left`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiArrowLeft.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiArrowLeft;
