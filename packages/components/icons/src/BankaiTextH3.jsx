import { TbH3 as TextH3 } from 'react-icons/tb';

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
const BankaiTextH3 = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <TextH3
            {...rest}
            className={classNameUtil(
                `${baseCls}-text-h3`,
                className,
                contextCls,
            )}
        />
    );
};

export default BankaiTextH3;
