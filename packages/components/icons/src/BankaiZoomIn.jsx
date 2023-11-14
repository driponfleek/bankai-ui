import PropTypes from 'prop-types';
import { CgZoomIn } from 'react-icons/cg';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiZoomIn = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <CgZoomIn
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
