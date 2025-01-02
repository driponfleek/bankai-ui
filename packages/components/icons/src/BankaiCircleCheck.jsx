import PropTypes from 'prop-types';
import { TbCircleCheck as CircleCheck } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiCircleCheck = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <CircleCheck
            {...rest}
            className={classNameUtil(
                `${baseCls}-circle-check`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiCircleCheck.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCircleCheck;
