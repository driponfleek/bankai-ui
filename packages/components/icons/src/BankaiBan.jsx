import PropTypes from 'prop-types';
import { TbBan as Ban } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiBan = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Ban
            {...rest}
            className={classNameUtil(`${baseCls}-ban`, className, contextCls)}
        />
    );
};

BankaiBan.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiBan;
