import PropTypes from 'prop-types';
import { TbCircleMinus as CircleDash } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiCircleDash = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <CircleDash
            {...rest}
            className={classNameUtil(
                `${baseCls}-circle-dash`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiCircleDash.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCircleDash;
