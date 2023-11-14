import PropTypes from 'prop-types';
import { TbCrop as Crop } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiCrop = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Crop
            {...rest}
            className={classNameUtil(`${baseCls}-crop`, className, contextCls)}
        />
    );
};

BankaiCrop.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCrop;
