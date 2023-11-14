import PropTypes from 'prop-types';
import { TbCloudDownload as CloudDownload } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiCloudDownload = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <CloudDownload
            {...rest}
            className={classNameUtil(
                `${baseCls}-cloud-download`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiCloudDownload.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiCloudDownload;
