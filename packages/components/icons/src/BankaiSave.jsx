import PropTypes from 'prop-types';
import { TbDeviceFloppy as Save } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiSave = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Save
            {...rest}
            className={classNameUtil(`${baseCls}-save`, className, contextCls)}
        />
    );
};

BankaiSave.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiSave;
