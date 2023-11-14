import PropTypes from 'prop-types';
import { TbStar as Star } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiStar = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <Star
            {...rest}
            className={classNameUtil(`${baseCls}-star`, className, contextCls)}
        />
    );
};

BankaiStar.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiStar;
