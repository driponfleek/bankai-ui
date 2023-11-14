import PropTypes from 'prop-types';
import { CgZoomOut } from 'react-icons/cg';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiZoomOut = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <CgZoomOut
            {...rest}
            className={classNameUtil(
                `${baseCls}-zoom-out`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiZoomOut.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiZoomOut;
