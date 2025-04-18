import PropTypes from 'prop-types';
import { TbListNumbers as NumberedList } from 'react-icons/tb';

// Utils
import classNameUtil from './utils/classNameUtil';

// Constants
import baseCls from './const/baseClsConst';

// Styles
import './styles/shared.scss';

const BankaiTextNumberedList = (props) => {
    const { contextCls, className, ...rest } = props;

    return (
        <NumberedList
            {...rest}
            className={classNameUtil(
                `${baseCls}-text-numbered-list`,
                className,
                contextCls,
            )}
        />
    );
};

BankaiTextNumberedList.propTypes = {
    contextCls: PropTypes.string,
    className: PropTypes.string,
};

export default BankaiTextNumberedList;
