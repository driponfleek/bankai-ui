import PropTypes from 'prop-types';
import { TbCloudUpload as CloudUpload } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiCloudUpload = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <CloudUpload
            {...rest}
            className={classNameUtil(
                `${baseCls}-cloud-upload`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiCloudUpload.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCloudUpload;
