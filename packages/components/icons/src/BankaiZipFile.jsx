import PropTypes from 'prop-types';
import { BsFileZip } from 'react-icons/bs';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiZipFile = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <BsFileZip
            className={classNameUtil(
                `${baseCls}-zip-file`,
                className,
                contextCls,
            )}
            {...rest}
        />
    );
};

BankaiZipFile.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiZipFile;
