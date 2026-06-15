import { TbArrowNarrowLeft as ArrowLeft } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

/**
 * @param {Object} props
 * @param {string} [props.contextCls] - Additional CSS class name(s) to apply to the root element
 * @param {string} [props.className] - Additional CSS class name(s) to apply to the icon element
 */
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

export default BankaiArrowLeft;
