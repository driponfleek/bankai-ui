import PropTypes from 'prop-types';
import { BsPlusCircle } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiCirclePlus = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsPlusCircle
            {...rest}
            className={classNameUtil(
                `${baseCls}-circle-plus`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiCirclePlus.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCirclePlus;
