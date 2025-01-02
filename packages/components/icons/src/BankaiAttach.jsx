import PropTypes from 'prop-types';
import { TbPaperclip as Paperclip } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiAttach = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Paperclip
            {...rest}
            className={classNameUtil(
                `${baseCls}-attach`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiAttach.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiAttach;
