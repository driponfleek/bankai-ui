import PropTypes from 'prop-types';
import { TbLoader2 as Spinner } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiSpinner = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Spinner
            {...rest}
            className={classNameUtil(
                `${baseCls}-spinner`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiSpinner.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiSpinner;
