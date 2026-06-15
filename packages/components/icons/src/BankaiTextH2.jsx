import { TbH2 as TextH2 } from 'react-icons/tb';

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
const BankaiTextH2 = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <TextH2
            {...rest}
            className={classNameUtil(
                `${baseCls}-text-h2`,
                className,
                contextCls,
            )}
        />
    );
};

export default BankaiTextH2;
