import PropTypes from 'prop-types';
import { TbCircleX as CircleX } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiCircleX = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <CircleX
            {...rest}
            className={classNameUtil(
                `${baseCls}-circle-x`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiCircleX.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCircleX;
