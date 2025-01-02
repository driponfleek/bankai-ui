import PropTypes from 'prop-types';
import { TbClipboard as Clipboard } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiClipboard = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Clipboard
            {...rest}
            className={classNameUtil(
                `${baseCls}-clipboard`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiClipboard.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiClipboard;
