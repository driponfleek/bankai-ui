import PropTypes from 'prop-types';
import { TbZoomOut as ZoomOut } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiZoomOut = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <ZoomOut
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
