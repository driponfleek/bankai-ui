import PropTypes from 'prop-types';
import { TbFilter as Filter } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiFilter = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Filter
            {...rest}
            className={classNameUtil(
                `${baseCls}-filter`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiFilter.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiFilter;
