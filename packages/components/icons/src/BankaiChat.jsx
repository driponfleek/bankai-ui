import PropTypes from 'prop-types';
import { TbMessageCircle as Chat } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiChat = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Chat
            {...rest}
            className={classNameUtil(`${baseCls}-chat`, className, contextCls)}
        />
    );
};

BankaiChat.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiChat;
