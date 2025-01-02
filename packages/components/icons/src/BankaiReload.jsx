import PropTypes from 'prop-types';
import { TbReload as Reload } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiReload = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Reload
            {...rest}
            className={classNameUtil(
                `${baseCls}-reload`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiReload.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiReload;
