import { TbCreditCard as CreditCard } from 'react-icons/tb';

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
const BankaiCreditCard = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <CreditCard
            className={classNameUtil(
                `${baseCls}-credit-card`,
                className,
                contextCls,
            )}
            {...rest}
        />
    );
};

export default BankaiCreditCard;
