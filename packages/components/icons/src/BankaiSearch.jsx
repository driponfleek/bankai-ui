import PropTypes from 'prop-types';
import { TbSearch as Search } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiSearch = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Search
            {...rest}
            className={classNameUtil(
                `${baseCls}-search`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiSearch.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiSearch;
