import PropTypes from 'prop-types';
import { TbDotsVertical as MoreVertical } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiMoreVertical = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <MoreVertical
            {...rest}
            className={classNameUtil(
                `${baseCls}-more-vertical`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiMoreVertical.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiMoreVertical;
