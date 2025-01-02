import PropTypes from 'prop-types';
import { TbLink as Link } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiLink = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Link
            {...rest}
            className={classNameUtil(`${baseCls}-link`, className, contextCls)}
        />
    );
};

BankaiLink.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiLink;
