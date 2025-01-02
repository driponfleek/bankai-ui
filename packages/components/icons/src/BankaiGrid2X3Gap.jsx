import PropTypes from 'prop-types';
import { TbGripVertical as Grid2X3Gap } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

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

BankaiGrid2X3Gap.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiGrid2X3Gap;
