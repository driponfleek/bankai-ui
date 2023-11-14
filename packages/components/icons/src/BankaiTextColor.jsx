import PropTypes from 'prop-types';
import { CgFormatColor } from 'react-icons/cg';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiTextColor = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <CgFormatColor
            {...rest}
            className={classNameUtil(
                `${baseCls}-font-color`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiTextColor.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiTextColor;
