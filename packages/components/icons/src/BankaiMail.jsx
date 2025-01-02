import PropTypes from 'prop-types';
import { TbMail as Mail } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiMail = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Mail
            {...rest}
            className={classNameUtil(`${baseCls}-mail`, className, contextCls)}
        />
    );
};

BankaiMail.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiMail;
