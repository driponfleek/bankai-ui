import PropTypes from 'prop-types';
import { TbTextColor as TextColor } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiTextColor = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <TextColor
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
