import { TbGripVertical as Grid2X3Gap } from 'react-icons/tb';

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
const BankaiGrid2X3Gap = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Grid2X3Gap
            {...rest}
            className={classNameUtil(
                `${baseCls}-grid-3x2-gap`,
                className,
                contextCls,
            )}
        />
    );
};

export default BankaiGrid2X3Gap;
