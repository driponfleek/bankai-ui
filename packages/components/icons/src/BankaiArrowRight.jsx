import PropTypes from 'prop-types';
import { TbArrowNarrowRight as ArrowRight } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiArrowRight = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <ArrowRight
            {...rest}
            className={classNameUtil(
                `${baseCls}-arrow-right`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiArrowRight.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiArrowRight;
