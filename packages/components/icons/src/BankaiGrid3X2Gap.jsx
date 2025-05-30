import PropTypes from 'prop-types';
import { TbGripHorizontal as Grid3X2Gap } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiGrid3X2Gap = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Grid3X2Gap
            {...rest}
            className={classNameUtil(
                `${baseCls}-grid-3x2-gap`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiGrid3X2Gap.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiGrid3X2Gap;
