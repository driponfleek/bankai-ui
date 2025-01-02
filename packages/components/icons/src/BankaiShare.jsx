import PropTypes from 'prop-types';
import { TbShare as Share } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiShare = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Share
            {...rest}
            className={classNameUtil(`${baseCls}-share`, className, contextCls)}
        />
    );
};

BankaiShare.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiShare;
