import PropTypes from 'prop-types';
import { TbMaximize as Maximize } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiMaximize = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Maximize
            {...rest}
            className={classNameUtil(
                `${baseCls}-maximize`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiMaximize.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiMaximize;
