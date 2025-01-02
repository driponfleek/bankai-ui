import PropTypes from 'prop-types';
import { TbAlignLeft as TextAlignLeft } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiTextAlignLeft = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <TextAlignLeft
            {...rest}
            className={classNameUtil(
                `${baseCls}-text-align-left`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiTextAlignLeft.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiTextAlignLeft;
