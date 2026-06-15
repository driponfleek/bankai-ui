import { TbBrandLinkedin as LinkedIn } from 'react-icons/tb';

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
const BankaiSocialLinkedIn = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <LinkedIn
            {...rest}
            className={classNameUtil(
                `${baseCls}-social-linkedin`,
                className,
                contextCls,
            )}
        />
    );
};

export default BankaiSocialLinkedIn;
