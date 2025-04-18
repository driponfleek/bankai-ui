import PropTypes from 'prop-types';
import { TbCreditCard as CreditCard } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

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

BankaiCreditCard.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCreditCard;
