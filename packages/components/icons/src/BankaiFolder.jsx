import PropTypes from 'prop-types';
import { TbFolder as Folder } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiFolder = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Folder
            {...rest}
            className={classNameUtil(
                `${baseCls}-folder`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiFolder.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiFolder;
