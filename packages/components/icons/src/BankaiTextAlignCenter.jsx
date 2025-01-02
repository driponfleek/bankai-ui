import PropTypes from 'prop-types';
import { TbAlignCenter as TextAlignCenter } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiTextAlignCenter = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <TextAlignCenter
            {...rest}
            className={classNameUtil(
                `${baseCls}-text-align-center`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiTextAlignCenter.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiTextAlignCenter;
