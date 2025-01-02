import PropTypes from 'prop-types';
import { TbFileDescription as FileText } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiFileText = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <FileText
            {...rest}
            className={classNameUtil(
                `${baseCls}-file-text`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiFileText.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiFileText;
