import PropTypes from 'prop-types';
import { TbZoomIn as ZoomIn } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiZoomIn = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <ZoomIn
            {...rest}
            className={classNameUtil(
                `${baseCls}-zoom-in`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiZoomIn.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiZoomIn;
